import React from "react";
import FootballBall from "@/app/components/icons/footballBall";

export default function Loading() {
  return (
    <div className="animate-pulse text-xl font-semibold mb-4 text-whiteCard justify-center flex items-center h-4/5">
      <span className="mr-2 animate-spin">
        <FootballBall color={"#EBFD69"} />
      </span>
      CARGANDO...
    </div>
  );
}
