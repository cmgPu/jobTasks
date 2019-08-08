const matches = [
  {
    homeTeam: "France",
    awayTeam: "Croatia",
    score: "2:1",
    date: "18.01.2019"
  },
  {
    homeTeam: "England",
    awayTeam: "Spain",
    score: "3:1",
    date: "18.01.2019"
  },
  {
    homeTeam: "Spain",
    awayTeam: "Croatia",
    score: "0:0",
    date: "12.01.2019"
  },
  {
    homeTeam: "France",
    awayTeam: "England",
    score: "0:1",
    date: "12.01.2019"
  },
  {
    homeTeam: "England",
    awayTeam: "Croatia",
    score: null,
    date: "03.02.2019"
  },
  {
    homeTeam: "Spain",
    awayTeam: "France",
    score: null,
    date: "03.02.2019"
  }
];

const getRankings = games => {
  // ... your implementation
  let rankings = [
    { team: "England", points: 0 },
    { team: "France", points: 0 },
    { team: "Croatia", points: 0 },
    { team: "Spain", points: 0 }
  ];
  //go through all games
  games.forEach(game => {
    //pull score from each game and store it in array [0]=homeTeam, [1]=awayTeam
    let score = [];
    if (typeof game.score === "string") {
      score = game.score.split(":");
      //determine winner and update rankings accordingly
      if (score[0] > score[1]) {
        rankings.forEach(rankedTeam => {
          if (rankedTeam.team === game.homeTeam) rankedTeam.points += 3;
        });
      } else if (score[0] < score[1]) {
        rankings.forEach(rankedTeam => {
          if (rankedTeam.team === game.awayTeam) rankedTeam.points += 3;
        });
      } else {
        rankings.forEach(rankedTeam => {
          if (
            rankedTeam.team === game.homeTeam ||
            rankedTeam.team === game.awayTeam
          )
            rankedTeam.points += 1;
        });
      }
    }
  });

  return rankings;
};

const footbalRankings = getRankings(matches);
console.log(footbalRankings);
