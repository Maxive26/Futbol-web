import FootballBall from "@/app/components/icons/footballBall";
import Link from "next/link";
export default function loading() {
  return (
    <>
      <div className="flex items-center mb-4 justify-between">
        <h1 className="text-2xl animate-pulse sm:font-semibold text-whiteCard  flex items-center">
          <span className="mr-2">
            <FootballBall color={"#FFF"} />
          </span>
          INFORMACIÓN DEL EQUIPO
        </h1>
        <Link
          href={"/"}
          className="text-whiteCard animate-pulse font-semibold py-1 flex justify-center items-center bg-grayPage w-28 transition ease-out border-2 border-greenCard  px-3 rounded-xl hover:bg-greenCard hover:text-blackBG"
        >
          Volver
        </Link>
      </div>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 bg-grayPage rounded-xl p-5 gap-10">
        <div className="flex flex-col p-3 items-center  text-whiteCard ">
          <div className=" p-3 flex justify-center items-center rounded-full bg-blackBG w-64 h-64 animate-pulse"></div>

          <div className="w-44 h-7 rounded-xl mt-10 animate-pulse bg-blackBG"></div>

          <div className="flex flex-col  justify-start items-start mt-5 w-full">
            <div className="w-44 h-5 rounded-xl animate-pulse mb-5 bg-blackBG"></div>
            <div className="w-44 h-5 rounded-xl animate-pulse mb-5 bg-blackBG"></div>
            <div className="w-44 h-5 rounded-xl animate-pulse mb-5 bg-blackBG"></div>
            <div className="w-44 h-5 rounded-xl animate-pulse mb-5 bg-blackBG"></div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="w-36 h-5 rounded-xl animate-pulse mb-5 bg-blackBG"></div>

          <div className="w-3/4 h-12 rounded-xl animate-pulse mb-5 bg-blackBG"></div>
        </div>
        <div className="flex flex-col">
          <div className="w-36 h-5 rounded-xl animate-pulse mb-5 bg-blackBG"></div>
          <div className="w-3/4 h-12 rounded-xl animate-pulse mb-5 bg-blackBG"></div>
        </div>
      </div>
    </>
  );
}
