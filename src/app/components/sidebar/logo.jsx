import React from "react";
import FootballBall from "@/app/components/icons/footballBall";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"}>
      <h1 className="flex text-whiteCard text-3xl items-center">
        PR
        <span>
          <FootballBall color={"#EBFD69"} />
        </span>
        MIEDOS
      </h1>
    </Link>
  );
}
