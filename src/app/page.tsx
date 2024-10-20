import MainDisplay from "@/components/MainDIsplay";
import PlayerDetails from "@/components/PlayerDetails";
import SearchBar from "@/components/SearchBar";
import PlayerDetailsContextProvider, {
  PlayerDetailsContext,
} from "@/contexts/PlayerDetailsContextProvider";

export default function Home() {
  return (
    <div className="flex h-screen w-screen bg-gradient-to-r from-red to-blue-clash items-center justify-center">
      <div className="bg-blue h-[800px] w-1/2 rounded-3xl shadow-2xl p-2">
        <PlayerDetailsContextProvider>
          <SearchBar />
          <MainDisplay />
          <PlayerDetails />
        </PlayerDetailsContextProvider>
      </div>
    </div>
  );
}
