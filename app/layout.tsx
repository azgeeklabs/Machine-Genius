"use client";
// import type { Metadata } from "next"; // Importing Metadata type from Next.js
// import { Inter } from "next/font/google"; // Importing Inter font from Google Fonts
import "./globals.css"; // Importing global styles

import styles from "./mainLayout.module.css"; // Importing styles for the main layout
import GlobalContextProvider from "./_context/store";
import { Provider } from "react-redux";
import { store } from "./_redux/store";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import LogoAndTitle from "./_components/LogoAndTitle/LogoAndTitle";

// Initializing Inter font with Latin subset
// const inter = Inter({ subsets: ["latin"] });

// Metadata for the page
// export const metadata: Metadata = {
//   title: "Machine Genius",
//   description: "Generated by create next app",
// };

// Root layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isHydrated, setIsHydrated] = useState(false);
  useEffect(() => {
    setIsHydrated(true);
  }, []);
  if (!isHydrated) {
    return (
      <html lang="en">
        <body>
          <Provider store={store}>
            <GlobalContextProvider>
              <div className="bg-white min-h-screen w-full overflow-hidden flex flex-col justify-center items-center mx-auto h-[75vh] py-[1.5vw]">
                <div className={`flex flex-col justify-center items-center`}>
                  <LogoAndTitle needTxt={false} title="Genius is Loading..." />
                </div>
              </div>
            </GlobalContextProvider>
          </Provider>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <GlobalContextProvider>
            <div className={styles.main_wrapper}>
              <div className="w-full h-100vh p-0 flex">{children}</div>
            </div>
          </GlobalContextProvider>
        </Provider>
        <Toaster
          position="top-center"
          containerStyle={{
            zIndex: 91474836471,
          }}
        />
      </body>
    </html>
  );
}
