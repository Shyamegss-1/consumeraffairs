"use client";

import "./globals.css";
import { usePathname } from "next/navigation";
import UserLayout from "@/components/Layouts/userLayout/UserLayout";
import BusinessLayout from "@/components/Layouts/businessAdminLayout/BusinessLayout";
import { Toaster } from "sonner";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isBusinessRoute = pathname?.startsWith('/business');

  return (
    <>
      {isBusinessRoute ? (
        <BusinessLayout>{children}</BusinessLayout>
      ) : (
        <UserLayout>{children}</UserLayout>
      )}
    </>
  );
}
