"use client";
import loading from "@/assets/loader.gif";
import Image from "next/image";

const LoadingPage = () => {
  return (
    <>
      <div className="very-center">
        <Image
          src={loading}
          alt="loading.."
          width={75}
          height={75}
          unoptimized
        />
      </div>
    </>
  );
};

export default LoadingPage;
