import type { Metadata } from "next";
import { Inter } from "next/font/google";

import RootProvider from "@/components/RootProvider";

import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GVC DMS",
  description: "Internal data management system by GVC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const bodyAttributes = {
    className: inter.className,
    suppressHydrationWarning: true
  };

  return (
    <html lang="en">
      <body {...bodyAttributes}>
        <RootProvider>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
