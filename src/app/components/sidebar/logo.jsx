import React from "react";
import FootballBall from "../icons/footballBall";

export default function Logo() {
  return (
    <>
      <h1 className="flex text-whiteCard text-3xl items-center">
        PR
        <span>
          <FootballBall color={"#EBFD69"} />
        </span>
        MIEDOS
      </h1>
    </>
  );
}
