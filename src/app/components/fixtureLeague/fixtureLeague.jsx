import MatchCard from "@/app/components/matchCard/matchCard";
import Link from "next/link";

export default function FixtureLeague({ data, league }) {
  const filteredMatches = data.filter((match) => league.includes(match.idLiga));

  let nombreLigaCorrecto = "";
  if (filteredMatches.length !== 0) {
    nombreLigaCorrecto =
      filteredMatches[0].nombreLiga === "Reserve League"
        ? "Reserva Argentina"
        : filteredMatches[0].nombreLiga === "Ligue 1" &&
          filteredMatches[0].paisLiga === "France"
        ? "Liga Francia"
        : filteredMatches[0].nombreLiga === "Primera División - Apertura" &&
          filteredMatches[0].paisLiga === "Uruguay"
        ? "Liga Uruguay"
        : filteredMatches[0].nombreLiga === "Division Profesional - Apertura" &&
          filteredMatches[0].paisLiga === "Paraguay"
        ? "Liga Paraguay"
        : filteredMatches[0].nombreLiga === "Serie A" &&
          filteredMatches[0].paisLiga === "Brazil"
        ? "Brasileirao"
        : filteredMatches[0].nombreLiga === "Primera A" &&
          filteredMatches[0].paisLiga === "Colombia"
        ? "Liga Colombia"
        : filteredMatches[0].nombreLiga === "Primera División" &&
          filteredMatches[0].paisLiga === "Chile"
        ? "Liga Chile"
        : filteredMatches[0].nombreLiga === "Liga MX" &&
          filteredMatches[0].paisLiga === "Mexico"
        ? "Liga Mexico"
        : filteredMatches[0].nombreLiga;
  }

  return (
    <div>
      {filteredMatches.length !== 0 && (
        <h2 className="text-whiteCard text-lg sm:text-xl mb-5 flex">
          {filteredMatches[0].logoPais !== null ? (
            <div className="border-opacity-20 border-r-2 border-whiteCard">
              <img
                src={filteredMatches[0].logoPais}
                className="w-5 h-5 mr-2 pt-2"
                alt="Bandera del pais"
              />
            </div>
          ) : (
            ""
          )}
          <img
            src={filteredMatches[0].logoLiga}
            className="w-7 h-7 ml-3 mr-2"
            alt="Logo de la liga"
          />
          {nombreLigaCorrecto}
        </h2>
      )}

      <section className=" flex flex-col justify-center md:items-center md:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {filteredMatches.map((match) => (
          <div key={match.idFixture} className="mb-5 w-80 h-52 rounded-3xl">
            {(match.estado !== "NS") & (match.estado !== "PST") ? (
              <Link
                className="transition-all ease-out hover:opacity-80"
                href={`/fixture/${match.idFixture}`}
              >
                <MatchCard
                  logoLiga={match.logoLiga}
                  tiempo={match.tiempoTranscurrido}
                  estadio={match.estadio}
                  estado={match.estado}
                  horario={match.horario}
                  ronda={match.ronda}
                  team1={{
                    escudo: match.equipoLocalEscudo,
                    nombre: match.equipoLocalNombre,
                    resultado: match.equipoLocalResultado,
                    resultadoPen: match.equipoLocalResultadoPen,
                  }}
                  team2={{
                    escudo: match.equipoVisitanteEscudo,
                    nombre: match.equipoVisitanteNombre,
                    resultado: match.equipoVisitanteResultado,
                    resultadoPen: match.equipoVisitanteResultadoPen,
                  }}
                />
              </Link>
            ) : (
              <div>
                <MatchCard
                  logoLiga={match.logoLiga}
                  estadio={match.estadio}
                  estado={match.estado}
                  horario={match.horario}
                  ronda={match.ronda}
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
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
