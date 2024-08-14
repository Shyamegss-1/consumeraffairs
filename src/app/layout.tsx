import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import UserLayout from "@/components/Layouts/userLayout/UserLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ConsumerAffairs®: Research. Review. Resolve.",
  description: "ConsumerAffairs®: Research. Review. Resolve.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous"></link> */}
      </head>
      <body className={inter.className}>
        <main className="">
          <UserLayout>{children}</UserLayout>
        </main>
      </body>
    </html>
  );
}
