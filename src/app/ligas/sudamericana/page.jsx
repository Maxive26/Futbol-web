import LeagueTable from "@/app/components/table/leagueTable.jsx";
export const metadata = {
  title: "Sudamericana",
};
export default function SudamericanaPage() {
  return (
    <section className="text-whiteCard">
      <LeagueTable leagueID={11} año={2024} clasificationTeams={2} />
    </section>
  );
}
