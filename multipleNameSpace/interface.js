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
