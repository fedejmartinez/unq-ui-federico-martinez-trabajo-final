import React, { useEffect, useState } from "react";
import {Modal, ModalHeader, ModalBody} from 'reactstrap';
import Scripts from "./Scripts";
import './Main.css'
import SelectPlayer from './images/SelectPlayer.png';
import UnknownPlayer from './images/UnknownPlayer.jpg';
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

    const players = [
        Scripts.getPlayer(1, "Rock", Rock, RockPlay),
        Scripts.getPlayer(2, "Paper", Paper, PaperPlay),
        Scripts.getPlayer(3, "Scissors", Scissors, ScissorsPlay),
        Scripts.getPlayer(4, "Lizard", Lizard, LizardPlay),
        Scripts.getPlayer(5, "Spock", Spock, SpockPlay)
    ]
    const [selection1, setSelection1] = useState({
        number: 0,
        name: "",
        image: SelectPlayer,
    })
    const [selection2, setSelection2] = useState({
        number: 0,
        name: "",
        image: UnknownPlayer,
    })
    const [playerModalState, setPlayerModalState] = useState(false);
    const showSelectionPlayer = () => {
        setPlayerModalState(!playerModalState);
    }

    const selectionPlayer = (p, playerNumber) => {
        selection(p, playerNumber);
        showSelectionPlayer()
    }

    const selection = (p, playerNumber) => {
        const player = players.find(p => p.number === playerNumber);
        if(p === 1){
            setSelection1({
                number: player.number,
                name: player.name,
                image: player.playPicture
            });
        }
        else {
            setSelection2({
                number: player.number,
                name: player.name,
                image: player.playPicture
            });
        }
    }

    const getRandom = (min, max) => {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }

    const playVsCpu = () => {
        //Se cambia el personaje en forma random cada 100 ms.
        let intervalID = setInterval(changePlayer, 100)

        //El personaje deja de cambiar luego de un tiempo random que va entre 1 y 5 segundos.
        setTimeout(() => finishCPUSelection(intervalID), getRandom(1000, 5000))
    }

    const finishCPUSelection = (intervalID) =>{
        clearInterval(intervalID)
    }

    const changePlayer = (countDown) => {
        selection(2, getRandom(1, 5));
    }

    useEffect(() => {
    }, [])

    return(
        <>
            <button id="SelectPlayerBtn" type="button" class="btn btn-primary" onClick={() => showSelectionPlayer()}>
                Select player
            </button>
            <img id={`P1P${selection1.number}`} className="playerPlayPicture" src={selection1.image}/>
            <img id={`P2P${selection2.number}`} className="playerPlayPicture" src={selection2.image}/>
            {(selection1.image === SelectPlayer || selection2.image === SelectPlayer) && 
            (<button id="PlayBtn" type="button" class="btn btn-primary" disabled>
                Play
            </button>)}
            {!(selection1.image === SelectPlayer || selection2.image === SelectPlayer) && 
            (<button id="PlayBtn" type="button" class="btn btn-primary" onClick={() => playVsCpu()}>
                Play
            </button>)}
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
                                <img id={`Player${player.number}`} 
                                     src={player.profilePicture} 
                                     name="player" 
                                     className="playerPicture" 
                                     alt={player.name}
                                     onClick={() => selectionPlayer(1, player.number)} />
                            </span>
                        )
                    })}
                </ModalBody>
            </Modal>
        </>
    )

}

export default Main;