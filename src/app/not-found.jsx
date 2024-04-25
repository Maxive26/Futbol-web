import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-whiteCard w-full h-[95%] gap-10 flex-col flex justify-center items-center ">
      <h1 className="text-xl font-bold md:text-3xl">¡PAGINA NO ENCONTRADA!</h1>
      <Link
        className="transition font-bold px-5 py-2 rounded-full border-2 border-greenCard hover:bg-greenCard hover:text-blackBG"
        href={"/"}
      >
        Pagina principal
      </Link>
    </div>
  );
}
