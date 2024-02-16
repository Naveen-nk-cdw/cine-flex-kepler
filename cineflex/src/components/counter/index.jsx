import React, { useEffect, useState } from "react";
/**
 * 
 * @param initialMinutes gets the counters starting minute
 * @param intiialSeconds gets the counters starting seconds
 * @param onTimeEnd callback on completion of counter
 * @param className for styles
 * @param prefix counters prefix label
 * @returns 
 */
const Counter = ({
  initialMinutes = 0,
  initialSeconds = 25,
  onTimeEnd = null,
  className,
  prefix = null,
  isPaused = false,
}) => {

  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  //to set the counter on change of initial seconds
  useEffect(() => {
    setSeconds(initialSeconds);
  }, [initialSeconds]);

  //use effect that controls the timer
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        if (minutes === 0 && seconds === 0) {
          clearInterval(interval);
          if (onTimeEnd) {
            onTimeEnd();
            return () => clearInterval(interval);
          }
        } else {
          if (seconds === 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          } else {
            setSeconds(seconds - 1);
          }
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [minutes, seconds, onTimeEnd, isPaused]);
  
  return (
    <div className={className}>
      {prefix + String(minutes).padStart(2, "0")}:
      {String(seconds).padStart(2, "0")}
    </div>
  );
};

export default Counter;
