import React from "react";
import Search from "../icons/search";

export default function Buscador() {
  return (
    <div className="bg-grayPage transition ease-linear border-2 border-grayPage w-80 h-8 rounded-2xl flex gap-2 items-center hover:border-greenCard">
      <input
        type="text"
        placeholder="Premier League, Serie A..."
        className="bg-grayPage text-whiteCard outline-none rounded-l-xl w-72 h-7 ml-1 pl-2 border-r-2 border-blackBG"
      />
      <div className="mr-3">
        <Search color={"#374151"} />
      </div>
    </div>
  );
}
