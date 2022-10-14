import {Link} from 'react-router-dom';


function ChoosingSection({setPlayerChoice,options,setComputerChoice}) {
    
    function handleChoice(e) {
        setPlayerChoice(...options.filter(option => {return option.value === e.target.value}));
        setComputerChoice(options[(Math.floor(Math.random() * options.length))]);
    }

    return( 
        <section id="choosing-section">
            <Link to={`deliberation-screen`}>
                <button onClick={handleChoice} value="Scissors" className="option-button" id="scissors-button"></button>
            </Link>
            <Link to={`deliberation-screen`}>
                <button onClick={handleChoice} value="Paper" className="option-button" id="paper-button"></button>
            </Link>
            <Link to={`deliberation-screen`}>
                <button onClick={handleChoice} value="Rock" className="option-button" id="rock-button"></button>
            </Link>
            <Link to={`deliberation-screen`}>
                <button onClick={handleChoice} value="Lizard" className="option-button" id="lizard-button"></button>
            </Link>
            <Link to={`deliberation-screen`}>
                <button onClick={handleChoice} value="Spock" className="option-button" id="spock-button"></button>
            </Link>
        </section>
    )
}

export default ChoosingSection;