# Team ranking

## Description
In the games.js you will find an array of objects. Each object contains information about single football match.
Games which have score *null* have not been played yet.

Your job is to make an implementation of ***getRankings()*** function so that it returns a new array with all teams, and for each team sum up points they got, sort that array by points, so that team with most points is the first in the array. Teams with the same number of points have to be sorted by team name (alphabetically).

**Team win**: 3 points
**Team loss:** 0 points
**Draw:** 1 point

## Definition of done
This output:

    [
	    [0]: { team: 'England', points:  6 }
		[1]: { team: 'France', points: 3 }
		[2]: { team: 'Croatia', points: 1 }
		[3]: { team: 'Spain', points: 1 }
	]

## You will fail
* if you modify the original array in games.js
* if you use any framework / library 
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTkxMTMxNzA4MV19
-->