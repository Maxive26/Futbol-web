import LeagueTable from "@/app/components/table/leagueTable.jsx";
export const metadata = {
  title: "Serie A",
};
export default function SerieAPage() {
  return (
    <section className="text-whiteCard">
      <LeagueTable
        leagueID={135}
        año={2023}
        clasificationTeams={1}
        partidosPorFecha={10}
      />
    </section>
  );
}
