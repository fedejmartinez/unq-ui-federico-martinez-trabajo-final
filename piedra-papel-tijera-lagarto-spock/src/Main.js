import React, { useEffect, useState } from "react";
import {Modal, ModalHeader, ModalBody} from 'reactstrap';
import Scripts from "./Scripts";
import Navbar from "./Navbar";
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

    //Estado.
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
    const [counters, setCounter] = useState({
        matchsVsCpu: 0,
        drawsVsCpu: 0,
        player1VsCpu: 0,
        cpu: 0,
        multiplayerMatchs: 0,
        multiplayerDraws: 0, 
        player1Multiplayer: 0,
        player2: 0,
    })
    const [select, setSelect] = useState(0);
    const [playerModalState, setPlayerModalState] = useState(false);
    const [multiplayer, setMultiplayer] = useState(false);

    //Funciones.
    const selectMultiplayer = () => {
        setMultiplayer(!multiplayer)
    }

    const showSelectionPlayer = (player) => {
        setSelect(player);
        setPlayerModalState(!playerModalState);
    }

    const selectionPlayer = (playerNumber) => {
        selection(playerNumber);
        showSelectionPlayer()
    }

    const selection = (playerNumber) => {
        const player = players.find(p => p.number === playerNumber);
        if(select === 1){
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

    const play = () =>{
        if(multiplayer){

        }
        else{
            playVsCpu();
        }
    }

    const playVsCpu = () => {
        //Se cambia el personaje en forma random cada 100 ms.
        let intervalID = setInterval(changePlayer, 100)

        //El personaje deja de cambiar luego de un tiempo random que va entre 1 y 5 segundos.
        setTimeout(() => finishCPUSelection(intervalID), getRandom(1000, 5000))
    }

    const finishCPUSelection = (intervalID) =>{
        clearInterval(intervalID);
        setCounter({
            ...counters,
            matchsVsCpu: counters.matchsVsCpu + 1
        })
    }

    const changePlayer = () => {
        selection(getRandom(1, 5));
    }

    const finishMatch = () => {
        if(selection1.number !== 0 && selection2.number !== 0){
            if(multiplayer){
                switch(Scripts.getWinner(selection1.number, selection2.number)){
                    case 0:
                        setCounter({
                            ...counters,
                            multiplayerDraws: counters.multiplayerDraws + 1
                        })
                        break;
                    case 1:
                        setCounter({
                            ...counters,
                            player1Multiplayer: counters.player1Multiplayer + 1
                        })
                        break;
                    case 2:
                        setCounter({
                            ...counters,
                            player2: counters.player2 + 1
                        })
                        break;
                }
            }
            else{
                switch(Scripts.getWinner(selection1.number, selection2.number)){
                    case 0:
                        setCounter({
                            ...counters,
                            drawsVsCpu: counters.drawsVsCpu + 1
                        })
                        break;
                    case 1:
                        setCounter({
                            ...counters,
                            player1VsCpu: counters.player1VsCpu + 1
                        })
                        break;
                    case 2:
                        setCounter({
                            ...counters,
                            cpu: counters.cpu + 1
                        })
                        break;
                }
            }
        }
    }

    useEffect(() => {
        finishMatch();
    }, [counters.matchsVsCpu, counters.multiplayerMatchs])

    //Render.
    return(
        <>
            <header>
                <Navbar />
            </header>
            <button id="MultiplayerBtn" type="button" class="btn btn-primary" onClick={() => selectMultiplayer()}>
                {multiplayer ? 'Vs CPU' : 'Multiplayer'}
            </button>
            {multiplayer ?
            (<span>
                <span>{`Matchs: ${counters.multiplayerMatchs}`}</span>
                <span>{`Player 1: ${counters.player1Multiplayer}`}</span>
                <span>{`Draws: ${counters.multiplayerDraws}`}</span>
                <span>{`Player 2: ${counters.player2}`}</span>
            </span>) :
            (<span>
                <span>{`Matchs: ${counters.matchsVsCpu}`}</span>
                <span>{`Player 1: ${counters.player1VsCpu}`}</span>
                <span>{`Draws: ${counters.drawsVsCpu}`}</span>
                <span>{`CPU: ${counters.cpu}`}</span>
            </span>)
            }
            <div id="Main">
                <div id="PlayersNameCtx">
                    <span id="Player1Name" className="playerName">{selection1.name}</span>
                    <span id="Player2Name" className="playerName">{selection2.name}</span>
                </div>
                <div>
                    <img id={`P1P${selection1.number}`} className="playerPlayPicture" src={selection1.image}/>
                    <span id="Vs">VS</span>
                    <img id={`P2P${selection2.number}`} className="playerPlayPicture" src={selection2.image}/>
                </div>
                <div>
                    <span>
                        <button id="SelectCharacter1Btn" type="button" class="btn btn-primary" onClick={() => showSelectionPlayer(1)}>
                            Select player
                        </button>
                    </span>
                    <span>
                        {(selection1.image === SelectPlayer || selection2.image === SelectPlayer) ?
                        (<button id="PlayBtn" type="button" class="btn btn-primary" disabled>
                            Play
                        </button>) :
                        (<button id="PlayBtn" type="button" class="btn btn-primary" onClick={() => play()}>
                            Play
                        </button>)}
                    </span>
                    { multiplayer &&
                    <span>
                        <button id="SelectCharacter2Btn" type="button" class="btn btn-primary" onClick={() => showSelectionPlayer(2)}>
                            Select player
                        </button>
                    </span>
                    }
                </div>
                <Modal id="PlayersModal" isOpen={playerModalState} toggle={() => showSelectionPlayer(0)}>
                    <ModalHeader>
                            Select your player
                            <span>
                                <button id="ClosePlayersButton" type="button" class="close" aria-hidden="true" onClick={() => showSelectionPlayer(0)}>x</button>
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
                                        onClick={() => selectionPlayer(player.number)} />
                                </span>
                            )
                        })}
                    </ModalBody>
                </Modal>
            </div>
        </>
    )

}

export default Main;