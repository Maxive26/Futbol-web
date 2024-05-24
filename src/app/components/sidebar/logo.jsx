import React from "react";
import FootballBall from "@/app/components/icons/footballBall";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"}>
      <span className="flex text-whiteCard text-2xl  md:text-3xl items-center">
        FUTB
        <span>
          <FootballBall color={"#EBFD69"} />
        </span>
        LITA
      </span>
    </Link>
  );
}
