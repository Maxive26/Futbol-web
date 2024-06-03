"use client";
import { useState } from "react";
import FixtureLeague from "../fixtureLeague/fixtureLeague";
import FootballBall from "../icons/footballBall";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function Fixture({ data }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const valorParametro = searchParams.get("day")?.toString();

  const handleDay = () => {
    const params = new URLSearchParams(searchParams);
    if (valorParametro === "1") {
      params.set("day", 0);
      // params.delete("day");
    } else {
      params.set("day", 1);
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <div className="flex items-center mb-4 justify-between">
        <h1 className="text-xl lg:text-2xl font-semibold text-whiteCard md:w-80 flex items-center">
          <span className="mr-2">
            <FootballBall color={"#FFF"} />
          </span>
          {valorParametro === "1" ? "PARTIDOS DE MAÑANA" : "PARTIDOS DE HOY"}
        </h1>
        <button
          onClick={handleDay}
          className="text-whiteCard font-semibold py-1 flex justify-center items-center bg-grayPage w-28 transition ease-out border-2 border-greenCard  px-3 rounded-xl hover:bg-greenCard hover:text-blackBG"
        >
          {valorParametro === "1" ? "Hoy" : "Mañana"}
        </button>
      </div>
      <section className="bg-grayPage rounded-xl py-4 p-2 sm:p-5">
        {data.length === 0 ? (
          <h1 className=" text-red text-xl">X Peticiones diarias alcanzadas</h1>
        ) : (
          <>
            <FixtureLeague data={data} league={[9]} />
            <FixtureLeague data={data} league={[4]} />
            <FixtureLeague data={data} league={[15]} />
            <FixtureLeague data={data} league={[128]} />
            <FixtureLeague data={data} league={[10]} />
            <FixtureLeague data={data} league={[1032]} />
            <FixtureLeague data={data} league={[130]} />
            <FixtureLeague data={data} league={[13]} />
            <FixtureLeague data={data} league={[11]} />
            <FixtureLeague data={data} league={[2]} />
            <FixtureLeague data={data} league={[3]} />
            <FixtureLeague data={data} league={[848]} />
            <FixtureLeague data={data} league={[129]} />
            <FixtureLeague data={data} league={[131]} />
            <FixtureLeague data={data} league={[39]} />
            <FixtureLeague data={data} league={[16]} />
            <FixtureLeague data={data} league={[140]} />
            <FixtureLeague data={data} league={[135]} />
            <FixtureLeague data={data} league={[134]} />
            <FixtureLeague data={data} league={[71]} />
            <FixtureLeague data={data} league={[906]} />
            <FixtureLeague data={data} league={[78]} />
            <FixtureLeague data={data} league={[61]} />
            <FixtureLeague data={data} league={[239]} />
            <FixtureLeague data={data} league={[268]} />
            <FixtureLeague data={data} league={[250]} />
            <FixtureLeague data={data} league={[265]} />
            <FixtureLeague data={data} league={[866]} />
            <FixtureLeague data={data} league={[909]} />
            <FixtureLeague data={data} league={[262]} />
          </>
        )}
      </section>
    </>
  );
}
