import React from "react";

function Partido({ data = [], pos = "", text = "Cuartos de final" }) {
  function obtenerEquipo(data, pos) {
    if (!pos) return { name: "Conf.", logo: "/images/escudoVacio.png" };

    const group = pos.substring(1, 2);
    const rank = parseInt(pos.substring(0, 1));

    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].leagueStandings.length; j++) {
        for (let team of data[i].leagueStandings[j]) {
          if (team.rank === rank && team.group === `Group ${group}`) {
            return { name: team.team.name, logo: team.team.logo };
          }
        }
      }
    }
    return { name: "Conf.", logo: "" };
  }

  const team1 = obtenerEquipo(data, pos.team1);
  const team2 = obtenerEquipo(data, pos.team2);

  return (
    <div className="flex items-center bg-grayPage w-60 justify-center pt-2 pb-3 flex-col rounded-xl">
      <div className="mb-2">
        <span>{text}</span>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center w-28">
          <img
            src={team1.logo}
            style={{ filter: "drop-shadow(-5px 5px 5px rgba(31,32,34,.5))" }}
            className="max-w-20 h-20 mb-1 object-contain"
            alt={`Escudo del equipo ${team1.name}`}
          />
          <span className="text-whiteCard text-center px-2 font-bold truncate w-32">
            {team1.name}
          </span>
        </div>
        <span className="text-whiteCard ">vs</span>
        <div className="flex flex-col items-center w-28">
          <img
            src={team2.logo}
            style={{ filter: "drop-shadow(-5px 5px 5px rgba(31,32,34,.5))" }}
            className="max-w-20 h-20 mb-1 object-contain"
            alt={`Escudo del equipo ${team2.name}`}
          />
          <span className="text-whiteCard text-center px-2 font-bold truncate w-32">
            {team2.name}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function LlavesCopaAmerica({ data }) {
  return (
    <div className="p-5 rounded-xl bg-blackBG relative w-auto xl:w-[840px] min-w-auto overflow-auto scrollbar-thin scrollbar-thumb-greenCard scrollbar-track-grayPage">
      <div className=" w-4 h-44 top-24 left-[265px] border-t-2 border-r-2 border-b-2 border-greenCard absolute  rounded-r-lg">
        <div className="w-3 h-1 top-1/2 left-4 border-t-2  border-greenCard absolute "></div>
      </div>
      <div className=" w-4 h-44 bottom-24 left-[265px] border-t-2 border-r-2 border-b-2 border-greenCard absolute  rounded-r-lg">
        <div className="w-3 h-1 bottom-1/2 left-4 border-t-2  border-greenCard absolute "></div>
      </div>
      <div className="w-4 h-[380px] top-48 left-[545px] border-t-2 border-r-2 border-b-2 border-greenCard absolute  rounded-r-lg">
        <div className="w-3 h-1 left-4 bottom-1/2 border-t-2  border-greenCard absolute "></div>
      </div>
      <div className="h-auto w-[800px] gap-10  grid grid-cols-3">
        <div className="flex flex-col justify-center gap-6 w-60">
          <Partido data={data} pos={{ team1: "1A", team2: "2B" }} />
          <Partido data={data} pos={{ team1: "1B", team2: "2A" }} />
          <Partido data={data} pos={{ team1: "1C", team2: "2D" }} />
          <Partido data={data} pos={{ team1: "1D", team2: "2C" }} />
        </div>
        <div className="flex flex-col justify-around gap-6 w-60">
          <Partido
            data={data}
            pos={{ team1: "1A", team2: "2A" }}
            text={"Semifinal"}
          />
          <Partido
            data={data}
            pos={{ team1: "1C", team2: "1D" }}
            text={"Semifinal"}
          />
        </div>
        <div className="flex flex-col justify-center gap-6 w-60">
          <Partido
            data={data}
            pos={{ team1: "1A", team2: "1D" }}
            text={"Final"}
          />
        </div>
      </div>
    </div>
  );
}
