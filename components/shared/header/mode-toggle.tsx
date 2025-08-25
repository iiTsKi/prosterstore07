"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const ModeToggle = () => {
  const [mounted, isMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [hoveredIcon, setHoveredIcon] = useState(false);

  useEffect(() => {
    isMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  function handleToggle() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  return (
    // <DropdownMenu>
    //   <DropdownMenuTrigger
    //     onMouseEnter={() => setHoveredIcon(false)}
    //     onMouseLeave={() => setHoveredIcon(true)}
    //     className="ring-0 ring-offset-0"
    //   >
    //     {theme === "dark" ? (
    //       <Image
    //         src={hoveredIcon ? "/MoonIcon.png" : "/MoonIcon-hover.png"}
    //         width={32}
    //         height={32}
    //         alt="..."
    //       />
    //     ) : (
    //       <SunIcon />
    //     )}
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent>
    //     <DropdownMenuLabel>Appearance</DropdownMenuLabel>
    //   </DropdownMenuContent>
    // </DropdownMenu>
    <>
      <div
        className=""
        onMouseEnter={() => setHoveredIcon(true)}
        onMouseLeave={() => setHoveredIcon(false)}
        onClick={handleToggle}
      >
        {theme === "dark" ? (
          <Image
            src={hoveredIcon ? "/MoonIcon-hover.png" : "/MoonIcon.png"}
            width={32}
            height={32}
            alt="MoonIcon"
          />
        ) : (
          <Image
            width={32}
            height={32}
            src={hoveredIcon ? "/SunIcon.png" : "/SunIcon-hover.png"}
            alt="SunIcon"
          />
        )}
      </div>
    </>
  );
};

export default ModeToggle;
