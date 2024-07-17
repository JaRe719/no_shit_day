import React, { useEffect, useState } from 'react';
import "./Game.scss";
import ChoicesGrid from "../../components/GamePanel/ChoicesGrid/ChoicesGrid";

const Game = ({ setResult, setLives, lives, productsWithMilk, productsWithoutMilk }) => {

  const [gameOptions, setGameOptions] = useState([]);
  const [playersChoice, setPlayersChoice] =useState(null);

  useEffect(() => {
    if (productsWithMilk.length > 0 && productsWithoutMilk.length > 0) {
      const options = [];

      const randomWithoutMilkIndex = Math.floor(Math.random() * productsWithoutMilk.length);
      options.push(productsWithoutMilk[randomWithoutMilkIndex]);

      for (let i = 0; i < 2; i++) {
        let isAdded = false;
        while (!isAdded) {
          const randomWithMilkIndex = Math.floor(Math.random() * productsWithMilk.length);
          const selectedProduct = productsWithMilk[randomWithMilkIndex];
          if (!options.includes(selectedProduct)) {
            options.push(selectedProduct);
            isAdded = true;
          }
        }
      }

      setGameOptions(options);
    }
  }, [productsWithMilk, productsWithoutMilk]);


  return (
    <div className='gamePage'>
      <ChoicesGrid gameOptions={gameOptions} playersChoice={playersChoice} setPlayersChoice={setPlayersChoice} lives={lives} setLives={setLives} productsWithMilk={productsWithMilk} setResult={setResult}/>
    </div>
  );
}

export default Game;
