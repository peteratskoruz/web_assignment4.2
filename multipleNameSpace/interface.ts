/**export namespace and interface and function**/

//defining namespace

namespace PlayerNameSpace {

    //defining interface

    export interface Player {
        name: string;
        jerseyNumber: number;
        fieldingPosition: string;
    }

    //defining class function

    export function playerDetail(player: Player) {
        console.log(` The player details are : PlayerName ${player.name} , 
     JerseyNumber ${player.jerseyNumber} and the fieldingPosition is ${player.fieldingPosition}`);
    }
}