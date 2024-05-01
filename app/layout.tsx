import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {GlobalContextProvider} from './_context/store'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Machine Genuis",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalContextProvider>
        <div className="main-wrapper ">
          {children}
        </div>
        </GlobalContextProvider>

      </body>
    </html>
  );
}
