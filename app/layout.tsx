import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Sanity Blog",
  description: "My sanity blog",
};

const ANALYTICS_ID = process.env.GOOGLE_ANALYTICS_ID;
const TAG_ID = process.env.GOOGLE_TAG_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <GoogleAnalytics gaId={`${ANALYTICS_ID}`} />
      <GoogleTagManager gtmId={`${TAG_ID}`} />
    </html>
  );
}
