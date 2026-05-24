import type { Metadata } from "next";
import { Caveat, Inter, Playfair_Display } from "next/font/google";
import PageLayout from "../components/PageLayout";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const caveat = Caveat({
  variable: "--font-subhead",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My AI Journey",
  description: "AI-assisted blog built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${caveat.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
