import FootballField from "@/app/components/footballField/footballField";
import { getEvents, getMatchInfo } from "@/app/services/MatchInfo.js";
import Link from "next/link";
import PlayersTable from "@/app/components/table/playersTable";
import NotFound from "@/app/components/not-found/notFound";
import FootballBall from "@/app/components/icons/footballBall";
import { Suspense } from "react";

export default async function Page({ params }) {
  const { match } = params;
  const data = await getMatchInfo(match);
  let events = [];
  if (data.length !== 0) {
    events = await getEvents(match);
  }

  if (data.length === 0) {
    return <NotFound />;
  } else {
    return (
      <Suspense>
        <div className="flex items-center mb-4 justify-between">
          <h1 className="text-lg lg:text-2xl sm:font-semibold text-whiteCard  flex items-center">
            <span className="mr-2">
              <FootballBall color={"#FFF"} />
            </span>
            INFORMACION DEL ENCUENTRO
          </h1>
          <Link
            href={"/"}
            className="text-whiteCard font-semibold py-1 flex justify-center items-center bg-grayPage w-28 transition ease-out border-2 border-greenCard  px-3 rounded-xl hover:bg-greenCard hover:text-blackBG"
          >
            Volver
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 xl:grid-cols-3 bg-grayPage rounded-xl p-5 text-center gap-10">
          {data?.map((team) => (
            <div
              className="text-whiteCard flex flex-col items-center"
              key={team.idEquipo}
            >
              <div className="group">
                <div className="flex justify-center group-hover:animate-pulse">
                  <Link href={`/team/${team.idEquipo}`}>
                    <img
                      className="mb-4 w-36 h-3w-36"
                      src={team.escudo}
                      alt="Escudo"
                    />
                  </Link>
                </div>
                <Link href={`/team/${team.idEquipo}`}>
                  <h1 className="text-2xl mb-4 group-hover:text-greenCard group-hover:animate-pulse">
                    {team.equipo}
                  </h1>
                </Link>
              </div>
              <h1 className="mb-4">Formacion: {team.formacion}</h1>
              <h1 className="mb-4">DT: {team.entrenador}</h1>
              <PlayersTable
                events={events}
                jugadores={team.jugadores}
                color={{
                  principal: team.color,
                  secundario: team.colorSecundario,
                }}
              />
              <PlayersTable
                events={events}
                jugadores={team.suplentes}
                titulares={false}
                color={{
                  principal: team.color,
                  secundario: team.colorSecundario,
                }}
              />
            </div>
          ))}
          <div className="flex flex-col items-center justify-center py-10">
            {data.map((team, index) => (
              <div key={index} className={index === 1 ? "rotate-180" : ""}>
                <FootballField
                  jugadores={team.jugadores}
                  index={index}
                  color={{
                    principal: team.color,
                    secundario: team.colorSecundario,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </Suspense>
    );
  }
}
