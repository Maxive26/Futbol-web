import FootballBall from "@/app/components/icons/footballBall";
import Link from "next/link";
import React from "react";

export default function loading() {
  return (
    <>
      <div className="flex items-center mb-4 justify-between">
        <h1 className="text-2xl animate-pulse sm:font-semibold text-whiteCard  flex items-center">
          <span className="mr-2">
            <FootballBall color={"#FFF"} />
          </span>
          INFORMACIÓN DEL ENCUENTRO
        </h1>
        <Link
          href={"/"}
          className="text-whiteCard animate-pulse font-semibold py-1 flex justify-center items-center bg-grayPage w-28 transition ease-out border-2 border-greenCard  px-3 rounded-xl hover:bg-greenCard hover:text-blackBG"
        >
          Volver
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 xl:grid-cols-3 bg-grayPage rounded-xl p-5 text-center gap-10">
        <div className="text-whiteCard flex flex-col items-center">
          <div className="group">
            <div className="flex justify-center group-hover:animate-pulse">
              <div className="w-52 h-52 bg-blackBG rounded-full animate-pulse"></div>
            </div>

            <h1 className="text-2xl mb-4 group-hover:text-greenCard group-hover:animate-pulse"></h1>
          </div>
          <h1 className="mb-4 bg-blackBG w-56 h-5 rounded animate-pulse"></h1>
          <h1 className="mb-4 bg-blackBG w-56 h-5 rounded animate-pulse"></h1>
          <h1 className="mb-4 bg-blackBG w-56 h-5 rounded animate-pulse"></h1>
        </div>
      </div>
    </>
  );
}
