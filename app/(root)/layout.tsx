import Footer from "@/components/footer";
import Header from "@/components/shared/header";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await delay(2000);
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1 wrapper">{children}</main>
      <Footer />
    </div>
  );
}
