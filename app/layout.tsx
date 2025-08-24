"use client";

import "../assets/styles/globals.css";

import { Josefin_Sans } from "next/font/google";

import { ThemeProvider } from "next-themes";
import { useEffect } from "react";

// export const metadata: Metadata = {
//   title: {
//     template: `%s | JustMyStore`,
//     default: APP_NAME,
//   },
//   description: "Modern Store NextJS",
//   metadataBase: new URL(SERVER_URL),
//   icons: {
//     icon: APP_ICON,
//   },
// };

const Josefin = Josefin_Sans({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const loader = document.getElementById("initial-loader");
    if (loader) {
      loader.style.opacity = "0";
      loader.style.pointerEvents = "none";
      setTimeout(() => {
        console.log("useEffect-InitialLoader,Loaded");
        loader.remove();
      }, 1500);
    }
  }, []);
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${Josefin.className} antialiased`}>
        <div id="intial-loader" className="">
          Loader... Loading...
        </div>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        <style>{`
          #initial-loader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: #111;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            z-index: 9999;
            transition: opacity 0.5s ease;
          }
        `}</style>
      </body>
    </html>
  );
}
