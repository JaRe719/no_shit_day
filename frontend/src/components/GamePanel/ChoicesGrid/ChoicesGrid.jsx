import React from 'react';
import "./ChoicesGrid.scss";
import Toiletpaper from "../../../assets/images/toiletpaper.png";
import ChoicesCard from "../ChoiceCard/ChoiceCard";
import Button from "../../Button/Button";

const ChoicesGrid = ({gameOptions, playersChoice, setPlayersChoice, lives, setLives }) => {
  console.log("playersChoice: ", playersChoice)
  
  
  return (
    <section>
      <div>
        <div>
          <h2>Das Laktose-Quiz</h2>
          <h2>Wähle das Produkt OHNE Laktose!</h2>
        </div>
        <div>
          <p>Deine verbliebenen Leben:</p>
          {(lives === 3) ? 
            <div>
              <img src={Toiletpaper} alt='Toiletpaper roll' />
              <img src={Toiletpaper} alt='Toiletpaper roll' />
              <img src={Toiletpaper} alt='Toiletpaper roll' />
            </div>
            : (lives === 2) ? 
            <div>
              <img src={Toiletpaper} alt='Toiletpaper roll' />
              <img src={Toiletpaper} alt='Toiletpaper roll' />
            </div>
            : (lives === 1) ?
            <div>
              <img src={Toiletpaper} alt='Toiletpaper roll' />
            </div>
            :<div>
            </div>
            }
        </div>
        <div>
          {gameOptions.map((option, index)=>{
            return(
          <ChoicesCard option={option} index={index} setPlayersChoice={setPlayersChoice}/>
        )})}
        </div>
        <Button />
      </div>
    </section>
  )
}

export default ChoicesGrid;
