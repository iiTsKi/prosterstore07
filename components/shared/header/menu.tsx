"use client";

import { Button } from "@/components/ui/button";
import ModeToggle from "./mode-toggle";
import Link from "next/link";
import { ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import UserLoginIcon from "./userlogin";

const Menu = () => {
  const [hovered, isHovered] = useState(false);
  return (
    <>
      <ModeToggle />
      <div
        className="flex justify-center items-center "
        onMouseEnter={() => isHovered(true)}
        onMouseLeave={() => isHovered(false)}
      >
        <Link href="/cart">
          <Image
            style={{ imageRendering: "pixelated" }}
            src={hovered ? "/MoneyBag-hover.png" : "/MoneyBag.png"}
            alt="Shopping Cart"
            width={32}
            height={32}
          />
        </Link>
      </div>
      <UserLoginIcon />
    </>
  );
};

export default Menu;
