import LeagueTable from "@/app/components/table/leagueTable.jsx";

export default function CopaAmericaPage() {
  return (
    <>
      <section className="text-whiteCard">
        <LeagueTable
          leagueID={9}
          año={2024}
          clasificationTeams={2}
          amarilloTeams={false}
          fechas={false}
        />
      </section>
    </>
  );
}
