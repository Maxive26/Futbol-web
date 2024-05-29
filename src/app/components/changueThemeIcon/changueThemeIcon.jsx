"use client";

import { useState, useEffect } from "react";
import Sun from "../icons/sun";
import Moon from "../icons/moon";
import useLocalStorage from "@/app/hooks/useLocalStorage.js";

export default function ChangueThemeIcon() {
  // const [theme, setTheme] = useLocalStorage("theme", "light");
  const [viewTheme, setViewTheme] = useState(true);

  // useEffect(() => {
  //   if (theme === "dark") {
  //     document.querySelector("html").classList.add("dark");
  //     setViewTheme(false);
  //   } else {
  //     document.querySelector("html").classList.remove("dark");
  //     setViewTheme(true);
  //   }
  // }, [theme]);

  const handleChangeTheme = () => {
    // const newTheme = theme === "dark" ? "light" : "dark";
    // setTheme(newTheme);
    setViewTheme(!viewTheme);
  };

  return (
    <button
      onClick={handleChangeTheme}
      className="rounded-full bg-grayPage w-8 h-8 flex justify-center items-center"
    >
      {viewTheme ? <Sun color={"#fff"} /> : <Moon color={"#fff"} />}
    </button>
  );
}
