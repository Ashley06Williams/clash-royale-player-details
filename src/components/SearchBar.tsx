"use client";

import { usePlayerDetailsContext } from "@/contexts/PlayerDetailsContextProvider";

export default function SearchBar() {
  const myTag = "PQ0RJY0JL";

  const { playerTag, setPlayerTag, setPlayer, player } =
    usePlayerDetailsContext();

  const handleChange = (e) => {
    e.preventDefault();
    setPlayerTag(e.target.value);
  };
  console.log(playerTag);

  const getPlayerInfo = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/${playerTag}`);

    if (!response) return console.log("Api not found");

    const data = await response.json();

    setPlayer({
      name: data.name,
      tag: data.tag,
      clan: data.clan.name,
      trophies: data.trophies,
      level: data.expLevel,
      arena: data.arena.name,
    });

    console.log(player);
  };

  return (
    <div className="h-24 w-full p-4">
      <form onSubmit={getPlayerInfo} className="flex justify-between">
        <input
          onChange={handleChange}
          type="text"
          className="bg-blue border border-white rounded-3xl w-3/5 p-3 text-white"
          placeholder="Player Tag"
        />
        <button
          className="w-1/3 bg-purple p-3 rounded-3xl text-white "
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}
