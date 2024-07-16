import React, { useEffect, useState } from 'react';
import "./Result.scss";

const Result = (props) => {

  const [result, setResult] = useState("")

  useEffect(()=>{
    setResult(props.result)
  },[props])

  return (
    <section className={result}>
      Hier entsteht bald das Ergebnis der Antwort
    </section>
  )
}

export default Result
