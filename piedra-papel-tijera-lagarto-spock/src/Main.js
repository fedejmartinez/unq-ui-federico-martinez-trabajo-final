import React, { useEffect, useState } from "react";
import {Modal, ModalHeader, ModalBody} from 'reactstrap';
import Scripts from "./Scripts";
import './Main.css'
import Rock from './images/Rock.png';
import RockPlay from './images/RockPlay.png';
import Paper from './images/Paper.png';
import PaperPlay from './images/PaperPlay.png';
import Scissors from './images/Scissors.png';
import ScissorsPlay from './images/ScissorsPlay.png';
import Lizard from './images/Lizard.png';
import LizardPlay from './images/LizardPlay.png';
import Spock from './images/Spock.png';
import SpockPlay from './images/SpockPlay.png';


const Main = () => {

    const [userPlayer, setUserPlayer] = useState(0);
    const [players, setPlayers] = useState([])
    const [playerModalState, setPlayerModalState] = useState(false);
    const showSelectionPlayer = () => {
        setPlayerModalState(!playerModalState);
    }

    useEffect(() => {
        players.push(
            Scripts.getPlayer(1, "Rock", Rock, RockPlay),
            Scripts.getPlayer(2, "Paper", Paper, PaperPlay),
            Scripts.getPlayer(3, "Scissors", Scissors, ScissorsPlay),
            Scripts.getPlayer(4, "Lizard", Lizard, LizardPlay),
            Scripts.getPlayer(5, "Spock", Spock, SpockPlay)
            )
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
                            <span>
                                <img id={`Player${player.number}`} src={player.profilePicture} name="player" className="playerPicture" alt={player.name} />
                            </span>
                        )
                    })}
                </ModalBody>
            </Modal>
        </>
    )

}

export default Main;