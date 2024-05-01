"use client";

import { useState } from "react";
import Sun from "../icons/sun";
import Moon from "../icons/moon";

export default function ChangueThemeIcon() {
  const [viewTheme, setViewTheme] = useState(true);

  const handleChangeTheme = () => {
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
