import React from "react";
import Loading from "./components/loading/loading";
import MatchCardSkeleton from "./components/matchCard/matchCardSkeleton";

export default function loading() {
  return (
    <div>
      <MatchCardSkeleton />
    </div>
  );
}
