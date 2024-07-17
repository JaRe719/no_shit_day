import React from "react";
import Button from "../../components/Button/Button";
import "./Home.scss";
import shitty from "../../assets/img/shitty.png";

const Home = () => {
  return (
    <section>
      <div className="textBox">
        <h1>No-Shit-Day</h1>
        <h2>Das Laktose-Quiz</h2>
      </div>
      <div className="imgBox">
        <img src={shitty} alt="poop" />
      </div>
      <Button />
    </section>
  );
};

export default Home;
