import {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import Header from './Header';
import RulesModal from './RulesModal';
import ChoosingSection from './ChoosingSection';
import DeliberationScreen from './DeliberationScreen';
import './App.css';

function App() {
  const options = [{
    value: "Scissors",
    isWeakAgainst: ["Spock", "Rock"]
  },{
    value: "Paper",
    isWeakAgainst: ["Scissors", "Lizard"]
  },{
    value: "Rock",
    isWeakAgainst: ["Paper", "Spock"]
  },{
    value: "Lizard",
    isWeakAgainst: ["Rock", "Scissors"] 
  },{
    value: "Spock", 
    isWeakAgainst: ["Lizard", "Paper"]
}]
  const [currentScore, setCurrentScore] = useState(0);
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  

  function handleModal() {
    document.querySelector('dialog').classList.toggle('visible')
  }

  return (
    <main>
      <Header currentScore={currentScore}/>
      <Routes>
        <Route exact path="/" element={<ChoosingSection setPlayerChoice={setPlayerChoice} options={options} setComputerChoice={setComputerChoice}/>} />
        <Route path="deliberation-screen" element={playerChoice !== '' && <DeliberationScreen playerChoice={playerChoice} computerChoice={computerChoice} setCurrentScore={setCurrentScore}/>} />
      </Routes>
      <RulesModal handleModal={handleModal}/>
      <button className="open-modal-button" onClick={handleModal}>RULES</button>
    </main>
  );
}

export default App;
