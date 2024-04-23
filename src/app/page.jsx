"use client";
import { useGetFixture } from "../app/hooks/useGetFixture.js";
import FootballBall from "../app/components/icons/footballBall";
import Loading from "../app/components/loading/loading";
import FixtureLeague from "./components/fixtureLeague/fixtureLeague";

export default function Home() {
  const { data } = useGetFixture();
  // const data = null;

  if (!data) {
    return (
      <>
        <h1 className="text-2xl font-semibold mb-4 text-whiteCard flex items-center">
          <span className="mr-2">
            <FootballBall color={"#FFF"} />
          </span>
          PARTIDOS DE HOY
        </h1>
        <Loading />
      </>
    );
  }

  return (
    <>
      <h1 className="text-2xl font-semibold mb-4 text-whiteCard flex items-center">
        <span className="mr-2">
          <FootballBall color={"#FFF"} />
        </span>
        PARTIDOS DE HOY
      </h1>
      <section className="bg-grayPage rounded-xl p-5">
        <FixtureLeague data={data} league={[128]} />
        <FixtureLeague data={data} league={[1032]} />
        <FixtureLeague data={data} league={[13]} />
        <FixtureLeague data={data} league={[11]} />
        <FixtureLeague data={data} league={[2]} />
        <FixtureLeague data={data} league={[906]} />
        <FixtureLeague data={data} league={[39]} />
        <FixtureLeague data={data} league={[140]} />
        <FixtureLeague data={data} league={[135]} />
        <FixtureLeague data={data} league={[71]} />
        <FixtureLeague data={data} league={[78]} />
        <FixtureLeague data={data} league={[61]} />
        <FixtureLeague data={data} league={[239]} />
      </section>
    </>
  );
}

// 128 --> LIGA PROFESIONAL ARGENTINA
// 1032 --> COPA DE LA LIGA
// 13 --> LIBERTADORES
// 11 --> SUDAMERICANA
// 2 --> UEFA CHAMPIONS LEAGUE
// 906 --> RESERVA ARGENTINA
// 39 --> PREMIER LEAGUE
// 140 --> LA LIGA
// 135 --> SERIE A
// 71 --> BRASILEIRAO
// 78 --> BUNDESLIGA
// 61 --> LIGUE 1 FRANCIA
// 239 --> LIGA COLOMBIA
