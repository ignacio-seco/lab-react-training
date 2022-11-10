import { useState } from 'react';
import './Dice.css';
import dice0 from '../../assets/images/dice-empty.png';
import dice1 from '../../assets/images/dice1.png';
import dice2 from '../../assets/images/dice2.png';
import dice3 from '../../assets/images/dice3.png';
import dice4 from '../../assets/images/dice4.png';
import dice5 from '../../assets/images/dice5.png';
import dice6 from '../../assets/images/dice6.png';

function Dice() {
  let [dice, setDice] = useState(0);
  const diceArr = [dice0, dice1, dice2, dice3, dice4, dice5, dice6];
  function newNumber(){
    setDice(Math.floor(Math.random() * (7 - 1) + 1));
  };
  function blankDice(){setDice("0")}

  const rollDice = () => {
    blankDice();
    setTimeout(()=>{let myInterval = setInterval(newNumber,90);
    setTimeout(()=>clearInterval(myInterval),1000)},200)
    
  };
return <div>
    <img src={diceArr[dice]} alt="dice" className='dice' onClick={rollDice}/>
</div>
}

export default Dice