import type { Metadata } from "next";
import "./globals.css";
import Footer from "./footer";
import Header from "./header";
import { Lexend } from "next/font/google";

const lexend = Lexend({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Sarah Hägele Portfolio",
  description: "A humble portfolio with all kinds of things.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`text-lg ${lexend.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
