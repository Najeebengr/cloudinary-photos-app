import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Najeeb Photos Album",
  description: "Cloudinary Photo Album Application in Next JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="flex">
        <Sidebar />
        <div className="w-full mx-3">
        {children}
          </div> 
        </div>
        <Toaster />
        </body>
    </html>
  );
}
