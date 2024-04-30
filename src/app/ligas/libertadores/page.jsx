"use client";
import LeagueTable from "@/app/components/table/leagueTable.jsx";
import { useState } from "react";
export default function LibertadoresPage() {
  const [equipos, setEquipos] = useState(null);

  const equiposNecesarios = [];

  equipos?.forEach((equipo) => {
    equipo.leagueStandings.forEach((group) => {
      const equiposRank1y2 = group.filter(
        (equipoEnGrupo) => equipoEnGrupo.rank === 1 || equipoEnGrupo.rank === 2
      );
      equiposNecesarios.push(...equiposRank1y2);
    });
  });

  return (
    <>
      <section className="text-whiteCard">
        <LeagueTable
          leagueID={13}
          año={2024}
          clasificationTeams={2}
          amarilloTeams={true}
          equipos={setEquipos}
        />
      </section>
      <section>
        <h1>holas</h1>
      </section>
    </>
  );
}
