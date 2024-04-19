"use client";

import { useEffect, useState } from "react";

export function useGetFixture() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const URL = "https://v3.football.api-sports.io";
        const API_KEY = process.env.NEXT_PUBLIC_FOOTBALL_API_KEY;

        const response = await fetch(
          `${URL}/fixtures?league=906&season=2024&date=2024-04-19&timezone=America/Argentina/Buenos_Aires`,
          {
            method: "GET",
            headers: {
              "x-rapidapi-host": "v3.football.api-sports.io",
              "x-rapidapi-key": `${API_KEY}`,
            },
          }
        );

        const data = await response.json();
        const matches = data.response;
        const mappedMatches = matches?.map((match) => ({
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
        }));

        setData(mappedMatches);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData(); // Llama a la función para obtener los datos
  }, []);

  return { data };
}
