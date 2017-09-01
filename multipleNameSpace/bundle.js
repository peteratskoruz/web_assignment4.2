/**export namespace and interface and function**/
//defining namespace
var PlayerNameSpace;
(function (PlayerNameSpace) {
    //defining interface
    //defining class function
    function playerDetail(player) {
        console.log(" The player details are : PlayerName " + player.name + " , \n     JerseyNumber " + player.jerseyNumber + " and the fieldingPosition is " + player.fieldingPosition);
    }
    PlayerNameSpace.playerDetail = playerDetail;
})(PlayerNameSpace || (PlayerNameSpace = {}));


/// < reference path="interface.ts" />
//defining namespace
var PlayerNameSpace;
(function (PlayerNameSpace) {
    function playerDetail2(player) {
        console.log(" The player details are : PlayerName " + player.name + " , \n     JerseyNumber " + player.jerseyNumber + " and the fieldingPosition is " + player.fieldingPosition);
    }
    PlayerNameSpace.playerDetail2 = playerDetail2;
})(PlayerNameSpace || (PlayerNameSpace = {}));


/// < reference path="interface.ts" />
/// < reference path="implementation.ts" />
// defining the player details
var player = { name: "Ricky Pointing", jerseyNumber: 10, fieldingPosition: "squareLeg" };
PlayerNameSpace.playerDetail(player);
var player2 = { name: "Raina", jerseyNumber: 1, fieldingPosition: "Forward" };
PlayerNameSpace.playerDetail2(player2);
