import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ weight: ["100", "200", "400", "700", "900"], subsets: ["devanagari", "latin"] });

export const metadata: Metadata = {
  title: "ahann | Web Developer",
  description: "Hey! ahann here! I'm a fullstack developer with a strong passion for continuous learning and collaboration, actively seeking new opportunities.",
  keywords: "portfolio, ahann, web, developer, software, engineer",
  // openGraph: {
  //   title: "ahann | Web Developer",
  //   description: "Hey! ahann here! I'm a fullstack developer with a strong passion for continuous learning and collaboration, actively seeking new opportunities.",
  //   type: "article",
  //   url: "https://ahann.dev",
  // },
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
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
