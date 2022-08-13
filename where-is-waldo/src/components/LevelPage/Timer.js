import { useState, useEffect } from "react";
import { padNum } from "../../functions/format";

const Timer = () => {
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(50);

  const addSecond = () => {
    if (second === 59) {
      setMinute(minute + 1);
      setSecond(0);
    } else {
      setSecond(second + 1);
    }
  }

  useEffect(() => {
    setMinute(0);
    setSecond(0);
  }, [])

  useEffect(() => {
    setTimeout(addSecond, 1000);
    return () => {
      clearTimeout(addSecond);
    }
  });

  return (
    <div id='timer'>
      <h1>{padNum(minute, 1)}:{padNum(second, 1)}</h1>
    </div>
  )
}

export default Timer;