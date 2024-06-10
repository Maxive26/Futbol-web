"use client";
import House from "../icons/House";
import Links from "./link";
import Logo from "./logo";
import React from "react";
import { LINKSSIDEBAR as LINKS } from "@/app/constants/LinksSidebar";

export default function Sidebar({ onLinkClick }) {
  return (
    <>
      <div className="h-10">
        <Logo />
      </div>
      <div className=" text-whiteCard flex flex-col gap-2">
        <Links
          href={"/"}
          liga={
            <span className="flex">
              <House />
              Inicio
            </span>
          }
          onClick={onLinkClick}
        />
        <br />
        {LINKS.map((enlace, index) => (
          <React.Fragment key={enlace.id}>
            {index === 0 && (
              <span className="font-bold text-xl ml-2">LIGAS</span>
            )}
            {index === 5 && (
              <span className="font-bold text-xl ml-2">COPAS</span>
            )}
            <Links
              href={enlace.href}
              liga={enlace.liga}
              onClick={onLinkClick}
            />
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
