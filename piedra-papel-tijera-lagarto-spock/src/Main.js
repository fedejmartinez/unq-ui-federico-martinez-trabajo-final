import React, { useEffect, useState } from "react";
import {Modal, ModalHeader, ModalBody} from 'reactstrap';

const Main = () => {

    const [userPlayer, setUserPlayer] = useState(0);
    const [players, setPlayers] = useState([])
    const [spock, setSpock] = useState({
        number: 1,
        name: "Spock"
    })
    const [playerModalState, setPlayerModalState] = useState(false);
    const showSelectionPlayer = () => {
        setPlayerModalState(!playerModalState);
    }

    useEffect(() => {
        players.push(spock)
    },[])

    return(
        <>
            <button id="SelectPlayerBtn" type="button" class="btn btn-primary" onClick={() => showSelectionPlayer()}>
                Select player
            </button>
            <Modal id="PlayersModal" isOpen={playerModalState} toggle={() => showSelectionPlayer()}>
                <ModalHeader>
                        Select your player
                        <span>
                            <button id="ClosePlayersButton" type="button" class="close" aria-hidden="true" onClick={() => showSelectionPlayer()}>x</button>
                        </span>
                </ModalHeader>
                <ModalBody>
                    {players.map(player => {
                        return(
                            <div id={player.number} className="player">
                                <div>
                                    {/*<img src={follower.image} name="folProfile" className="pfp" alt={follower.id} onClick={() => goToOtherFollower(follower.id)} />*/}
                                    <span id= "PlayerName">{`${player.name}`}</span>
                                </div>
                            </div>
                        )
                    })}
                </ModalBody>
            </Modal>
        </>
    )

}

export default Main;