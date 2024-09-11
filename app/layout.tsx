"use client";
// import type { Metadata } from "next"; // Importing Metadata type from Next.js
// import { Inter } from "next/font/google"; // Importing Inter font from Google Fonts
import "./globals.css"; // Importing global styles
import styles from "./mainLayout.module.css"; // Importing styles for the main layout
import GlobalContextProvider from "./_context/store";
import { Provider } from "react-redux";
import { store } from "./_redux/store";
import { SocketProvider } from "./_context/SocketProvider";
// import { Toaster } from "react-hot-toast";
import dynamic from "next/dynamic";

// Initializing Inter font with Latin subset
// const inter = Inter({ subsets: ["latin"] });

// Metadata for the page
// export const metadata: Metadata = {
//   title: "Machine Genius",
//   description: "Generated by create next app",
// };

const Toaster = dynamic(
  () => import("react-hot-toast").then((mod) => mod.Toaster),
  {
    ssr: false,
  }
);

// Root layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <GlobalContextProvider>
            <SocketProvider>
              <div className={styles.main_wrapper}>
                <div className="w-full h-100vh p-0 flex">{children}</div>
              </div>
            </SocketProvider>
          </GlobalContextProvider>
        </Provider>
        <Toaster
          position="top-center"
          containerStyle={{
            zIndex: 50001,
          }}
        />

        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/fabric.js/5.3.0/fabric.min.js"
          defer
        ></script>
      </body>
    </html>
  );
}
