import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const MenuShoppingCart = () => {
  const [hovered, isHovered] = useState(false);
  return (
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
  );
};

export default MenuShoppingCart;
