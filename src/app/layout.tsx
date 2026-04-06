import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://deepak-sarangi.vercel.app"),
  title: "Deepak Sarangi | Software Engineer",
  description:
    "Portfolio for Deepak Sarangi, a software engineer with experience across enterprise delivery and financial services.",
  openGraph: {
    title: "Deepak Sarangi | Software Engineer",
    description:
      "A one-page portfolio covering experience, strengths, and contact details.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepak Sarangi | Software Engineer",
    description:
      "A one-page portfolio covering experience, strengths, and contact details.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
