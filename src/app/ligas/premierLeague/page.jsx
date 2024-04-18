"use client";
import LeagueTable from "@/app/components/table/leagueTable.jsx";

export default function PremierLeaguePage() {
  return (
    <section className="text-whiteCard">
      <LeagueTable leagueID={39} año={2023} clasificationTeams={1} />
    </section>
  );
}
