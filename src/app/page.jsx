"use client";
import { useGetFixture } from "../app/hooks/useGetFixture.js";
import FootballBall from "../app/components/icons/footballBall";
import Loading from "../app/components/loading/loading";
import FixtureLeague from "./components/fixtureLeague/fixtureLeague";
import { useState } from "react";

export default function Home() {
  const [button, setButton] = useState("Mañana");
  const [tomorrow, setTomorrow] = useState(0);
  const { data, loading, error } = useGetFixture(tomorrow);
  // const data = null;

  if (loading) {
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

  const handleDay = () => {
    if (button === "Mañana") {
      setButton("Hoy");
      setTomorrow(1);
    } else {
      setButton("Mañana");
      setTomorrow(0);
    }
  };

  return (
    <>
      {data.length === 0 && (
        <h1 className="text-whiteCard font-bold">
          Peticiones diarias alcanzadas
        </h1>
      )}
      <div className="flex items-center mb-4 justify-between">
        <h1 className="text-2xl font-semibold text-whiteCard md:w-80 flex items-center">
          <span className="mr-2">
            <FootballBall color={"#FFF"} />
          </span>
          {button === "Mañana" ? "PARTIDOS DE HOY" : "PARTIDOS DE MAÑANA"}
        </h1>
        <button
          onClick={handleDay}
          className="text-whiteCard font-semibold py-1 flex justify-center items-center bg-grayPage w-28 transition ease-out border-2 border-greenCard  px-3 rounded-xl hover:bg-greenCard hover:text-blackBG"
        >
          {button}
        </button>
      </div>
      <section className="bg-grayPage rounded-xl p-5">
        <FixtureLeague data={data} league={[128]} />
        <FixtureLeague data={data} league={[1032]} />
        <FixtureLeague data={data} league={[13]} />
        <FixtureLeague data={data} league={[11]} />
        <FixtureLeague data={data} league={[2]} />
        <FixtureLeague data={data} league={[39]} />
        <FixtureLeague data={data} league={[140]} />
        <FixtureLeague data={data} league={[135]} />
        <FixtureLeague data={data} league={[71]} />
        <FixtureLeague data={data} league={[906]} />
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
// 39 --> PREMIER LEAGUE
// 140 --> LA LIGA
// 135 --> SERIE A
// 71 --> BRASILEIRAO
// 906 --> RESERVA ARGENTINA
// 78 --> BUNDESLIGA
// 61 --> LIGUE 1 FRANCIA
// 239 --> LIGA COLOMBIA
