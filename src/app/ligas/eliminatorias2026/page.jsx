import EliminatoriasTable from "@/app/components/ligas/eliminatorias2026/eliminatoriasTable";
export const metadata = {
  title: "Eliminatorias",
};

export default function EliminatoriasPage() {
  return (
    <>
      <section className="text-whiteCard">
        <EliminatoriasTable
          leagueID={34}
          año={2026}
          clasificationTeams={6}
          amarilloTeams={true}
        />
      </section>
    </>
  );
}
