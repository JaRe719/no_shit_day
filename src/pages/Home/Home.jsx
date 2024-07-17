import React from "react";
import Button from "../../components/Button/Button";
import "./Home.scss";
import shitty from "../../assets/img/shitty.png";
import { useNavigate } from "react-router-dom";

const Home = () => {

  let navigate = useNavigate();
  const redirect = ()=>{
      navigate("/game")
   
  };
  return (
    <section>
      <div className="textBox">
        <h1>No-Shit-Day</h1>
        <h2>Das Laktose-Quiz</h2>
      </div>
      <div className="imgBox">
        <img src={shitty} alt="poop" />
      </div>
      <Button text="Starte das Quiz!" action={redirect}/>
    </section>
  );
};

export default Home;
