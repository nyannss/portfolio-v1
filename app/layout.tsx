import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "400", "700", "900"],
  subsets: ["devanagari", "latin"],
  display: 'swap',
  adjustFontFallback: false
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ahann.vercel.app'),
  title: "ahann | Web Developer",
  description: "Hey! ahann here! I'm a web developer with a strong passion for continuous learning and collaboration, actively seeking new opportunities.",
  keywords: "portfolio, ahann, web, developer, software, engineer",
  openGraph: {
    title: "ahann | Web Developer",
    description: "Hey! ahann here! I'm a web developer with a strong passion for continuous learning and collaboration, actively seeking new opportunities.",
    type: "article",
    url: "https://ahann.dev",
    images: "/screenshot.png",
  },
  twitter: {
    card: "summary",
    site: "@frhnbrln",
    title: "ahann | Web Developer",
    description: "Hey! ahann here! I'm a web developer with a strong passion for continuous learning and collaboration, actively seeking new opportunities.",
    creator: "@frhnbrln",
    images: "/screenshot.png",
  },
  manifest: "/site.webmanifest",
  icons: [
    {
      rel: "icon",
      sizes: "32x32",
      type: "image/png",
      url: "/favicon-32x32.png"
    },
    {
      rel: "icon",
      sizes: "16x16",
      type: "image/png",
      url: "/favicon-16x16.png"
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/apple-touch-icon.png"
    }
  ]

};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className} id="root">{children}</body>
    </html>
  );
}
