import React from "react";
import Stadium from "@/app/components/icons/stadium";
import "@/app/components/matchCard/matchCard.css";
import Image from "next/image";

export default function MatchCard(props) {
  const { estadio, estado, team1, team2, horario, tiempo, ronda } = props;
  function convertirTimestampAHora(timestamp) {
    const date = new Date(timestamp * 1000);
    const horas = date.getHours().toString().padStart(2, "0");
    const minutos = date.getMinutes().toString().padStart(2, "0");
    return `${horas}:${minutos}`;
  }

  return (
    <>
      <div className="w-80 h-52 bg-greenCard rounded-3xl relative flex flex-col">
        {estado !== "NS" && estado !== "FT" && estado !== "PEN" ? (
          <div className="w-5 h-5 bg-red rounded-full absolute top-3 left-3 animate-bounce z-10"></div>
        ) : null}
        <div className="h-6 flex items-center justify-center">
          <span className="bg-blackBG text-sm text-whiteCard px-4 w-28 h-6 font-semibold relative text-center rounded-b-[20px] radiusInverted z-10">
            {estado === "NS"
              ? `${convertirTimestampAHora(horario)}`
              : estado === "FT"
              ? "Finalizado"
              : estado === "PEN"
              ? "Finalizado"
              : estado === "HT"
              ? "E.T"
              : "Vivo"}
          </span>
        </div>
        <span className="text-center text-xs font-bold">
          {ronda === "Semi-finals" ? "Semifinal" : ronda}
        </span>
        <div className="h-[146px] flex justify-center items-center gap-4">
          <div className="flex flex-col items-center w-28">
            <Image
              width={80}
              height={80}
              src={team1.escudo}
              className="w-20 h-20 drop-shadow-2xl"
              alt="Escudo del equipo local"
            />
            <span className="text-center font-bold">{team1.nombre}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold">
              {tiempo & (estado !== "FT") ? `${tiempo}'` : ""}
            </span>
            <span className="font-bold">VS.</span>
            <span className="font-bold text-xl">
              {team1.resultado} - {team2.resultado}
            </span>
            {estado === "PEN" && (
              <span className="font-bold text-sm">
                {team1.resultadoPen} - {team2.resultadoPen}
              </span>
            )}
          </div>
          <div className="flex flex-col items-center w-28">
            <Image
              width={80}
              height={80}
              src={team2.escudo}
              className="w-20 h-20 drop-shadow-2xl"
              alt="Escudo del equipo visitante"
            />
            <span className="text-center font-bold">{team2.nombre}</span>
          </div>
        </div>
        <div className="h-9 border-grayCard border-t-2 flex px-6 items-center justify-center">
          <Stadium opacity={0.6} />
          <span className="font-bold ml-2 truncate">{estadio}</span>
        </div>
      </div>
    </>
  );
}
