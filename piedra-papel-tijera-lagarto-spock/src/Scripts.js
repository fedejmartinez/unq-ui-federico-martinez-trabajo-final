const getPlayer = (playerNumber, playerName, profilePicture, playPicture) => {
    return ({
        number: playerNumber,
        name: playerName,
        profilePicture: profilePicture,
        playPicture: playPicture
    })
}

const getWinner = (player1character, player2character) =>{
    let result = 0;
    switch(player1character){
        case 1: //Piedra.
            if(player2character === 3 ||
               player2character === 4){
                result = 1;
            }
            if(player2character === 2 ||
               player2character === 5){
                result = 2;
            }
            break;
        case 2: //Papel.
            if(player2character === 1 ||
               player2character === 5){
                result = 1;
            }
            if(player2character === 3 ||
               player2character === 4){
                result = 2;
            }
            break;
        case 3: //Tijera.
            if(player2character === 2 ||
               player2character === 4){
                result = 1;
            }
            if(player2character === 1 ||
               player2character === 5){
                result = 2;
            }
            break;
        case 4: //Lagarto.
            if(player2character === 2 ||
               player2character === 5){
                result = 1;
            }
            if(player2character === 1 ||
               player2character === 3){
                result = 2;
            }
            break;
        case 5: //Spock.
            if(player2character === 1 ||
               player2character === 3){
                result = 1;
            }
            if(player2character === 2 ||
               player2character === 4){
                result = 2;
            }
            break;
    }
    return result;
}

export default {getPlayer, getWinner}