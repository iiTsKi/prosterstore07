import Footer from "@/components/footer";
import Header from "@/components/shared/header";
import {
  APP_DESCRIPTION,
  APP_ICON,
  APP_NAME,
  SERVER_URL,
} from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: APP_NAME,
  },
  icons: {
    icon: APP_ICON,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1 wrapper">{children}</main>
      <Footer />
    </div>
  );
}
