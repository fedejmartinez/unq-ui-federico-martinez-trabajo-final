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

const getMatchDescription = (player1character, player2character) => {
    let description = "Tie";
    if((player1character === 3 || player2character === 3) &&
       (player1character === 2 || player2character === 2)){
        description = "Scissors cuts Paper";
    }
    if((player1character === 2 || player2character === 2) &&
       (player1character === 1 || player2character === 1)){
        description = "Paper covers Rock";
    }
    if((player1character === 1 || player2character === 1) &&
       (player1character === 4 || player2character === 4)){
        description = "Rock crushes Lizard";
    }
    if((player1character === 4 || player2character === 4) &&
       (player1character === 5 || player2character === 5)){
        description = "Lizard poisons Spock";
    }
    if((player1character === 3 || player2character === 3) &&
       (player1character === 5 || player2character === 5)){
        description = "Spock smashes Scissors";
    }
    if((player1character === 3 || player2character === 3) &&
       (player1character === 4 || player2character === 4)){
        description = "Scissors decapitates Lizard";
    }
    if((player1character === 2 || player2character === 2) &&
       (player1character === 4 || player2character === 4)){
        description = "Lizard eats Paper";
    }
    if((player1character === 2 || player2character === 2) &&
       (player1character === 5 || player2character === 5)){
        description = "Paper disproves Spock";
    }
    if((player1character === 1 || player2character === 1) &&
       (player1character === 5 || player2character === 5)){
        description = "Spock vaporizes Rock";
    }
    if((player1character === 1 || player2character === 1) &&
       (player1character === 3 || player2character === 3)){
        description = "Rock crushes Scissors";
    }
    return description;
}

export default {getPlayer, getWinner, getMatchDescription}