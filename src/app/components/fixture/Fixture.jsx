"use client";
import { useState, useEffect } from "react";
import FixtureLeague from "../fixtureLeague/fixtureLeague";
import FootballBall from "../icons/footballBall";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Row from "../icons/row";
import { Tooltip as ReactTooltip } from "react-tooltip";
import MatchCardSkeleton from "../matchCard/matchCardSkeleton";

export default function Fixture({ data }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const valorParametro = searchParams.get("day")?.toString() || "0";
  const [hoveredLeft, setHoveredLeft] = useState(false);
  const [hoveredRight, setHoveredRight] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLeftDay = () => {
    setLoading(true);
    const params = new URLSearchParams(searchParams);
    if (valorParametro === "0") {
      params.set("day", "-1");
    } else if (valorParametro === "1") {
      params.set("day", "0");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const handleRightDay = () => {
    setLoading(true);
    const params = new URLSearchParams(searchParams);
    if (valorParametro === "0") {
      params.set("day", "1");
    } else if (valorParametro === "-1") {
      params.set("day", "0");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    setLoading(false);
  }, [valorParametro]);

  if (loading) {
    return <MatchCardSkeleton />;
  }

  return (
    <>
      <div className="flex items-center mb-4 justify-between">
        <h1 className="text-xl lg:text-2xl font-semibold text-whiteCard md:w-80 flex items-center">
          <span className="mr-2">
            <FootballBall color={"#FFF"} />
          </span>
          {valorParametro === "1"
            ? "PARTIDOS DE MAÑANA"
            : valorParametro === "-1"
            ? "PARTIDOS DE AYER"
            : "PARTIDOS DE HOY"}
        </h1>
        <div className="flex gap-4">
          <button
            onClick={handleLeftDay}
            onMouseEnter={() => setHoveredLeft(true)}
            onMouseLeave={() => setHoveredLeft(false)}
            className={`text-whiteCard rotate-180 font-semibold py-1 flex justify-center items-center bg-grayPage transition ease-out border-2 border-greenCard px-3 rounded-xl ${
              valorParametro === "-1"
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-greenCard hover:text-blackBG"
            }`}
            disabled={valorParametro === "-1"}
            data-tooltip-id="left"
            data-tooltip-content="Partidos de ayer"
          >
            <Row color={hoveredLeft ? "#000" : "#EBFD69"} />
          </button>
          <button
            onClick={handleRightDay}
            onMouseEnter={() => setHoveredRight(true)}
            onMouseLeave={() => setHoveredRight(false)}
            className={`text-whiteCard font-semibold py-1 flex justify-center items-center bg-grayPage transition ease-out border-2 border-greenCard px-3 rounded-xl ${
              valorParametro === "1"
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-greenCard hover:text-blackBG"
            }`}
            disabled={valorParametro === "1"}
            data-tooltip-id="rigth"
            data-tooltip-content="Partidos de mañana"
          >
            <Row color={hoveredRight ? "#000" : "#EBFD69"} />
          </button>
          <ReactTooltip
            place="bottom"
            style={{ fontSize: "12px", padding: "5px" }}
            id="rigth"
          />
          <ReactTooltip
            style={{ fontSize: "12px", padding: "5px" }}
            place="bottom"
            id="left"
          />
        </div>
      </div>
      <section className="bg-grayPage rounded-xl py-4 p-2 sm:p-5">
        {data.length === 0 ? (
          <h1 className=" text-red text-xl">X Peticiones diarias alcanzadas</h1>
        ) : (
          <>
            <FixtureLeague data={data} league={[9]} />
            <FixtureLeague data={data} league={[4]} />
            <FixtureLeague data={data} league={[34]} />
            <FixtureLeague data={data} league={[32]} />
            <FixtureLeague data={data} league={[15]} />
            <FixtureLeague data={data} league={[128]} />
            <FixtureLeague data={data} league={[5]} />
            <FixtureLeague data={data} league={[10]} />
            <FixtureLeague data={data} league={[1032]} />
            <FixtureLeague data={data} league={[130]} />
            <FixtureLeague data={data} league={[13]} />
            <FixtureLeague data={data} league={[11]} />
            <FixtureLeague data={data} league={[480]} />
            <FixtureLeague data={data} league={[2]} />
            <FixtureLeague data={data} league={[3]} />
            <FixtureLeague data={data} league={[848]} />
            <FixtureLeague data={data} league={[129]} />
            <FixtureLeague data={data} league={[39]} />
            <FixtureLeague data={data} league={[140]} />
            <FixtureLeague data={data} league={[135]} />
            <FixtureLeague data={data} league={[131]} />
            <FixtureLeague data={data} league={[132]} />
            <FixtureLeague data={data} league={[16]} />
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
