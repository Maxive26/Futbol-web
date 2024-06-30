import LeagueTable from "@/app/components/table/leagueTable.jsx";
export const metadata = {
  title: "Champios League",
};

export default function ChampionsPage() {
  return (
    <>
      <section className="text-whiteCard">
        <LeagueTable
          leagueID={2}
          año={2023}
          clasificationTeams={2}
          amarilloTeams={true}
        />
      </section>
    </>
  );
}
