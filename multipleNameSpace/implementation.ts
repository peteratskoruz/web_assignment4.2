/// < reference path="interface.ts" />

//defining namespace

namespace PlayerNameSpace {

    export function playerDetail2(player: PlayerNameSpace.Player) {
        console.log(` The player details are : PlayerName ${player.name} , 
     JerseyNumber ${player.jerseyNumber} and the fieldingPosition is ${player.fieldingPosition}`);
    }

}
