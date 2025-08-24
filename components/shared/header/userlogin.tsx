import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const UserLoginIcon = () => {
  const [hovered, isHovered] = useState(false);
  return (
    <>
      <div
        className="flex justify-center items-center "
        onMouseEnter={() => isHovered(true)}
        onMouseLeave={() => isHovered(false)}
      >
        <Link href="/sign-in">
          <Image
            style={{ imageRendering: "pixelated" }}
            src={hovered ? "/UserIcon-hover.png" : "/UserIcon.png"}
            alt="UserIcon"
            width={32}
            height={32}
          />
        </Link>
      </div>
    </>
  );
};

export default UserLoginIcon;
