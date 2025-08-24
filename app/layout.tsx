import "../assets/styles/globals.css";

import { Josefin_Sans } from "next/font/google";
import { Metadata } from "next";

import { APP_ICON, APP_NAME, SERVER_URL } from "@/lib/constants";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: {
    template: `%s | JustMyStore`,
    default: APP_NAME,
  },
  description: "Modern Store NextJS",
  metadataBase: new URL(SERVER_URL),
  icons: {
    icon: APP_ICON,
  },
};

const Josefin = Josefin_Sans({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${Josefin.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
