"use client";

import { useEffect, useState } from "react";

export default function useGetLeague(id, season) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const URL = "https://v3.football.api-sports.io";
        const API_KEY = process.env.NEXT_PUBLIC_FOOTBALL_API_KEY;

        const response = await fetch(
          `${URL}/standings?league=${id}&season=${season}`,
          {
            method: "GET",
            headers: {
              "x-rapidapi-host": "v3.football.api-sports.io",
              "x-rapidapi-key": `${API_KEY}`,
            },
          }
        );
        const data = await response.json();

        const mappedLeagues = data.response?.map((league) => ({
          leagueId: league.league.id,
          leagueName: league.league.name,
          leagueCountry: league.league.country,
          leagueLogo: league.league.logo,
          leagueSeason: league.league.season,
          leagueStandings: league.league.standings, //mapear y despues mapear de nuevo, arreglo de arreglos
        }));

        setData(mappedLeagues);
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
