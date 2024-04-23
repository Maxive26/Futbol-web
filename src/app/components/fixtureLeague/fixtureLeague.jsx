import MatchCard from "../matchCard/matchCard";
import Image from "next/image";

export default function FixtureLeague({ data, league }) {
  const filteredMatches = data.filter((match) => league.includes(match.idLiga));
  return (
    <div>
      {filteredMatches.length !== 0 && (
        <h1 className="text-whiteCard text-xl mb-5 flex">
          <Image
            src={filteredMatches[0].logoLiga}
            className="w-7 h-7 mr-5"
            alt="Logo de la liga"
            width={28}
            height={28}
          />
          {filteredMatches[0].nombreLiga}
        </h1>
      )}
      <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {filteredMatches.map((match) => (
          <div key={match.id} className="mb-5">
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
      </section>
    </div>
  );
}
