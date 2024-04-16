"use client";
import LeagueTable from "@/app/components/table/leagueTable.jsx";
export default function LaLigaPage() {
  return (
    <section className="text-whiteCard">
      <LeagueTable leagueID={140} año={2023} />
    </section>
  );
}
