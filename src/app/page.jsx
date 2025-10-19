import { getFixtures } from "@/app/services/Fixture.js";
import Fixture from "./components/fixture/Fixture";
import { Suspense } from "react";
import MatchCardSkeleton from "./components/matchCard/matchCardSkeleton";

export default async function Home({ searchParams }) {
  const currentDay = Number(searchParams?.day) || 0;
  const data = await getFixtures(currentDay);
  return (
    <>
      <Suspense key={currentDay} fallback={<MatchCardSkeleton />}>
        <Fixture data={data} />
      </Suspense>
    </>
  );
}

// 128 --> LIGA PROFESIONAL ARGENTINA
// 1032 --> COPA DE LA LIGA
// 130 --> COPA ARGENTINA
// 13 --> LIBERTADORES
// 11 --> SUDAMERICANA
// 2 --> UEFA CHAMPIONS LEAGUE
// 3 --> UEFA EUROPA LEAGUE
// 848 --> UEFA EUROPA CONFERENCE LEAGUE
// 39 --> PREMIER LEAGUE
// 16 --> CONCACAF CHAMPIONS
// 140 --> LA LIGA
// 135 --> SERIE A
// 71 --> BRASILEIRAO
// 906 --> RESERVA ARGENTINA
// 78 --> BUNDESLIGA
// 61 --> LIGUE 1 FRANCIA
// 239 --> LIGA COLOMBIA
// 268 --> LIGA URUGUAY
// 250 --> LIGA PARAGUAY
// 265 --> LIGA CHILE
