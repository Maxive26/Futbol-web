"use client";

import { useEffect, useState } from "react";

export function useGetFixture() {
  const [data, setData] = useState(null);

  useEffect(() => {
    function getCurrentDate() {
      const date = new Date();
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");
      const dateFormated = `${year}-${month}-${day}`;

      return dateFormated;
    }
    const fetchData = async () => {
      try {
        const URL = "https://v3.football.api-sports.io";
        const API_KEY = process.env.NEXT_PUBLIC_FOOTBALL_API_KEY;

        const response = await fetch(
          `${URL}/fixtures?&date=${getCurrentDate()}&timezone=America/Argentina/Buenos_Aires`,
          {
            method: "GET",
            headers: {
              "x-rapidapi-host": "v3.football.api-sports.io",
              "x-rapidapi-key": `${API_KEY}`,
            },
          }
        );

        const data = await response.json();
        const requiredLeagues = [906, 1032, 135, 39, 128, 140, 71, 78, 61];
        const matches = data.response.filter((match) =>
          requiredLeagues.includes(match.league.id)
        );

        const groupedMatches = {};
        matches.forEach((match) => {
          const leagueName = match.league.name;
          if (!groupedMatches[leagueName]) {
            groupedMatches[leagueName] = [];
          }
          groupedMatches[leagueName].push(match);
        });

        const sortedMatches = Object.entries(groupedMatches).sort(
          ([ligaA], [ligaB]) => ligaA.localeCompare(ligaB)
        );

        const mappedMatches = sortedMatches.flatMap(([leagueName, matches]) =>
          matches.map((match) => ({
            nombreLiga: leagueName,
            id: match.fixture.id,
            referi: match.fixture.referee,
            horario: match.fixture.timestamp,
            primerTiempo: match.fixture.periods.first,
            segundoTiempo: match.fixture.periods.second,
            estadio: match.fixture.venue.name,
            estado: match.fixture.status.short,
            equipoLocalNombre: match.teams.home.name,
            equipoLocalEscudo: match.teams.home.logo,
            equipoLocalResultado: match.goals.home,
            equipoVisitanteNombre: match.teams.away.name,
            equipoVisitanteEscudo: match.teams.away.logo,
            equipoVisitanteResultado: match.goals.away,
          }))
        );

        setData(mappedMatches);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);

  return { data };
}
