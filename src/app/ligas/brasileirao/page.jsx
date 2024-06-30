import LeagueTable from "@/app/components/table/leagueTable.jsx";
export const metadata = {
  title: "Brasileirao",
};
export default function BrasileiraoPage() {
  return (
    <section className="text-whiteCard">
      <LeagueTable
        leagueID={71}
        año={2024}
        clasificationTeams={1}
        partidosPorFecha={10}
      />
    </section>
  );
}
