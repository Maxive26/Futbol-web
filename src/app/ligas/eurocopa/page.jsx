import EuroCopaTable from "@/app/components/ligas/eurocopa/eurocopaTable";

import Link from "next/link";
import { getLeague, getLeaguesMatches } from "@/app/services/Leagues.js";
import LlavesEurocopa from "@/app/components/ligas/eurocopa/Llaves";

export const metadata = {
  title: "Eurocopa",
};

export default async function LibertadoresPage() {
  const data = await getLeague(4, 2024);
  return (
    <>
      {data?.map((league) => (
        <div
          key={league.leagueId}
          className="flex items-center mb-4 justify-between text-whiteCard"
        >
          <h1 className="text-lg md:text-2xl font-semibold  flex items-center">
            <img className="w-8 h-8 mr-3" src={league.leagueLogo} alt="" />
            {league.leagueName.toUpperCase()} -
            {league.leagueSeason === 2023
              ? " " + league.leagueSeason + `/${league.leagueSeason + 1}`
              : " " + league.leagueSeason}
          </h1>
          <Link
            href={"/"}
            className="text-whiteCard font-semibold py-1 flex justify-center items-center bg-grayPage w-28 transition ease-out border-2 border-greenCard  px-3 rounded-xl hover:bg-greenCard hover:text-blackBG"
          >
            Volver
          </Link>
        </div>
      ))}
      <section className="text-whiteCard bg-grayPage rounded-xl p-5 flex flex-col gap-5">
        <EuroCopaTable
          leagueID={4}
          año={2024}
          clasificationTeams={2}
          amarilloTeams
          data={data}
        />
        <LlavesEurocopa data={data} />
      </section>
    </>
  );
}
