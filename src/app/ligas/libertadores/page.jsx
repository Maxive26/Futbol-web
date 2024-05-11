import LeagueTable from "@/app/components/table/leagueTable.jsx";

export default function LibertadoresPage() {
  return (
    <>
      <section className="text-whiteCard">
        <LeagueTable
          leagueID={13}
          año={2024}
          clasificationTeams={2}
          amarilloTeams={true}
        />
      </section>
      <section>
        <h1>holas</h1>
      </section>
    </>
  );
}
