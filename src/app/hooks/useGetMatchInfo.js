"use client";

import { useEffect, useState } from "react";

export default function useGetMatchInfo(fixtureID) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const URL = "https://v3.football.api-sports.io";
        const API_KEY = process.env.NEXT_PUBLIC_FOOTBALL_API_KEY;

        const response = await fetch(
          `${URL}/fixtures/lineups?fixture=${fixtureID}`,
          {
            method: "GET",
            headers: {
              "x-rapidapi-host": "v3.football.api-sports.io",
              "x-rapidapi-key": `${API_KEY}`,
            },
          }
        );

        const data = await response.json();

        const mappedFormation = data.response?.map((team) => ({
          equipo: team.team.name,
          idEquipo: team.team.id,
          escudo: team.team.logo,
          formacion: team.formation,
          entrenador: team.coach.name,
          jugadores: team.startXI,
          suplentes: team.substitutes,
        }));

        setData(mappedFormation);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);

  return { data };
}
