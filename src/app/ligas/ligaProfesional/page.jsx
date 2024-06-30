import LigaProfesionalTable from "@/app/components/ligas/ligaProfesional/ligaProfesional";
import LeagueMatches from "@/app/components/matches/LeagueMatches";
export const metadata = {
  title: "Liga Profesional",
};

export default function LigaProfesionalPage() {
  return (
    <section className="text-whiteCard">
      <LigaProfesionalTable
        leagueID={128}
        año={2024}
        clasificationTeams={1}
        partidosPorFecha={14}
      />
    </section>
  );
}
