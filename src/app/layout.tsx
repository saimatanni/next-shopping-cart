import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import { cn } from "./lib/Utils";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./component/Footer";
import Layout from "./component/Layout";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen font-sans antialiased bgDesign",
          inter.className
        )}
      >
        <Layout>

     
        <Navbar />
        {children}
        <Footer/>
        </Layout>
      </body>
    </html>
  );
}
