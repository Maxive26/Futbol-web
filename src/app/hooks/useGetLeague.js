"use client";

import { useEffect, useState } from "react";

export function useGetLeague(id, api_key) {
  const [data, setData] = useState("");
  const URL = "https://v3.football.api-sports.io";
  const API_KEY = process.env.REACT_APP_FOOTBALL_API_KEY;

  // COPA DE LA LIGA ID: 1032
  useEffect(() => {
    fetch(`${URL}/standings?league=${id}&season=2024`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": { API_KEY },
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //   const leagueInfo = {
  //     id: data.response[0].league.standing[0][0].team.id,
  //     posicion: data.response[0].league.standing[0].rank,
  //     equipo: data.response[0].league.standing[0][0].team.name,
  //     escudo: data.response[0].league.standing[0][0].team.logo,
  //     puntos: data.response[0].league.standing[0][0].points,
  //   };

  return { data };
}
