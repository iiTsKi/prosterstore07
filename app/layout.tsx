"use client";

import "../assets/styles/globals.css";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

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

import { Pixelify_Sans, VT323 } from "next/font/google";

const VT323font = VT323({
  subsets: ["latin"],
  weight: ["400"], // include weights as needed
  display: "swap",
});
const PixelifySansfont = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mounted, isMounted] = useState(false);
  useEffect(() => {
    const loader = document.getElementById("initial-loader");
    if (loader) {
      setTimeout(() => {
        isMounted(true);
        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";
        setTimeout(() => {
          loader.remove();
        }, 300);
      }, 1500);
    }
  }, []);
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${PixelifySansfont.className} antialiased`}>
        {!mounted && (
          <>
            <div id="initial-loader" className="">
              <img
                src="/Spinning-Icon-Dollar.gif"
                alt=""
                height="32"
                width="32"
                style={{ objectFit: "contain" }}
              />
            </div>
          </>
        )}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {mounted && children}
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
            #intial-loader img{
            max-width: 32px;
            max-height: 32px}
        `}</style>
      </body>
    </html>
  );
}
