"use client";
import MatchCard from "./components/matchCard/matchCard";
import fixture from "./mocks/fixture.json";
import { useGetFixture } from "../app/hooks/useGetFixture.js";

export default function Home() {
  const API_KEY = process.env.REACT_APP_FOOTBALL_API_KEY;
  console.log("Esta es la apiKey", API_KEY);
  // const data = useGetFixture();
  // const fixture = data.data;

  const matches = fixture.response;

  const mappedMatches = matches?.map((match) => ({
    id: match.fixture.id,
    referi: match.fixture.referee,
    horario: match.fixture.timestamp,
    primerTiempo: match.fixture.periods.first,
    segundoTiempo: match.fixture.periods.second,
    estadio: match.fixture.venue.name,
    estado: match.fixture.status.short,
    equipoLocalNombre: match.teams.home.name,
    equipoLocalEscudo: match.teams.home.logo,
    equipoLocalResultado: match.goals.home,
    equipoVisitanteNombre: match.teams.away.name,
    equipoVisitanteEscudo: match.teams.away.logo,
    equipoVisitanteResultado: match.goals.away,
  }));

  return (
    <>
      {mappedMatches.map((match) => (
        <div key={match.id}>
          <MatchCard
            estadio={match.estadio}
            estado={match.estado}
            horario={"21:00 Hs"}
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
      ))}
    </>
  );
}
