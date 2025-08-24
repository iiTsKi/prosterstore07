import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import { ShoppingCartIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ModeToggle from "./mode-toggle";
import Menu from "./menu";

const Header = () => {
  return (
    <>
      <header className="w-full border-b">
        <div className="wrapper flex-between">
          <div className="flex-start">
            <Link href="/" className="flex-start" />
            <Image
              src="/IconDollar.png"
              alt={`${APP_NAME}`}
              height={48}
              width={48}
            />
            <span className="hidden lg:block font-bold text-2xl ml-3">
              {APP_NAME}
            </span>
          </div>
          <div className="space-x-2 flex items-center justify-center">
            <Menu />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
