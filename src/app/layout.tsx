import type { Metadata } from "next";

import "./globals.css";
import { siteConfig } from "@/config/site";
import { poppins } from "@/config/fonts";
import { clsx } from "clsx";
import { Providers } from "@/lib/providers";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.png",
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
          "min-h-screen bg-[#F0F0F0] font-sans antialiased",
          poppins.variable
        )}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
