"use client";

import { useState } from "react";
import Buscador from "../buscador/buscador";
import ChangueThemeIcon from "../changueThemeIcon/changueThemeIcon";
import MenuIcon from "../icons/Menu";
import Cross from "../icons/Cross";
import Sidebar from "../sidebar/sidebar";
import Logo from "../sidebar/logo";
import Search from "../icons/search";

export default function TopHeader() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const handleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };
  const closeMenu = () => {
    setIsMenuActive(false);
  };

  return (
    <>
      <div className="flex py-3 px-7 w-full relative justify-between items-center bg-blackBG">
        <button
          onClick={handleMenu}
          className="rounded-full bg-grayPage w-8 h-8 flex justify-center items-center lg:hidden "
        >
          <MenuIcon color={"#fff"} />
        </button>

        <div className="hidden lg:block">
          <Buscador />
        </div>
        <div className="block ml-7 lg:hidden">
          <Logo />
        </div>
        <div className="flex gap-3">
          <div className="block lg:hidden">
            <button className=" rounded-full bg-grayPage w-8 h-8 flex justify-center items-center">
              <Search color={"#FFF"} />
            </button>
          </div>
          <ChangueThemeIcon />
        </div>
      </div>
      <div
        className={`${
          isMenuActive ? "block" : "hidden"
        } bg-blackBG transition w-full z-40 p-10 h-screen absolute top-0 left-0 flex flex-col gap-5`}
      >
        <button className="absolute top-9 right-9" onClick={handleMenu}>
          <Cross color={"#FFF"} />
        </button>
        <Sidebar onLinkClick={closeMenu} />
      </div>
    </>
  );
}
