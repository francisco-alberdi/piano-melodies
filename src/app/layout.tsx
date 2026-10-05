import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Piano Melodies",
  description:
    "Personalized in-home piano lessons in Miami with adaptive, bilingual instruction designed for children of all ages and abilities.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
