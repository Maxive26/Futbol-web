import React from "react";

export default function Badge({ text, color }) {
  return (
    <span
      className={`inline-flex mb-3 items-center rounded-xl ${color} text-whiteCard px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green/20`}
    >
      {text}
    </span>
  );
}
