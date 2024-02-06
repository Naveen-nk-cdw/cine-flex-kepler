import React, { useEffect, useState } from 'react'

const Counter = ({ initialMinutes = 0, initialSeconds = 25, onTimeEnd = null, className }) => {
    const [minutes, setMinutes] = useState(initialMinutes);
    const [seconds, setSeconds] = useState(initialSeconds);
    useEffect(() => {
        const interval = setInterval(() => {
          if (minutes === 0 && seconds === 0) {
            clearInterval(interval);
            if (onTimeEnd) {
              onTimeEnd();
            }
          } else {
            if (seconds === 0) {
              setSeconds(59);
              setMinutes((prevMinutes) => prevMinutes - 1);
            } else {
              setSeconds((prevSeconds) => prevSeconds - 1);
            }
          }
        }, 1000);
        return () => clearInterval(interval);
    }, [minutes, seconds, onTimeEnd]);
    
    return (
        <div className={className}>
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </div>
    )
}

export default Counter