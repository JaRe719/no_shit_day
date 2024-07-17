import React, { useState } from 'react';
import "./ChoicesGrid.scss";
import Toiletpaper from "../../../assets/images/toiletpaper.png";
import emptyToiletpaper from "../../../assets/img/emptyToiletpaper.png";
import ChoicesCard from "../ChoiceCard/ChoiceCard";
import Button from "../../Button/Button";
import { useNavigate } from 'react-router-dom';

const ChoicesGrid = ({gameOptions, playersChoice, setPlayersChoice, lives, setLives, productsWithMilk, setResult, score, setScore }) => {

  const [selectedOption, setSelectedOption] = useState(null);
  const [errorMessage, setErrorMessage] = useState(false);
  


  const handleChoiceSelection = (option) => {
    setSelectedOption(option);
    setPlayersChoice(option);
  };
  
  let navigate = useNavigate();
  const redirect = ()=>{
    if(lives > 0){
      navigate("/result")
    } else {
      navigate("/gameover")
    }
  };

  const handleAnswerCheck = () => {
    if(productsWithMilk.includes(playersChoice)){
      setResult("loose");
      setLives(lives-1);
      redirect();
    } else if (!productsWithMilk.includes(playersChoice) && playersChoice != null){
      setResult("win");
      setScore(prevScore => prevScore+1);
      console.log(score)
      redirect();
    } else {
      setErrorMessage(true);
    }
  };
  
  
  return (
    <section className='choicesGrid'>
        <div className='headingLivesWrapper'>
        <div className='heading'>
          <h2>Das Laktose-Quiz</h2>
          <h2>Wähle das Produkt OHNE Laktose!</h2>
        </div>
        <div className='livesContainer'>
          <p>Dein aktueller Score: {score}</p>
          <p>Deine verbliebenen Leben:</p>
          {(lives === 3) ? 
            <div className='lives'>
              <img src={Toiletpaper} alt='Toiletpaper roll' />
              <img src={Toiletpaper} alt='Toiletpaper roll' />
              <img src={Toiletpaper} alt='Toiletpaper roll' />
            </div>
            : (lives === 2) ? 
            <div className='lives'>
              <img src={Toiletpaper} alt='Toiletpaper roll' />
              <img src={Toiletpaper} alt='Toiletpaper roll' />
            </div>
            : (lives === 1) ?
            <div className='lives'>
              <img src={Toiletpaper} alt='Toiletpaper roll' />
            </div>
            :<div className='lives'>
              <img src={emptyToiletpaper} alt='Empty toiletpaper roll' />
            </div>
            }
        </div>
        </div>
        <div className='options'>
          {gameOptions.map((option, index)=>{
            return(
          <ChoicesCard 
          key={index}
          option={option}
          index={index}
          setPlayersChoice={handleChoiceSelection}
          isSelected={selectedOption === option}
          setErrormessage={setErrorMessage}
        />
        )})}
        </div>
        {errorMessage ? <p className='errorMsg'>Bitte wähle eine Antwortoption!</p> :<></>}
        <Button text="Überprüfen" action={handleAnswerCheck}/>
      
    </section>
  )
}

export default ChoicesGrid;
