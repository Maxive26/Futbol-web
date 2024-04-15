"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Links({ liga, href }) {
  const pathName = usePathname();
  return (
    <div
      className={`flex border-l-2 border-grayPage ml-2  transition-all ease-in hover:border-greenCard
      ${pathName === href ? "border-greenCard" : ""}
      `}
    >
      <Link
        href={href}
        className={`w-full  pl-5 transition-all ease-in hover:text-greenCard hover:opacity-100
        ${pathName === href ? "text-greenCard opacity-100" : "opacity-70"}
        `}
      >
        {liga}
      </Link>
    </div>
  );
}
