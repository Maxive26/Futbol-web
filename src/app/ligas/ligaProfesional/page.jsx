import LeagueMatches from "@/app/components/matches/LeagueMatches";
import LeagueTable from "@/app/components/table/leagueTable.jsx";

export default function LigaProfesionalPage() {
  return (
    <section className="text-whiteCard">
      <LeagueTable
        leagueID={128}
        año={2024}
        clasificationTeams={1}
        partidosPorFecha={14}
      />
    </section>
  );
}
