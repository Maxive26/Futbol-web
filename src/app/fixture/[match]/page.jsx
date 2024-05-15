import FootballField from "@/app/components/footballField/footballField";
import { getMatchInfo } from "@/app/services/MatchInfo.js";
import Link from "next/link";
import PlayersTable from "@/app/components/table/playersTable";
import NotFound from "@/app/components/not-found/notFound";
import FootballBall from "@/app/components/icons/footballBall";
import { Suspense } from "react";

export default async function Page({ params }) {
  const { match } = params;
  const data = await getMatchInfo(match);
  // const data = null;

  if (data.length === 0) {
    return <NotFound />;
  } else {
    return (
      <Suspense>
        <div className="flex items-center mb-4 justify-between">
          <h1 className="text-2xl sm:font-semibold text-whiteCard  flex items-center">
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
        <div className="flex bg-grayPage rounded-xl p-5 text-center gap-10">
          {data?.map((team) => (
            <div className="text-whiteCard " key={team.idEquipo}>
              <div className="group">
                <div className="flex justify-center group-hover:animate-pulse">
                  <Link href={`/team/${team.idEquipo}`}>
                    <img className="mb-4 " src={team.escudo} alt="Escudo" />
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
                jugadores={team.jugadores}
                color={{
                  principal: team.color,
                  secundario: team.colorSecundario,
                }}
              />
              <PlayersTable
                jugadores={team.suplentes}
                color={{
                  principal: team.color,
                  secundario: team.colorSecundario,
                }}
              />
            </div>
          ))}
          <div className="flex flex-col py-10">
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
