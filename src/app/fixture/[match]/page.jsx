"use client";

import FootballField from "@/app/components/footballField/footballField";
import Loading from "@/app/components/loading/loading";
import useGetMatchInfo from "../../../app/hooks/useGetMatchInfo";
import Image from "next/image";
import PlayersTable from "@/app/components/table/playersTable";

export default function Page({ params }) {
  const { match } = params;
  const { data } = useGetMatchInfo(match);
  // const data = null;

  if (!data) {
    return (
      <>
        <Loading />
      </>
    );
  }
  return (
    <>
      <div className="flex bg-grayPage rounded-xl p-5 justify-center text-center gap-10">
        {data.map((team) => (
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
            <h1 className="mb-4">Entrenador: {team.entrenador}</h1>
            <PlayersTable jugadores={team.jugadores} />
            <PlayersTable jugadores={team.suplentes} />
          </div>
        ))}
        <FootballField />;
      </div>
    </>
  );
}
