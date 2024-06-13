import { getLeague, getLeaguesMatches } from "@/app/services/Leagues.js";
import LeagueMatches from "../matches/LeagueMatches";
import Link from "next/link";

export default async function LeagueTable({
  leagueID,
  año,
  clasificationTeams,
  equipos,
  amarilloTeams = false,
  partidosPorFecha,
  fechas = false,
}) {
  const data = await getLeague(leagueID, año);
  const leagueMatches = await getLeaguesMatches(leagueID, año);

  return (
    <>
      {data?.map((league) => (
        <div key={league.leagueId}>
          <div className="flex items-center mb-4 justify-between">
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
          <div className="flex flex-col items-center xl:items-start xl:grid xl:grid-cols-2 bg-grayPage rounded-xl p-5">
            {league.leagueStandings.map((group, groupIndex) => (
              <div key={groupIndex} className="">
                {league.leagueStandings.length > 1 && (
                  <h2 className="text-lg font-semibold mb-2">
                    {(leagueID === 4) &
                    ("Grupo " + String.fromCharCode(65 + groupIndex) ===
                      "Grupo G")
                      ? "Grupo de equipos terceros clasificados"
                      : "Grupo " + String.fromCharCode(65 + groupIndex)}
                  </h2>
                )}
                <table className="border-collapse mb-3">
                  <thead className="bg-blackBG">
                    <tr className="border border-greenCard">
                      <th className="text-xs md:text-base px-1 md:px-2 border-r">
                        #
                      </th>
                      <th className="text-xs md:text-base px-2 flex w-24 md:w-44 lg:w-52 text-left border-r">
                        Equipo
                      </th>
                      <th className="text-xs md:text-base px-1 border-r">
                        Pts
                      </th>
                      <th className="text-xs md:text-base px-1 border-r">PJ</th>
                      <th className="text-xs md:text-base px-1 border-r">PG</th>
                      <th className="text-xs md:text-base px-1 border-r">PE</th>
                      <th className="text-xs md:text-base px-1 border-r">PP</th>
                      <th className="text-xs md:text-base px-1 border-r">GF</th>
                      <th className="text-xs md:text-base px-1 border-r">GC</th>
                      <th className="text-xs md:text-base px-1 border-r">
                        Dif
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.map((team, teamIndex) => (
                      <tr
                        key={team.team.id}
                        className={`border-b text-center border-greenCard  ${
                          teamIndex < clasificationTeams
                            ? "bg-firstTeam bg-opacity-40"
                            : (amarilloTeams === true) & (teamIndex === 2)
                            ? "bg-yellow bg-opacity-20"
                            : "even:bg-grayPage odd:bg-searchBG"
                        } `}
                      >
                        <td className="border text-xs md:text-base border-greenCard">
                          {team.rank}
                        </td>
                        <td className="p-1 flex text-xs md:text-base items-center w-24 md:w-44 lg:w-52 border-r border-greenCard truncate">
                          <Link
                            href={`/team/${team.team.id}`}
                            className="flex items-center w-full h-full"
                          >
                            <img
                              src={team.team.logo}
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = `https://media.api-sports.io/football/teams/${team.team.id}.png`;
                              }}
                              alt={team.team.name}
                              className="w-4 h-4 md:w-5 md:h-5 md:mr-2"
                            />
                            {team.team.name}
                          </Link>
                        </td>
                        <td className=" py-1 text-xs md:text-base border-r border-greenCard font-bold">
                          {team.points}
                        </td>
                        <td className=" py-1 text-xs md:text-base border-r border-greenCard">
                          {team.all.played}
                        </td>
                        <td className=" py-1 text-xs md:text-base border-r border-greenCard">
                          {team.all.win}
                        </td>
                        <td className=" py-1 text-xs md:text-base border-r border-greenCard">
                          {team.all.draw}
                        </td>
                        <td className=" py-1 text-xs md:text-base border-r border-greenCard">
                          {team.all.lose}
                        </td>
                        <td className=" py-1 text-xs md:text-base border-r border-greenCard">
                          {team.all.goals.for}
                        </td>
                        <td className=" py-1 text-xs md:text-base border-r border-greenCard">
                          {team.all.goals.against}
                        </td>
                        <td className=" py-1 text-xs md:text-base border-r border-greenCard">
                          {team.goalsDiff > 0 ? "+" : ""}
                          {team.goalsDiff}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
            {fechas ? (
              <div className="flex flex-col items-center">
                <LeagueMatches
                  partidosPorFecha={partidosPorFecha}
                  data={leagueMatches}
                />
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </>
  );
}
