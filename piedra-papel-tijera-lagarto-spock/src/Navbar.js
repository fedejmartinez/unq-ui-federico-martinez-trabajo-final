import './Navbar.css'
import Rock from './images/Rock.png';
import Paper from './images/Paper.png';
import Scissors from './images/Scissors.png';
import Lizard from './images/Lizard.png';
import Spock from './images/Spock.png';

const Navbar = () => {

    return(
        <div id="Navbar">
            <img id="Rock" className="characterPicture" src={Rock}/>
            <img id="Paper" className="characterPicture" src={Paper}/>
            <img id="Scissors" className="characterPicture" src={Scissors}/>
            <span>Welcome to rock, paper, scissors, lizard and spock!!</span>
            <img id="Lizard" className="characterPicture" src={Lizard}/>
            <img id="Spock" className="characterPicture" src={Spock}/>
        </div>
    )
}

export default Navbar;