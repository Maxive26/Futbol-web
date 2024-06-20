import { getLeague, getLeaguesMatches } from "@/app/services/Leagues.js";
import Link from "next/link";
import Badge from "@/app/components/Badge/badge";

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
          <div className="bg-grayPage rounded-xl p-5">
            <div className="flex-col md:flex-row flex gap-2 md:gap-5 mb-5"></div>
            <div className="flex flex-col items-center grid-cols-2 xl:items-start 2xl:grid 2xl:auto-cols-max gap-5 xl:w-max">
              {league.leagueStandings.map((group, groupIndex) => (
                <div
                  key={groupIndex}
                  className="bg-blackBG p-2 md:p-5 rounded-xl w-max"
                >
                  {league.leagueStandings.length > 1 && (
                    <h2 className="text-base md:text-lg font-semibold mb-2 flex">
                      {(leagueID === 4) &
                      ("Grupo " + String.fromCharCode(65 + groupIndex) ===
                        "Grupo G")
                        ? "Grupo de equipos terceros clasificados"
                        : "Grupo " + String.fromCharCode(65 + groupIndex)}
                    </h2>
                  )}
                  <table className="border-collapse mb-3 rounded-xl overflow-hidden p-3">
                    <thead className="bg-grayPage text-whiteCard/50">
                      <tr>
                        <th className="text-xs md:text-base px-1 md:p-3">#</th>
                        <th className="text-xs md:text-base px-1 md:p-3 flex w-24 md:w-36 lg:w-44 text-left">
                          Equipo
                        </th>
                        <th className="text-xs md:text-base px-1 md:p-3">
                          Pts
                        </th>
                        <th className="text-xs md:text-base px-1 md:p-3">PJ</th>
                        <th className="text-xs md:text-base px-1 md:p-3">PG</th>
                        <th className="text-xs md:text-base px-1 md:p-3">PE</th>
                        <th className="text-xs md:text-base px-1 md:p-3">PP</th>
                        <th className="text-xs md:text-base px-1 md:p-3">GF</th>
                        <th className="text-xs md:text-base px-1 md:p-3">GC</th>
                        <th className="text-xs md:text-base px-1 md:p-3">
                          DIF
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {group.map((team, teamIndex) => (
                        <tr
                          key={team.team.id}
                          className={`text-center ${
                            teamIndex < clasificationTeams ||
                            (leagueID === 4 &&
                              groupIndex ===
                                league.leagueStandings.length - 1 &&
                              teamIndex < 4)
                              ? "bg-firstTeam bg-opacity-40"
                              : (amarilloTeams === true) & (teamIndex === 2)
                              ? "bg-yellow bg-opacity-20"
                              : "even:bg-grayPage odd:bg-searchBG "
                          } `}
                        >
                          <td className="text-xs md:text-base">{team.rank}</td>
                          <td className="p-1 flex text-xs md:text-base items-center  w-24 md:w-36 lg:w-44 truncate">
                            <Link
                              href={`/team/${team.team.id}`}
                              className="flex items-center w-full h-full font-bold"
                            >
                              <img
                                src={team.team.logo}
                                alt={team.team.name}
                                className="w-4 h-4 md:w-5 md:h-5 md:mr-2 rounded-full"
                              />
                              {team.team.name}
                            </Link>
                          </td>
                          <td className="py-1 text-xs md:text-base font-bold">
                            {team.points}
                          </td>
                          <td className="py-1 text-xs md:text-base">
                            {team.all.played}
                          </td>
                          <td className="py-1 text-xs md:text-base">
                            {team.all.win}
                          </td>
                          <td className="py-1 text-xs md:text-base">
                            {team.all.draw}
                          </td>
                          <td className="py-1 text-xs md:text-base">
                            {team.all.lose}
                          </td>
                          <td className="py-1 text-xs md:text-base">
                            {team.all.goals.for}
                          </td>
                          <td className="py-1 text-xs md:text-base">
                            {team.all.goals.against}
                          </td>
                          <td className="py-1 text-xs md:text-base">
                            {team.goalsDiff > 0 ? "+" : ""}
                            {team.goalsDiff}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
