"use client";

import FootballField from "@/app/components/footballField/footballField";
import Loading from "@/app/components/loading/loading";
import useGetMatchInfo from "../../../app/hooks/useGetMatchInfo";
import Image from "next/image";
import PlayersTable from "@/app/components/table/playersTable";

export default function Page({ params }) {
  const { match } = params;
  const { data, loading } = useGetMatchInfo(match);
  // const data = null;

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className="flex bg-grayPage rounded-xl p-5 text-center gap-10">
        {data.map((team, index) => (
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
