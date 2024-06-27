import React from "react";

function Partido() {
  return (
    <div className="flex items-center bg-grayPage w-60 justify-center py-5 rounded-xl">
      <div className="flex flex-col">
        <div className="flex flex-col items-center w-28">
          <img
            src={`images/escudos/10187.png`}
            style={{ filter: "drop-shadow(-5px 5px 5px rgba(31,32,34,.5))" }}
            className="max-w-20 max-h-20 mb-1"
            alt="Escudo del equipo local"
          />
          <span className="text-whiteCard text-center px-2 font-bold truncate w-32">
            Argentina
          </span>
        </div>
      </div>
      <span className="text-whiteCard">vs</span>
      <div className="flex flex-col">
        <div className="flex flex-col items-center w-28">
          <img
            src={`images/escudos/22430.png`}
            style={{ filter: "drop-shadow(-5px 5px 5px rgba(31,32,34,.5))" }}
            className="max-w-20 max-h-20 mb-1"
            alt="Escudo del equipo local"
          />
          <span className="text-whiteCard text-center px-2 font-bold truncate w-32">
            Argentina
          </span>
        </div>
      </div>
    </div>
  );
}

export default function LlavesCopaAmerica() {
  return (
    <div className="p-5 rounded-xl bg-blackBG relative w-[840px]">
      <div className=" w-4 h-44 top-24 left-[265px] border-t-2 border-r-2 border-b-2 border-whiteCard absolute  rounded-r-lg">
        <div className="w-3 h-1 top-1/2 left-4 border-t-2  border-whiteCard absolute "></div>
      </div>
      <div className=" w-4 h-44 bottom-24 left-[265px] border-t-2 border-r-2 border-b-2 border-whiteCard absolute  rounded-r-lg">
        <div className="w-3 h-1 bottom-1/2 left-4 border-t-2  border-whiteCard absolute "></div>
      </div>
      <div className="w-4 h-[350px] top-44 right-[280px] border-t-2 border-r-2 border-b-2 border-whiteCard absolute  rounded-r-lg">
        <div className="w-3 h-1 left-4 bottom-1/2 border-t-2  border-whiteCard absolute "></div>
      </div>
      <div className="h-auto w-[800px] gap-10  grid grid-cols-3">
        <div className="flex flex-col justify-center gap-6 w-60">
          <Partido />
          <Partido />
          <Partido />
          <Partido />
        </div>
        <div className="flex flex-col justify-around gap-6 w-60">
          <Partido />
          <Partido />
        </div>
        <div className="flex flex-col justify-center gap-6 w-60">
          <Partido />
        </div>
      </div>
    </div>
  );
}
