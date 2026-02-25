import Stripe from "stripe";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-01-27.acacia",
});

export async function POST() {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const priceId = process.env.STRIPE_PRICE_ID!;
  const appUrl = process.env.NEXT_PUBLIC_APP_URL!;

  const session = await stripe.checkout.sessions.create({
    mode: "payment", // ✅ one-time
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${appUrl}/self-learning?checkout=success`,
    cancel_url: `${appUrl}/pricing?checkout=cancel`,
    metadata: { clerkUserId: userId },
  });

  return NextResponse.json({ url: session.url });
}