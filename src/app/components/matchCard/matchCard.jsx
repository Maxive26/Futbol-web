import React from "react";
import Stadium from "../icons/stadium";
import "./matchCard.css";

export default function MatchCard(props) {
  const { estadio, estado, team1, team2, horario } = props;
  return (
    <>
      <div className="w-80 h-52 bg-greenCard rounded-3xl flex flex-col">
        <div className="h-6 flex items-center justify-center">
          <span className="font-bold bg-blackBG text-whiteCard px-4 w-28 relative text-center rounded-b-[20px] radiusInverted z-10">
            {estado ? "Vivo" : "Finalizado"}
          </span>
        </div>
        <div className="h-[146px] flex justify-center items-center gap-8">
          <div className="flex flex-col items-center">
            <img src={team1.escudo} className="w-20 drop-shadow-2xl" />
            <span className="text-center font-bold">{team1.nombre}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold">VS.</span>
            <span className="font-bold">{horario}</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={team2.escudo} className="w-20 drop-shadow-2xl" />
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
