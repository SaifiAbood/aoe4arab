import type { Metadata } from "next";
import {  Montserrat} from "next/font/google";
import Navbar from "@/components/user/navbar";
import "./globals.css";



const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Welcome aoe4arab",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable}  antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
