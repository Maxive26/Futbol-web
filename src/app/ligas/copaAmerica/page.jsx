import CopaAmericaTable from "@/app/components/ligas/copaAmerica/CopaAmerica";
import LeagueTable from "@/app/components/table/leagueTable.jsx";

export default function CopaAmericaPage() {
  return (
    <>
      <section className="text-whiteCard">
        <CopaAmericaTable
          leagueID={9}
          año={2024}
          clasificationTeams={2}
          amarilloTeams={false}
        />
      </section>
    </>
  );
}
