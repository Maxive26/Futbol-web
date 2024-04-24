import React from "react";

export default function FootballField() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="football-field w-96 h-60 rotate-90 bg-firstTeam border-2 border-greenCard relative">
        <div className="goalpost w-1 h-24 bg-whiteCard absolute left-0 top-1/2 transform -translate-y-1/2"></div>
        <div className="goalpost w-1 h-24 bg-whiteCard absolute right-0 top-1/2 transform -translate-y-1/2"></div>
        <div className="midline w-0.5 h-full bg-whiteCard absolute top-0 left-1/2 transform -translate-x-1/2"></div>
        <div className="center-circle w-24 h-24 border-2 border-whiteCard rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  );
}
