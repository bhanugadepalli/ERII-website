import Stripe from "stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { clerkClient } from "@clerk/nextjs/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-01-27.acacia",
});

export async function POST(req: Request) {
  const body = await req.text();
  const sig = headers().get("stripe-signature");

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig!,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    return NextResponse.json(
      { error: `Webhook Error: ${err.message}` },
      { status: 400 }
    );
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const clerkUserId = session.metadata?.clerkUserId;

    if (clerkUserId) {
      const clerk = clerkClient();
      await clerk.users.updateUser(clerkUserId, {
        publicMetadata: { paidCourseAccess: true },
      });
    }
  }

  return NextResponse.json({ received: true });
}