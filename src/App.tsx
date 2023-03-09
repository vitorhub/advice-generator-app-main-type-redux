import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Dice from './images/icon-dice.png';
import LinhaDesk from './images/pattern-divider-desktop.svg'
import LinhaMobile from './images/pattern-divider-mobile.svg'

const App: React.FC = () => {
  const [estadoId, setEstadoId] = useState(0)
  const [estadoAdvice, setEstadoAdvice] = useState("None Advice")

  function buscaAdvice() {
    fetch(`https://api.adviceslip.com/advice`) // para fetch
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEstadoId(data.slip.id);
        setEstadoAdvice(data.slip.advice)
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className="App">
      <div className="container">
        <p className='adviceId'>Advice # {estadoId}</p>
        <p className='adviceName'>"{estadoAdvice}"</p>
        <img className='divider-desk' src={LinhaDesk} alt="linha" /><br/>
        <img className='divider-mobile' src={LinhaMobile} alt="linha" /><br/>
        <button className='botao' onClick={buscaAdvice}> <img className='dice' src={Dice} /> </button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
