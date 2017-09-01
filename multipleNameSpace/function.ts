/// < reference path="interface.ts" />

/// < reference path="implementation.ts" />

// defining the player details

let player: PlayerNameSpace.Player = { name: "Ricky Pointing", jerseyNumber: 10, fieldingPosition: "squareLeg" }
PlayerNameSpace.playerDetail(player);

let player2: PlayerNameSpace.Player = { name: "Raina", jerseyNumber: 1, fieldingPosition: "Forward" }
PlayerNameSpace.playerDetail2(player2);