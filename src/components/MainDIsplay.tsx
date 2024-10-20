"use client";

import React from "react";
import ArenaImg from "./ArenaImg";
import { usePlayerDetailsContext } from "@/contexts/PlayerDetailsContextProvider";

export default function MainDisplay() {
  const { player } = usePlayerDetailsContext();

  const { name, tag, level, arena } = player;

  return (
    <div className="mx-6 text-white">
      <div className=" flex items-center justify-between ">
        <div>
          <h1 className="text-[45px] font-light">{name}</h1>
          <h2 className="text[40px] font-extralight">#{tag}</h2>
        </div>
        <div>
          <div className="w-14 h-14 rounded-full bg-blue-light flex items-center justify-center text-white font-bold text-[23px]">
            {level}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <ArenaImg />
      </div>
    </div>
  );
}
