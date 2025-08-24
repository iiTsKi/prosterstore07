"use client";
import { APP_NAME } from "@/lib/constants";
import bouncingQuestionMark from "@/public/BouncingQuestionMark.gif";

import Image from "next/image";
import Link from "next/link";

const notFoundPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Image
          src={bouncingQuestionMark}
          alt={`${APP_NAME} logo`}
          width={48}
          height={48}
          priority={true}
        />
        <div className="p-6 rounded-lg shadow-md text-center w-1/3">
          <div className="text-3xl font-bold mb-4">Not Found</div>
          <p className="text-destructive">Could not find requested page</p>
          <div className="flex justify-center items-center p-3 ">
            <div className="border-2 px-5 py-2 rounded-lg  ">
              <Link href={"/"}>&larr; Back</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default notFoundPage;
