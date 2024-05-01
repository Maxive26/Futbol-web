import React from "react";
import Plus from "@/app/components/icons/plus";
import Link from "next/link";
import Image from "next/image";

export default function Matches({
  fecha,
  equipo1,
  equipo2,
  horario,
  estado,
  fixtureID,
}) {
  return (
    <div className="text-whiteCard flex flex-col w-96 border border-greenCard mb-2">
      <div className="flex justify-center relative border-b border-greenCard py-1">
        {estado !== "NS" && (
          <Link
            href={`/fixture/${fixtureID}`}
            className="absolute top-0 left-0 w-5 h-full bg-firstTeam flex justify-center items-center"
          >
            <Plus color={"#fff"} />
          </Link>
        )}
        <span className="text-xs">9/12/18</span>
      </div>
      <div className="flex justify-between">
        <div className="w-44 flex p-1">
          <Image
            src={"/images/boca.webp"}
            width={24}
            height={24}
            alt="Escudo equipo local"
          />
          <span className="ml-1 border-greenCard truncate">Boca Juniors</span>
        </div>
        <div className="w-4 py-1 flex justify-center border-l border-greenCard">
          0
        </div>
        <div className="w-4 py-1 flex justify-center border-r border-greenCard">
          9
        </div>
        <div className="w-44 flex justify-end p-1">
          <span className="mr-1 border-greenCard truncate">River Plate</span>
          <Image
            src={"/images/river.webp"}
            width={24}
            height={24}
            alt="Escudo equipo local"
          />
        </div>
      </div>
    </div>
  );
}
