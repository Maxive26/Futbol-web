import React from "react";
import NewCard from "../components/NewsCard/NewCard";
import Link from "next/link";
import FootballBall from "../components/icons/footballBall";
import PlayersTable from "../components/table/playersTable";
import Badge from "../components/Badge/badge";

export default function page() {
  return (
    <>
      <Badge
        text={"Los 2 primeros de cada grupo clasifican a octavos"}
        color={"bg-firstTeam/80"}
      />
      <Badge
        text={"Los 4 mejores terceros clasifican a Octavos"}
        color={"bg-yellow/50"}
      />
    </>
  );
}
