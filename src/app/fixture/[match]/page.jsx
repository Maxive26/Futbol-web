"use client";

import FootballField from "@/app/components/footballField/footballField";
import Loading from "@/app/components/loading/loading";
import useGetMatchInfo from "@/app/hooks/useGetMatchInfo";
import Image from "next/image";
import Link from "next/link";
import PlayersTable from "@/app/components/table/playersTable";
import NotFound from "@/app/components/not-found/notFound";
import FootballBall from "@/app/components/icons/footballBall";

export default function Page({ params }) {
  const { match } = params;
  const { data, loading } = useGetMatchInfo(match);
  // const data = null;

  if (loading) {
    return <Loading />;
  }

  if (!data) {
    <NotFound />;
  }
  return (
    <>
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
        {data?.map((team, index) => (
          <div className="text-whiteCard " key={team.idEquipo}>
            <div className="flex justify-center">
              <Image
                className="mb-4"
                width={128}
                height={128}
                src={team.escudo}
                alt="Escudo"
              />
            </div>
            <h1 className="text-2xl mb-4">{team.equipo}</h1>
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
        <div className="flex flex-col">
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
    </>
  );
}

//1197147 fixture de ejemplo
