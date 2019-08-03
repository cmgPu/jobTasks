
const matches = [
    {
        homeTeam: 'France',
        awayTeam: 'Croatia',
        score: '2:1',
        date: '18.01.2019'
    },
    {
        homeTeam: 'England',
        awayTeam: 'Spain',
        score: '3:1',
        date: '18.01.2019'
    },
    {
        homeTeam: 'Spain',
        awayTeam: 'Croatia',
        score: '0:0',
        date: '12.01.2019'
    },
    {
        homeTeam: 'France',
        awayTeam: 'England',
        score: '0:1',
        date: '12.01.2019'
    },
    {
        homeTeam: 'England',
        awayTeam: 'Croatia',
        score: null,
        date: '03.02.2019'
    },
    {
        homeTeam: 'Spain',
        awayTeam: 'France',
        score: null,
        date: '03.02.2019'
    }
];

function getRankings(games) {


    var list = [];

    //block of for loops will create teams ranking and sort them by points and names
    for (let i = 0; i < games.length; i++) {
        var result = null;
        //if game is not played yet and score is null it will be skipped from calculations
        if (games[i].score != null) {
            result = games[i].score.split(':');
            //variables will be used used for checking if the team is already in the list
            let homeUnique = true;
            let awayUnique = true;

            //for loop will resolve if current pair of teams are already in ranking list
            for (let j = 0; j < list.length; j++) {
                //if current home team of pair is already in list variable will be set as false so it would prevent creating duplicate
                if (list[j].team === games[i].homeTeam) {
                    homeUnique = false
                }
                //if current home team of pair is already in list variable will be set as false so it would prevent creating duplicate
                if (list[j].team === games[i].awayTeam) {
                    awayUnique = false
                }


            }




            //if home team is not in the list it will be added with points gained in current match
            if (homeUnique) {
                if (result != null && result[0] > result[1]) {
                    list.push({ 'team': games[i].homeTeam, 'points': 3 })
                }
                else if (result != null && result[0] < result[1]) {
                    list.push({ 'team': games[i].homeTeam, 'points': 0 })
                }
                else if (result != null) {
                    list.push({ 'team': games[i].homeTeam, 'points': 1 })
                }
            }
            //if hime team is already in list this block will update its points if they earned them in current match
            else {
                for (var k of list) {
                    if (k.team === games[i].homeTeam && result != null && result[0] > result[1]) {
                        k.points += 3;
                    }
                    else if (k.team === games[i].homeTeam && result != null && result[0] === result[1]) {
                        k.points += 1;
                    }
                }
            }
            //procedure above will be repeated for awway team in current match
            if (awayUnique) {
                if (result != null && result[0] < result[1]) {
                    list.push({ 'team': games[i].awayTeam, 'points': 3 })
                }
                else if (result != null && result[0] > result[1]) {
                    list.push({ 'team': games[i].awayTeam, 'points': 0 })
                }
                else if (result != null) {
                    list.push({ 'team': games[i].awayTeam, 'points': 1 })
                }
            }
            else {
                for (var k of list) {
                    if (k.team === games[i].awayTeam && result != null && result[0] < result[1]) {
                        k.points += 3;
                    }
                    else if (k.team === games[i].awayTeam && result != null && result[0] === result[1]) {
                        k.points += 1;
                    }
                }
            }
        }
    }
    //after list is created it will be sorted by earned points and alphanumerical order if the teams are having same number of points
    list.sort((team1, team2) => (team1.points < team2.points) ? 1 : (team1.points === team2.points) ? ((team1.team > team2.team) ? 1 : -1) : -1)
    //function will return calculated and sorted list
    return list;
}

const footbalRankings = getRankings(matches);
console.log(footbalRankings);


