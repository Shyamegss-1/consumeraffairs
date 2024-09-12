"use client";

import "./globals.css";
import { usePathname } from "next/navigation";
import UserLayout from "@/components/Layouts/userLayout/UserLayout";
import BusinessLayout from "@/components/Layouts/businessAdminLayout/BusinessLayout";
import { Toaster } from "sonner";
import AdminLayout from "@/components/Layouts/adminLayout/AdminLayout";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isBusinessRoute = pathname?.startsWith("/business");
  const isAdminRoute = pathname?.startsWith("/admin");

  if (isBusinessRoute) {
    return <BusinessLayout>{children}</BusinessLayout>;
  }

  if (isAdminRoute) {
    return <AdminLayout>{children}</AdminLayout>;
  }

  return <UserLayout>{children}</UserLayout>;
}
