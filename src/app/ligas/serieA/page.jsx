"use client";
import LeagueTable from "@/app/components/table/leagueTable.jsx";
export default function SerieAPage() {
  return (
    <section className="text-whiteCard">
      <LeagueTable leagueID={135} año={2023} />
    </section>
  );
}
