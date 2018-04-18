const team = {
  _players: [
    {
      firstName: "Kobe",
      lastName: "Bryant",
      age: "35"
    },

    {
      firstName: "Shaquille",
      lastName: "O'Niel",
      age: "32"
    },

    {
      firstName: "Mark",
      lastName: "Madsen",
      age: "30"
    }
  ],
  _games: [
    { opponent: "Clippers", teamPoints: 85, opponentPoints: 73 },
    { opponent: "Spurs", teamPoints: 81, opponentPoints: 83 },
    { opponent: "Worriers", teamPoints: 92, opponentPoints: 112 },
    { opponent: "Celtics", teamPoints: 70, opponentPoints: 62 }
  ],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);
  },

  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    this.games.push(game);
  }
};

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);
console.log(team.players);

team.addGame("Rockets", 124, 98);
team.addGame("Suns", 104, 89);
team.addGame("Mavericks", 94, 98);
console.log(team.games);
