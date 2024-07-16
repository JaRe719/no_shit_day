import React from "react";
import Button from "../../components/Button/Button";
import "./GameOver.scss";

const GameOver = () => {
  return (
    <section id="gameOver">
      <div className="textBox">
        <h1>Shit happens</h1>
        <h2>Das war wohl ein Schuss in den Porzellanofen!</h2>
      </div>
      <Button />
    </section>
  );
};

export default GameOver;
