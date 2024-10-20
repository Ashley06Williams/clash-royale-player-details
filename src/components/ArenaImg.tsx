import { usePlayerDetailsContext } from "@/contexts/PlayerDetailsContextProvider";
import React from "react";

export default function ArenaImg() {
  const { player } = usePlayerDetailsContext();
  return (
    <div className="flex flex-col items-center">
      <img src="/challeng.svg" alt="Image of your arena" className="mt-6" />
      <h3 className="mt-2 text-[35px] font-semibold">{player.arena}</h3>
    </div>
  );
}
