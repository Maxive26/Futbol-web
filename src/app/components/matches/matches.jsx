import React from "react";
import Plus from "@/app/components/icons/plus";
import Link from "next/link";
import Image from "next/image";

export default function Matches({
  fecha,
  local,
  visitante,
  estado,
  fixtureID,
  ronda,
}) {
  function formatFechaHora(timestamp) {
    const fecha = new Date(timestamp * 1000);
    const dia = fecha.getDate().toString().padStart(2, "0");
    const mes = (fecha.getMonth() + 1).toString().padStart(2, "0");
    const año = fecha.getFullYear().toString().slice(2);
    const hora = fecha.getHours().toString().padStart(2, "0");
    const minutos = fecha.getMinutes().toString().padStart(2, "0");

    return `${dia}/${mes}/${año} - ${hora}:${minutos} hs`;
  }

  const estadoDePartido =
    estado === "NS"
      ? formatFechaHora(fecha)
      : estado === "FT"
      ? "Finalizado"
      : estado === "PEN"
      ? "Finalizado"
      : estado === "AET"
      ? "Finalizado"
      : estado === "HT"
      ? "E.T"
      : estado === "TBD"
      ? "A confirmar"
      : estado === "PST"
      ? "Pospuesto"
      : "Vivo";
  return (
    <div className="text-whiteCard rounded-xl flex flex-col w-96 border border-greenCard mb-2">
      <div className="flex justify-around relative border-b border-greenCard py-1">
        {estado !== "NS" && estado !== "TBD" && (
          <Link
            href={`/fixture/${fixtureID}`}
            className="absolute rounded-tl-xl top-0 left-0 w-5 h-full bg-firstTeam flex justify-center items-center"
          >
            <Plus color={"#fff"} />
          </Link>
        )}
        <span className="text-sm ">{estadoDePartido}</span>
      </div>
      <div className="flex justify-between">
        <div className="w-40 flex p-1">
          <Image
            src={local.Escudo}
            width={24}
            height={24}
            alt="Escudo equipo local"
          />
          <span className="ml-1 border-greenCard truncate">{local.Nombre}</span>
        </div>
        <div className="w-4 py-1 flex justify-center border-l border-greenCard">
          {local.Resultado}
        </div>
        <div className="w-4 py-1 flex justify-center ">-</div>
        <div className="w-4 py-1 flex justify-center border-r border-greenCard">
          {visitante.Resultado}
        </div>
        <div className="w-40 flex justify-end p-1">
          <span className="mr-1 border-greenCard truncate">
            {visitante.Nombre}
          </span>
          <Image
            src={visitante.Escudo}
            width={24}
            height={24}
            alt="Escudo equipo local"
          />
        </div>
      </div>
    </div>
  );
}
