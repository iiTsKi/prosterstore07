"use client";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ModeToggle from "./mode-toggle";
import MenuShoppingCart from "./shopping-cart";
import MenuUserLogin from "./user-login";
import { EllipsisVertical } from "lucide-react";

const Menu = () => {
  return (
    <>
      <div className="flex justify-end gap-3">
        <nav className="hidden md:flex w-full max-w-xs gap-1">
          <ModeToggle />
          <MenuShoppingCart />
          <MenuUserLogin />
        </nav>
        <nav className="md:hidden">
          <Sheet>
            <SheetTrigger className="align-midle">
              <EllipsisVertical />
            </SheetTrigger>
            <SheetContent className="flex flex-col items-start">
              <SheetTitle>Menu</SheetTitle>
              <ModeToggle />
              <MenuShoppingCart />
              <MenuUserLogin />
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </>
  );
};

export default Menu;
