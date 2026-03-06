import SiteHeaderClient from "@/components/siteHeaderClient";
import { auth, currentUser } from "@clerk/nextjs/server";

export default async function SiteHeader() {
  const { userId } = await auth();

  let showCourse = false;
  let isAdmin = false;

  if (userId) {
    const user = await currentUser();

    const paidCourseAccess = Boolean(user?.publicMetadata?.paidCourseAccess);
    const role = (user?.publicMetadata?.role as string | undefined) ?? "";

    isAdmin = role === "admin";

    // Admin override: admins always see the course
    showCourse = paidCourseAccess || isAdmin;
  }

  return <SiteHeaderClient showCourse={showCourse} isAdmin={isAdmin} />;
}