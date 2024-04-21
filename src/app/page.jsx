"use client";
import MatchCard from "./components/matchCard/matchCard";
import { useGetFixture } from "../app/hooks/useGetFixture.js";
import FootballBall from "../app/components/icons/footballBall";
import Loading from "../app/components/loading/loading";

export default function Home() {
  const { data } = useGetFixture();
  // const data = null;

  if (!data) {
    return (
      <>
        <h1 className="text-2xl font-semibold mb-4 text-whiteCard flex items-center">
          <span className="mr-2">
            <FootballBall color={"#FFF"} />
          </span>
          PARTIDOS DE HOY
        </h1>
        <Loading />
      </>
    );
  }

  const renderedLeagues = [];

  return (
    <>
      <h1 className="text-2xl font-semibold mb-4 text-whiteCard flex items-center">
        <span className="mr-2">
          <FootballBall color={"#FFF"} />
        </span>
        PARTIDOS DE HOY
      </h1>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] gap-4">
        {/* Iteramos sobre los partidos */}
        {data.map((match) => {
          // Verificamos si la liga ya ha sido renderizada
          if (!renderedLeagues.includes(match.nombreLiga)) {
            // Agregamos la liga al array de ligas renderizadas
            renderedLeagues.push(match.nombreLiga);
            // Mostramos el nombre de la liga solo una vez
            return (
              <div key={match.nombreLiga}>
                <h2 className="text-whiteCard text-lg font-semibold mb-2">
                  {match.nombreLiga}
                </h2>
                <MatchCard
                  estadio={match.estadio}
                  estado={match.estado}
                  horario={match.horario}
                  team1={{
                    escudo: match.equipoLocalEscudo,
                    nombre: match.equipoLocalNombre,
                    resultado: match.equipoLocalResultado,
                  }}
                  team2={{
                    escudo: match.equipoVisitanteEscudo,
                    nombre: match.equipoVisitanteNombre,
                    resultado: match.equipoVisitanteResultado,
                  }}
                />
              </div>
            );
          } else {
            // Si la liga ya ha sido renderizada, solo mostramos el partido
            return (
              <MatchCard
                key={match.id}
                estadio={match.estadio}
                estado={match.estado}
                horario={match.horario}
                team1={{
                  escudo: match.equipoLocalEscudo,
                  nombre: match.equipoLocalNombre,
                  resultado: match.equipoLocalResultado,
                }}
                team2={{
                  escudo: match.equipoVisitanteEscudo,
                  nombre: match.equipoVisitanteNombre,
                  resultado: match.equipoVisitanteResultado,
                }}
              />
            );
          }
        })}
      </div>
    </>
  );
}
