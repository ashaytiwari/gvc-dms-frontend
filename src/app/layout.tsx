import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { NextUIProvider } from "@nextui-org/react";

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
        <NextUIProvider>
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
