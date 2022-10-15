import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './DeliberationScreen.css';



function DeliberationScreen({playerChoice, computerChoice, setCurrentScore}) {
    const [result, setResult] = useState('');
    const won = computerChoice.isWeakAgainst.includes(playerChoice.value);
    const lost = playerChoice.isWeakAgainst.includes(computerChoice.value);
    
    

    useEffect(() => {
        setTimeout(() => {
            if(won) {
                setResult('YOU WON');
                setCurrentScore(prevScore => {
                    prevScore++;
                    localStorage.setItem('savedScore', JSON.stringify(prevScore))
                    return prevScore; 
                });
            }else if(lost) {
                setResult('YOU LOST');
                setCurrentScore(prevScore => {
                    if(prevScore > 0) {
                        prevScore--
                        localStorage.setItem('savedScore', JSON.stringify(prevScore))
                        return prevScore;
                    }else {
                        return 0;
                    }
                });
            }else {
                setResult('IT WAS A TIE');
            }
        }, 2500)
    }, [won, lost, setCurrentScore]); 



    function showButton(input) {
        return `${input.value.toLowerCase()}-button`
    }

       
    return(
        <section id="deliberation-section"> 
            <div className={`players-choice-div ${won ? 'won' : ''}`}>
                <p>YOU PICKED</p> 
                <button className="option-button" id={showButton(playerChoice)}></button>
                <div className="circular-background"></div>
            </div>
            <div className={`computers-choice-div ${lost ? 'won' : ''}`}>
                <p>THE HOUSE PICKED</p>
                <button className="option-button" id={showButton(computerChoice)}></button>
                <div className="circular-background"></div>
            </div>
            <div className="result-div">
                <h2>{result}</h2>
                <Link to={`/`}>
                    <button className="play-again-button">PLAY AGAIN</button>
                </Link>
            </div>
        </section> 
    )
}

export default DeliberationScreen;