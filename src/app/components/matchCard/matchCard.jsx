import React from "react";
import Stadium from "@/app/components/icons/stadium";
import "@/app/components/matchCard/matchCard.css";
import { Tooltip as ReactTooltip } from "react-tooltip";

export default function MatchCard(props) {
  const { estadio, estado, team1, team2, horario, tiempo, ronda, logoLiga } =
    props;

  function convertirTimestampAHora(timestamp) {
    const date = new Date(timestamp * 1000);
    const horas = date.getHours().toString().padStart(2, "0");
    const minutos = date.getMinutes().toString().padStart(2, "0");
    return `${horas}:${minutos}`;
  }

  const estadoDePartido =
    estado === "NS"
      ? `${convertirTimestampAHora(horario)}`
      : estado === "FT"
      ? "Finalizado"
      : estado === "PEN"
      ? "Finalizado"
      : estado === "AET"
      ? "Finalizado"
      : estado === "HT"
      ? "E.T"
      : estado === "PST"
      ? "Pospuesto"
      : "Vivo";

  const rondaDeLaFecha =
    ronda === "Semi-finals"
      ? "Semifinal"
      : ronda === "Friendlies 1"
      ? "Amistosos"
      : ronda;

  const style = {
    height: "2px",
    width: "100%",
    opacity: "80%",
    background:
      "linear-gradient(to right, rgba(0, 0, 0, 0), #D9DFE8, rgba(0, 0, 0, 0))",
  };

  return (
    <>
      <div className="w-80 h-52 bg-greenCard rounded-3xl relative flex flex-col">
        <img
          className="absolute z-10 w-[130px] h-[130px] top-10 left-[96px] opacity-10 grayscale"
          src={logoLiga}
          alt="Logo liga"
        />
        {estado !== "NS" &&
        estado !== "FT" &&
        estado !== "PEN" &&
        estado !== "PST" ? (
          <div className="w-5 h-5 bg-red rounded-full absolute top-3 left-3 animate-pulse z-10"></div>
        ) : null}
        <div className="h-6 flex items-center justify-center">
          <span className="bg-grayPage text-sm text-whiteCard px-4 w-28 h-6 font-semibold relative text-center rounded-b-[20px] radiusInverted z-10">
            {estadoDePartido}
          </span>
        </div>
        <span className="text-center text-xs font-bold">{rondaDeLaFecha}</span>
        <div className="h-[146px] flex justify-center items-center gap-3 z-20">
          <div className="flex flex-col items-center w-28">
            <img
              // src={team1.escudo}
              src={`images/escudos/${team1.id}.png`}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://media.api-sports.io/football/teams/${team1.id}.png`;
              }}
              style={{ filter: "drop-shadow(-5px 5px 5px rgba(31,32,34,.5))" }}
              className="w-20 h-20 mb-3"
              alt="Escudo del equipo local"
            />
            <span
              data-tooltip-id="team1"
              data-tooltip-content={team1.nombre}
              className=" text-center px-2 font-bold truncate w-32"
            >
              {team1.nombre}
            </span>
            <ReactTooltip
              place="bottom"
              style={{ fontSize: "12px", padding: "5px" }}
              id="team1"
            />
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold">
              {(tiempo !== null) & (tiempo !== undefined) & (estado !== "FT")
                ? `${tiempo}'`
                : ""}
            </span>
            <span className="font-bold">VS.</span>
            <span className="font-bold w-16 text-center bg-grayPage bg-opacity-90 text-whiteCard text-xl rounded-xl">
              {team1.resultado} - {team2.resultado}
            </span>
            {estado === "PEN" && (
              <span className="font-bold text-sm">
                {team1.resultadoPen} - {team2.resultadoPen}
              </span>
            )}
          </div>
          <div className="flex flex-col items-center w-28">
            <img
              // src={team2.escudo}
              // src={`images/escudos/${team2.id}.png`}
              src={`https://media.api-sports.io/football/teams/${team2.id}.png`}
              style={{ filter: "drop-shadow(5px 5px 5px rgba(31,32,34,.5))" }}
              className="w-20 h-20 mb-3"
              alt="Escudo del equipo visitante"
            />
            <span
              data-tooltip-id="team2"
              data-tooltip-content={team2.nombre}
              className="text-center font-bold truncate px-2 w-32"
            >
              {team2.nombre}
            </span>
            <ReactTooltip
              place="bottom"
              style={{ fontSize: "12px", padding: "5px" }}
              id="team2"
            />
          </div>
        </div>
        <div style={style}></div>
        <div className="h-8  flex px-6 items-center justify-center">
          <Stadium opacity={0.6} />
          <span className="font-bold ml-2 truncate">{estadio}</span>
        </div>
      </div>
    </>
  );
}
