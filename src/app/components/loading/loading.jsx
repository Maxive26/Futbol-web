import React from "react";
import FootballBall from "../icons/footballBall";

export default function Loading() {
  return (
    <div className="animate-pulse text-xl font-semibold mb-4 text-whiteCard justify-center flex items-center h-[80%]">
      <span className="mr-2 animate-spin">
        <FootballBall color={"#EBFD69"} />
      </span>
      CARGANDO...
    </div>
  );
}
