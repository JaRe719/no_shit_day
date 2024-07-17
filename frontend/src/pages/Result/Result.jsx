import React, { useEffect, useState } from "react";
import "./Result.scss";
import noCow from "../../assets/img/noCow.png";
import right from "../../assets/img/right.png";
import toilet from "../../assets/img/toiletWithPoop.png";
import cow from "../../assets/img/cow.png";
import Button from "../../components/Button/Button";
import { result } from "lodash";

const Result = (props) => {
  const [result, setResult] = useState("");

  useEffect(() => {
    setResult(props.result);
  }, [props]);

  return (
    <section className={result}>
      {result === "win" ? (
        <>
          <div className="textBox">
            <h1>Das war richtig</h1>
            <h2>du ersparst dir einen Shit-Day!</h2>
          </div>
          <div className="imageBoxResult">
            <div className="imageInBoxResult">
              <img src={noCow} alt="no Cow" />
            </div>
            <div className="imageInBoxResult">
              <img src={right} alt="right" />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="textBox">
            <h1>Das war leider nicht richtig!</h1>
            <h2>Ups, schon wieder eine Klopapierrolle verbraucht!</h2>
          </div>
          <div className="imageBoxResult">
            <div className="imageInBoxResult">
              <img src={cow} alt="cow" />
            </div>
            <div className="imageInBoxResult">
              <img src={toilet} alt="toilet with poop" />
            </div>
          </div>
        </>
      )}
      <Button />
    </section>
  );
};

export default Result;
