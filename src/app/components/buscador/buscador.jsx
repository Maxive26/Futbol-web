import React from "react";
import Search from "@/app/components/icons/search";

export default function Buscador() {
  return (
    <div className="bg-searchBG  transition ease-linear border-2 border-grayPage w-40 sm:w-80 h-8 rounded-2xl flex sm:gap-2 items-center hover:border-greenCard">
      <input
        type="text"
        name="team"
        placeholder="Buscar equipos..."
        className="bg-searchBG py-3 text-sm sm:text-base text-whiteCard outline-none rounded-l-xl w-32 sm:w-72 h-7 ml-1 pl-2 border-r-2 border-grayPage"
      />
      <div className="sm:mr-3">
        <Search color={"#374151"} />
      </div>
    </div>
  );
}
