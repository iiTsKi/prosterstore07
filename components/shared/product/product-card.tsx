"use client";

import DarkCard from "@/public/Sprite-Card01.png";
import GoldCard from "@/public/Sprite-Card02.png";
import Image from "next/image";
import Link from "next/link";
import ProductPrice from "./product-price";

import { useTheme } from "next-themes";
import { VT323 } from "next/font/google";
const VT323font = VT323({
  subsets: ["latin"],
  weight: ["400"], // include weights as needed
  display: "swap",
});

const ProductCard = ({ product }: { product: any }) => {
  const { theme } = useTheme();
  return (
    <>
      {/* <div className="relative">
        {theme === "light" ? (
          <div>
            <Image
              className="pixelated absolute -z-1"
              src={GoldCard}
              alt="..."
              width={350}
              height={450}
            />
          </div>
        ) : (
          <div>
            <Image
              className="pixelated absolute -z-1"
              src={DarkCard}
              alt="..."
              width={350}
              height={450}
            />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="grid col-span-2 justify-center-safe items-center-safe  md:min-h-[250px]">
            <Image
              className="pixelated"
              src={product.images[0]}
              alt="..."
              width={64}
              height={64}
            />
          </div>
          <div className="grid col-span-2 px-5 text-xs text-muted-foreground">
            {product.brand}
          </div>
          <div className="grid col-span-2 px-5 mb-3 min-h-[40px]">
            <Link href={`/product/${product.slug}`}>{product.name}</Link>
          </div>
          <div className="grid col-span-1 px-5 items-center-safe">
            {product.rating} Stars
          </div>
          <div className="grid col-span-1 px-5 items-center-safe text-right">
            {product.stock ? (
              <ProductPrice
                className={`${VT323font.className} `}
                value={product.price}
              />
            ) : (
              <div>Out of Stock</div>
            )}
          </div>
        </div>
      </div> */}

      <div className="relative">
        {theme === "light" ? (
          <div>
            <Image
              className="pixelated absolute -z-1"
              src={"/Sprite-Card02.png"}
              alt="..."
              width={350}
              height={450}
            />
          </div>
        ) : (
          <div>
            <Image
              className="pixelated absolute -z-1"
              src={"/Sprite-Card01.png"}
              alt="..."
              width={350}
              height={450}
            />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="grid col-span-2 justify-center-safe items-center-safe  md:min-h-[250px]">
            <Link className="cursor-pointer" href={`/product/${product.slug}`}>
              <Image
                className="pixelated"
                src={product.images[0]}
                alt="..."
                width={64}
                height={64}
              />
            </Link>
          </div>
          <div className="grid col-span-2 px-5 text-xs text-muted-foreground">
            {product.brand}
          </div>
          <div className="grid col-span-2 px-5 mb-3 min-h-[40px]">
            <Link href={`/product/${product.slug}`}>{product.name}</Link>
          </div>
          <div className={`grid col-span-1 px-5 items-center-safe`}>
            {product.rating} Stars
          </div>
          <div className="grid col-span-1 px-5 items-center-safe text-right">
            {product.stock ? (
              <ProductPrice
                className={`${VT323font.className} `}
                value={product.price}
              />
            ) : (
              <div>Out of Stock</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
