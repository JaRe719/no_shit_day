import React from "react";
import Button from "../../components/Button/Button";
import "./GameOver.scss";
import { useNavigate, useParams } from "react-router-dom";

const GameOver = ({setLives}) => {



  let navigate = useNavigate();
  const redirect = ()=>{
      navigate("/game")
   
  };
  const restart = ()=>{
    setLives(3);
    redirect();
  }

  return (
    <section id="gameOver">
      <div className="textBox">
        <h1>Shit happens</h1>
        <h2>Das war wohl ein Schuss in den Porzellanofen!</h2>
      </div>
      <Button text="Nochmal versuchen?" action={restart}/>
    </section>
  );
};

export default GameOver;
