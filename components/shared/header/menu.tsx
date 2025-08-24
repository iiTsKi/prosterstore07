"use client";

import { ShoppingCartIcon } from "lucide-react";
import ModeToggle from "./mode-toggle";
import UserLoginIcon from "./userlogin";

const Menu = () => {
  return (
    <>
      <ModeToggle />
      <ShoppingCartIcon />
      <UserLoginIcon />
    </>
  );
};

export default Menu;
