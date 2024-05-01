import React from "react";

export default function Sun({ color }) {
  return (
    <svg
      stroke={color}
      fill={color}
      strokeWidth="0"
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="none"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M256 48v48m0 320v48m147.08-355.08-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48m-320 0H48m355.08 147.08-33.94-33.94M142.86 142.86l-33.94-33.94"
      ></path>
      <circle
        cx="256"
        cy="256"
        r="80"
        fill="none"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
      ></circle>
    </svg>
  );
}
