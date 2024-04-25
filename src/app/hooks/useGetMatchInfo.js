"use client";

import { useEffect, useState } from "react";

export default function useGetMatchInfo(fixtureID) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
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
          color: team.team.colors.player.primary,
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
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading };
}
