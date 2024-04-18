"use client";

import { useEffect, useState } from "react";

export function useGetFixture() {
  const [data, setData] = useState("");
  const URL = "https://v3.football.api-sports.io";
  const API_KEY = process.env.NEXT_PUBLIC_FOOTBALL_API_KEY;

  fetch(`${URL}/fixtures?league=1032&season=2024&date=2024-04-17`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": `${API_KEY}`,
    },
  })
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((err) => {
      console.log(err);
    });

  return { data };
}
