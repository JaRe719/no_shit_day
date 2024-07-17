import React from "react";
import Button from "../../components/Button/Button";
import "./GameOver.scss";
import { useNavigate } from "react-router-dom";

const GameOver = ({setLives, setScore, score}) => {

  let navigate = useNavigate();
  const redirect = ()=>{
      navigate("/game")
   
  };
  const restart = ()=>{
    setLives(3);
    setScore(0)
    redirect();
  }

  return (
    <section id="gameOver">
      <div className="textBox">
        <h1>Shit happens</h1>
        <h2>Das war wohl ein Schuss in den Porzellanofen!</h2>
        <p>Du hattest <span>{score}</span> No-Shit-Days.</p>
      </div>
      <Button text="Nochmal versuchen?" action={restart}/>
    </section>
  );
};

export default GameOver;
