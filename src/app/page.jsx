"use client";
import MatchCard from "./components/matchCard/matchCard";
import fixture from "./mocks/fixture.json";
import { useGetFixture } from "../app/hooks/useGetFixture.js";

export default function Home() {
  const { data } = useGetFixture();

  if (!data) {
    return <div className="text-whiteCard">Cargando...</div>;
  }

  return (
    <>
      {data.map((match) => (
        <div key={match.id}>
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
      ))}
    </>
  );
}
