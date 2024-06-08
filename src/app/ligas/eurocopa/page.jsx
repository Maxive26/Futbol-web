import LeagueTable from "@/app/components/table/leagueTable.jsx";

export default function LibertadoresPage() {
  return (
    <>
      <section className="text-whiteCard">
        <LeagueTable
          leagueID={4}
          año={2024}
          clasificationTeams={2}
          amarilloTeams
        />
      </section>
    </>
  );
}
