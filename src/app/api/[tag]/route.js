export async function GET(request, { params }) {
  const { tag } = params;

  const playerData = {
    tag: `#PQ0RJY0JL`, // Use the provided tag
    name: "ModdestAsh",
    expLevel: 42,
    trophies: 7087,
    bestTrophies: 7226,
    wins: 2485,
    losses: 2767,
    battleCount: 5252,
    threeCrownWins: 773,
    challengeCardsWon: 32,
    challengeMaxWins: 5,
    tournamentCardsWon: 0,
    tournamentBattleCount: 116,
    role: "member",
    donations: 0,
    donationsReceived: 0,
    totalDonations: 7058,
    warDayWins: 0,
    clanCardsCollected: 1320,
    clan: {
      tag: "#LP00CCUV",
      name: "uwu",
      badgeId: 16000139,
    },
    arena: {
      id: 54000016,
      name: "Dragon Spa",
    },
    leagueStatistics: {
      currentSeason: {
        trophies: 7087,
        bestTrophies: 5329,
      },
      previousSeason: {
        id: "2024-09",
        trophies: 5198,
        bestTrophies: 5330,
      },
      bestSeason: {
        id: "2021-09",
        trophies: 5342,
      },
    },
  };

  return new Response(JSON.stringify(playerData), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
