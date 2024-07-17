import React from 'react';
import "./ChoiceCard.scss";
import noPic from "../../../assets/img/noPic.png"

const ChoiceCard = ({option, index, setPlayersChoice, isSelected, setErrormessage}) => {
  
  

  const clickHandler = (option) => {
    setPlayersChoice(option);
    setErrormessage(false);
  }
  
  return (
    
    <div onClick={()=> clickHandler(option)} className={isSelected? "chosenCard" : "choiceCard"}>
      <section>
        <img key={index} src={option.image_url && option.image_url !=="" ? option.image_url : noPic} alt={option.image_url && option.image_url !=="" ?option.product_name : "No product-picture available - placeholder"} />
      </section>
      <section>
       <p>Produkt-Name: {option.product_name}</p>
        <p>Marke: {option.brands}</p>
      </section>
    </div>
  
  )
}

export default ChoiceCard;
