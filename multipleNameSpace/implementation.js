/// < reference path="interface.ts" />
//defining namespace
var PlayerNameSpace;
(function (PlayerNameSpace) {
    function playerDetail2(player) {
        console.log(" The player details are : PlayerName " + player.name + " , \n     JerseyNumber " + player.jerseyNumber + " and the fieldingPosition is " + player.fieldingPosition);
    }
    PlayerNameSpace.playerDetail2 = playerDetail2;
})(PlayerNameSpace || (PlayerNameSpace = {}));
