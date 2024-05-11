"use client";
import Matches from "./matches";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Row from "../icons/row";
import { useState, useEffect } from "react";

export default function LeagueMatches({ partidosPorFecha, data }) {
  const [count, setCount] = useState(1);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  useEffect(() => {
    replace(`${pathname}?fecha=1`);
  }, [pathname, replace]);

  const nroFecha = searchParams.get("fecha");

  const handleAddDate = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleSubtractDate = () => {
    if (count <= 1) {
      return;
    }
    setCount((prevCount) => prevCount - 1);
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set("fecha", count);
    replace(`${pathname}?${params.toString()}`);
  }, [count, searchParams, pathname]);

  const aux = partidosPorFecha * (nroFecha - 1);
  const filtroPorFecha = data.slice(aux, partidosPorFecha * nroFecha);
  return (
    <>
      <span className="mb-5 flex justify-between w-96 font-bold text-xl">
        <button
          onClick={handleSubtractDate}
          className="px-2 rounded-full rotate-180 hover:bg-blackBG"
        >
          <Row color={"#EBFD69"} />
        </button>
        FECHA {searchParams.get("fecha")}
        <button
          onClick={handleAddDate}
          className="px-2 rounded-full hover:bg-blackBG"
        >
          <Row color={"#EBFD69"} />
        </button>
      </span>
      {filtroPorFecha?.map((league) => (
        <div key={league.matchId}>
          <Matches
            fecha={league.timestamp}
            local={{
              Id: league.equipoLocalId,
              Nombre: league.equipoLocalNombre,
              Escudo: league.equipoLocalEscudo,
              Win: league.equipoLocalWin,
              Resultado: league.equipoLocalResultado,
            }}
            visitante={{
              Id: league.equipoVisitanteId,
              Nombre: league.equipoVisitanteNombre,
              Escudo: league.equipoVisitanteEscudo,
              Win: league.equipoVisitanteWin,
              Resultado: league.equipoVisitanteResultado,
            }}
            estado={league.estado}
            fixtureID={league.matchId}
            ronda={league.ronda}
          />
        </div>
      ))}
    </>
  );
}
