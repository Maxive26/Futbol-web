"use client";
import LeagueTable from "@/app/components/table/leagueTable.jsx";

export default function CopaDeLaLigaPage() {
  return (
    <section className="text-whiteCard">
      <LeagueTable leagueID={1032} />
    </section>
  );
}
