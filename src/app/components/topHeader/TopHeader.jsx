"use client";

import { useState } from "react";
import Buscador from "../buscador/buscador";
import ChangueThemeIcon from "../changueThemeIcon/changueThemeIcon";
import MenuIcon from "../icons/Menu";
import Cross from "../icons/Cross";
import Sidebar from "../sidebar/sidebar";

export default function TopHeader() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const handleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <>
      <div className="flex py-3 px-10 w-full relative justify-between items-center bg-blackBG">
        <button
          onClick={handleMenu}
          className="rounded-full bg-grayPage w-8 h-8 flex justify-center items-center lg:hidden "
        >
          <MenuIcon color={"#fff"} />
        </button>
        <Buscador />
        <ChangueThemeIcon />
      </div>
      <div
        className={`${
          isMenuActive ? "block" : "hidden"
        } bg-blackBG transition w-full z-40 p-10 h-screen absolute top-0 left-0 flex flex-col gap-5`}
      >
        <button className="absolute top-8 right-5" onClick={handleMenu}>
          <Cross color={"#FFF"} />
        </button>
        <Sidebar />
      </div>
    </>
  );
}
