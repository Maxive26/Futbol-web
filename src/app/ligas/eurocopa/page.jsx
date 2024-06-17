import EuroCopaTable from "@/app/components/ligas/eurocopa/eurocopaTable";

export default function LibertadoresPage() {
  return (
    <>
      <section className="text-whiteCard">
        <EuroCopaTable
          leagueID={4}
          año={2024}
          clasificationTeams={2}
          amarilloTeams
        />
      </section>
    </>
  );
}
