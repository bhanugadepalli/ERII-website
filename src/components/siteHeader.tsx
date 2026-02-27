import SiteHeaderClient from "@/components/siteHeaderClient";
import { currentUser } from "@clerk/nextjs/server";

export default async function SiteHeader() {
  const user = await currentUser();

  const paidCourseAccess = Boolean(user?.publicMetadata?.paidCourseAccess);
  const role = (user?.publicMetadata?.role as string | undefined) ?? "";
  const isAdmin = role === "admin";

  // Admin should see Course too
  const showCourse = paidCourseAccess || isAdmin;

  return <SiteHeaderClient showCourse={showCourse} isAdmin={isAdmin} />;
}