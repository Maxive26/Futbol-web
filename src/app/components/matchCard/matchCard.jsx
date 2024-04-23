import React from "react";
import Stadium from "../icons/stadium";
import "./matchCard.css";
import Image from "next/image";

export default function MatchCard(props) {
  const { estadio, estado, team1, team2, horario } = props;

  function convertirTimestampAHora(timestamp) {
    const date = new Date(timestamp * 1000);
    const horas = date.getHours().toString().padStart(2, "0");
    const minutos = date.getMinutes().toString().padStart(2, "0");
    return `${horas}:${minutos}`;
  }

  return (
    <>
      <div className="w-80 h-52 bg-greenCard rounded-3xl flex flex-col">
        <div className="h-6 flex items-center justify-center">
          <span className="bg-blackBG text-sm text-whiteCard px-4 w-28 h-6 relative text-center rounded-b-[20px] radiusInverted z-10">
            {estado === "NS"
              ? `${convertirTimestampAHora(horario)}`
              : estado === "FT"
              ? "Finalizado"
              : "En Vivo"}
          </span>
        </div>
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
            <span className="font-bold">VS.</span>
            <span className="font-bold">
              {team1.resultado} - {team2.resultado}
            </span>
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
        <div className="h-9 border-grayCard border-t-2 flex items-center justify-center">
          <Stadium opacity={0.6} />
          <span className="font-bold ml-2">{estadio}</span>
        </div>
      </div>
    </>
  );
}
