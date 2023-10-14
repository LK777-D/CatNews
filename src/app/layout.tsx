import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/footer";
import PostContextProvider from "@/context/postContext";
import Testimonials from "@/components/Testimonials";
import Slider from "@/components/Slider";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cat News",
  description: "News Blog and Forum",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PostContextProvider>
          <Nav />
          <Slider />
          {children}
          <Testimonials />
          <Footer />
        </PostContextProvider>
      </body>
    </html>
  );
}
