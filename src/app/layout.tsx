import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeContext";
import { CartProvider } from "./components/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Apex Suite — Vector E-Commerce & Interactive Showcase Platform",
  description:
    "High-performance vector e-commerce storefront and interactive portfolio showcase built with Next.js 14, Tailwind CSS, Lucide icons, and vector graphics.",
  icons: {
    icon: [
      { url: "/favicon.ico?v=20260727" },
      { url: "/favicon-32x32.png?v=20260727", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png?v=20260727", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico?v=20260727",
    apple: "/apple-touch-icon.png?v=20260727",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Apex Suite — Vector E-Commerce Platform",
    description: "High-performance vector e-commerce storefront & interactive portfolio showcase.",
    url: "https://apex-commerce-suite.vercel.app",
    siteName: "Apex Commerce Suite",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-[#09090b] text-zinc-100 antialiased selection:bg-zinc-800 selection:text-white`}>
        <ThemeProvider>
          <CartProvider>{children}</CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
