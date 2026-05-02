import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "@mew/ui Playground",
  description: "Design system showcase",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6366f1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-dvh bg-background">
          <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-3">
              <Link href="/" className="text-sm font-semibold text-text-primary">
                @mew/ui playground
              </Link>
              <nav className="flex items-center gap-2 text-xs">
                <Link href="/components/getting-started" className="rounded-lg border border-border px-2.5 py-1 text-text-secondary hover:text-text-primary">
                  Start
                </Link>
                <Link href="/components" className="rounded-lg border border-border px-2.5 py-1 text-text-secondary hover:text-text-primary">
                  Components
                </Link>
                <Link href="/icons" className="rounded-lg border border-border px-2.5 py-1 text-text-secondary hover:text-text-primary">
                  Icons
                </Link>
              </nav>
            </div>
          </header>
          <main className="mx-auto w-full max-w-7xl px-6 py-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
