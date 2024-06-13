"use client";
import React, { useState, useEffect } from "react";
import Search from "@/app/components/icons/search";
import equiposConLogo from "@/app/constants/equiposConLogo.json";
import { useRouter } from "next/navigation";
import { useDebounce } from "@uidotdev/usehooks";

export default function Buscador({ closeSearchMenu }) {
  const [isFocused, setIsFocused] = useState(false);
  const [query, setQuery] = useState("");
  const [filteredTeams, setFilteredTeams] = useState([]);
  const router = useRouter();

  const debouncedQuery = useDebounce(query, 200);

  useEffect(() => {
    const equipos = equiposConLogo.filter((team) =>
      team.name.toLowerCase().includes(debouncedQuery.toLowerCase())
    );
    setFilteredTeams(equipos);
  }, [debouncedQuery]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleTeamClick = (id) => {
    if (typeof closeSearchMenu === "function") {
      closeSearchMenu();
    }
    setFilteredTeams([]);
    setQuery("");
    router.push(`/team/${id}`);
  };

  const getDropdownHeight = () => {
    const itemHeight = 56;
    const maxHeight = 224;
    const listHeight =
      filteredTeams.length > 0 ? filteredTeams.length * itemHeight : 56;
    return listHeight > maxHeight ? maxHeight : listHeight;
  };

  return (
    <div
      className={`bg-searchBG relative  transition p-2 ease-linear border-2 border-grayPage w-80 h-9 rounded-2xl flex gap-1 items-center ${
        isFocused ? "border-greenCard" : "hover:border-greenCard"
      }`}
    >
      <input
        type="text"
        name="team"
        onChange={handleInputChange}
        value={query}
        placeholder="Buscar equipos..."
        className="bg-searchBG text-base text-whiteCard outline-none rounded-l-xl w-72 h-7 ml-1 pl-2 border-r-2 border-grayPage "
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <div className=" items-center flex justify-center">
        <Search color={"#374151"} />
      </div>
      {query && (
        <ul
          className="bg-grayPage text-whiteCard flex flex-col z-50 gap-2 rounded-xl px-3 py-2 absolute top-10 left-0 w-full overflow-y-auto"
          style={{ maxHeight: `${getDropdownHeight()}px` }}
        >
          {filteredTeams.length > 0 ? (
            filteredTeams.map((team) => (
              <li
                key={team.id}
                className="cursor-pointer rounded-xl hover:bg-searchBG p-2 flex items-center"
                onClick={() => handleTeamClick(team.id)}
              >
                {/* <img
                  src={`images/escudos/${team.id}.png`}
                  alt=""
                  className="w-5 h-5 mr-3"
                /> */}
                {team.name}
              </li>
            ))
          ) : (
            <li className=" rounded-xl hover:bg-searchBG p-2 h-[56px] flex items-center">
              <span>Sin resultados...</span>
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
