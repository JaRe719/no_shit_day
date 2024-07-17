import React from 'react';
import "./ChoiceCard.scss";

const ChoiceCard = ({option, index, setPlayersChoice}) => {
  return (
    
              <div onClick={()=> setPlayersChoice(option)}>
                <section>
                  <img key={index} src={option.image_url} alt={option.product_name} />
                </section>
                <section>
                  <p>Produkt-Name: {option.product_name}</p>
                  <p>Marke: {option.brands}</p>
                </section>
              </div>
  
  )
}

export default ChoiceCard;
