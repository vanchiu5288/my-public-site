import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "起點｜Next.js 網站",
  description: "使用 Next.js、TypeScript 與 Tailwind CSS 建立的網站。",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "起點｜Next.js 網站",
    description: "使用 Next.js、TypeScript 與 Tailwind CSS 建立的網站。",
    locale: "zh_TW",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "起點｜Next.js 網站",
    description: "使用 Next.js、TypeScript 與 Tailwind CSS 建立的網站。",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-Hant" className="h-full antialiased motion-safe:scroll-smooth">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
