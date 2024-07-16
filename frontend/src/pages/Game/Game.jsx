import React, { useEffect, useState } from 'react';
import "./Game.scss";

const Game = ({ setResult, setLives, lives, productsWithMilk, productsWithoutMilk }) => {

  console.log("productsWithMilk: ", productsWithMilk);
  console.log("productsWithoutMilk: ", productsWithoutMilk);

  const [gameOptions, setGameOptions] = useState([]);

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

  console.log(gameOptions);

  return (
    <div>
      Hier wird gespielt

      {gameOptions.map((option, index) => (
        <p key={index}>{option.product_name}</p>
      ))}
    </div>
  );
}

export default Game;
