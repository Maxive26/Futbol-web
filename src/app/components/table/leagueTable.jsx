import { getLeague, getLeaguesMatches } from "@/app/services/Leagues.js";
import LeagueMatches from "../matches/LeagueMatches";
import { Suspense } from "react";

export default async function LeagueTable({
  leagueID,
  año,
  clasificationTeams,
  equipos,
  amarilloTeams,
  partidosPorFecha,
}) {
  const data = await getLeague(leagueID, año);
  const leagueMatches = await getLeaguesMatches(leagueID, año);

  return (
    <>
      {data?.map((league) => (
        <div key={league.leagueId}>
          <h1 className="text-2xl font-semibold mb-4 flex items-center">
            <img className="w-8 h-8" src={league.leagueLogo} alt="" />
            {league.leagueName.toUpperCase()}{" "}
            {league.leagueSeason === 2023
              ? league.leagueSeason + `/${league.leagueSeason + 1}`
              : league.leagueSeason}
          </h1>
          <div className="grid grid-cols-2 bg-grayPage rounded-xl p-5">
            {league.leagueStandings.map((group, groupIndex) => (
              <div key={groupIndex} className="">
                {league.leagueStandings.length > 1 && (
                  <h2 className="text-lg font-semibold mb-2">
                    {"Grupo " + String.fromCharCode(65 + groupIndex)}
                  </h2>
                )}
                <table className="border-collapse mb-3">
                  <thead>
                    <tr className="border border-greenCard">
                      <th className="px-2 border-r">#</th>
                      <th className="px-2 text-left border-r">Nombre</th>
                      <th className="px-2 border-r">Pts</th>
                      <th className="px-2 border-r">PJ</th>
                      <th className="px-2 border-r">PG</th>
                      <th className="px-2 border-r">PE</th>
                      <th className="px-2 border-r">PP</th>
                      <th className="px-2 border-r">GF</th>
                      <th className="px-2 border-r">GC</th>
                      <th className="px-2 border-r">Dif</th>
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
                        <td className="py-2 border border-greenCard">
                          {team.rank}
                        </td>
                        <td className="p-2 flex items-center w-64 border-r border-greenCard truncate">
                          <img
                            src={team.team.logo}
                            alt={team.team.name}
                            className="w-8 h-8 mr-2 "
                          />
                          {team.team.name}
                        </td>
                        <td className="py-2 border-r border-greenCard font-bold">
                          {team.points}
                        </td>
                        <td className="py-2 border-r border-greenCard">
                          {team.all.played}
                        </td>
                        <td className="py-2 border-r border-greenCard">
                          {team.all.win}
                        </td>
                        <td className="py-2 border-r border-greenCard">
                          {team.all.draw}
                        </td>
                        <td className="py-2 border-r border-greenCard">
                          {team.all.lose}
                        </td>
                        <td className="py-2 border-r border-greenCard">
                          {team.all.goals.for}
                        </td>
                        <td className="py-2 border-r border-greenCard">
                          {team.all.goals.against}
                        </td>
                        <td className="py-2 border-r border-greenCard">
                          {team.goalsDiff > 0 ? "+" : ""}
                          {team.goalsDiff}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
            <div>
              <LeagueMatches
                partidosPorFecha={partidosPorFecha}
                data={leagueMatches}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
