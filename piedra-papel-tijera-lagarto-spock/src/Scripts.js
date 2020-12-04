const getPlayer = (playerNumber, playerName, profilePicture, playPicture) => {
    return ({
        number: playerNumber,
        name: playerName,
        profilePicture: profilePicture,
        playPicture: playPicture
    })
}

export default {getPlayer}