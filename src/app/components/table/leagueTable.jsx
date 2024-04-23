// import leagues from "../../mocks/leagues.json";
import { useGetLeague } from "../../hooks/useGetLeague.js";
import Loading from "../loading/loading.jsx";

export default function LeagueTable({ leagueID, año, clasificationTeams }) {
  const data = useGetLeague(leagueID, año);
  const leagues = data.data;

  return (
    <>
      {leagues.response?.map((league, index) => (
        <div key={index} className="">
          <h1 className="text-2xl font-semibold mb-4 flex items-center">
            <img className="w-8 h-8" src={league.league.logo} alt="" />
            {league.league.name.toUpperCase()}
          </h1>
          <div className="2xl:flex 2xl:gap-10">
            {league.league.standings.map((group, groupIndex) => (
              <div key={groupIndex} className="">
                <h2 className="text-lg font-semibold mb-2">
                  {groupIndex === 0 ? "GRUPO A" : "GRUPO B"}
                </h2>
                <table className="border-collapse">
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
                        key={teamIndex}
                        className={`border-b text-center border-greenCard  ${
                          teamIndex < clasificationTeams
                            ? "bg-firstTeam bg-opacity-20"
                            : "even:bg-grayPage odd:bg-searchBG"
                        } `}
                      >
                        <td className="py-2 border border-greenCard">
                          {team.rank}
                        </td>
                        <td className="p-2 flex items-center w-72 border-r border-greenCard truncate">
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
          </div>
        </div>
      ))}
    </>
  );
}
