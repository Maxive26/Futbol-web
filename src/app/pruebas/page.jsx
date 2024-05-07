import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import MatchCardSkeleton from "../components/matchCard/matchCardSkeleton";

export default function page() {
  return <MatchCardSkeleton />;
}
