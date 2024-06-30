import LeagueTable from "@/app/components/table/leagueTable.jsx";
export const metadata = {
  title: "Premier League",
};

export default function PremierLeaguePage() {
  return (
    <section className="text-whiteCard">
      <LeagueTable
        leagueID={39}
        año={2023}
        clasificationTeams={1}
        partidosPorFecha={10}
      />
    </section>
  );
}
