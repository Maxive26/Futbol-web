import LeagueTable from "@/app/components/table/leagueTable.jsx";
export const metadata = {
  title: "Libertadores",
};

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
    </>
  );
}
