"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

type TPlayerDetails = {
  playerTag: string;
  setPlayerTag: Dispatch<SetStateAction<string>>;
  player: {
    name: string;
    tag: string;
    clan: string;
    trophies: number;
    level: number;
    arena: string;
  };
  setPlayer: Dispatch<
    SetStateAction<{
      name: string;
      tag: string;
      clan: string;
      trophies: number;
      level: number;
      arena: string;
    }>
  >;
};

type TContext = {
  children: React.ReactNode;
};

export const PlayerDetailsContext = createContext<TPlayerDetails | null>(null);

export default function PlayerDetailsContextProvider({ children }: TContext) {
  const [playerTag, setPlayerTag] = useState("");
  const [player, setPlayer] = useState({
    name: "ModestAsh",
    tag: "PQ0RJY0JL",
    clan: "Uwu",
    trophies: 7087,
    level: 42,
    arena: "Dragon Spa",
  });

  return (
    <PlayerDetailsContext.Provider
      value={{
        playerTag,
        setPlayerTag,
        setPlayer,
        player,
      }}
    >
      {children}
    </PlayerDetailsContext.Provider>
  );
}

export function usePlayerDetailsContext() {
  const context = useContext(PlayerDetailsContext);
  if (!context) {
    throw new Error(`Loan items is not defined component`);
  }
  return context;
}
