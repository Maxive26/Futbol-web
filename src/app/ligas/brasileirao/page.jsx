"use client";
import LeagueTable from "@/app/components/table/leagueTable.jsx";
export default function BrasileiraoPage() {
  return (
    <section className="text-whiteCard">
      <LeagueTable leagueID={740} año={2023} />
    </section>
  );
}
