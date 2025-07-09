import type { Metadata } from "next";

import "./globals.css";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { clsx } from "clsx";
import { Providers } from "@/lib/providers";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
