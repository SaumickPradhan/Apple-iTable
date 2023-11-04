import React, { useState, useEffect } from 'react';

function Middle({ onClose }) {
  const [workTimeInSeconds, setWorkTimeInSeconds] = useState(1500); // 25 minutes in seconds
  const [breakTimeInSeconds, setBreakTimeInSeconds] = useState(300); // 5 minutes in seconds
  const [timeInSeconds, setTimeInSeconds] = useState(workTimeInSeconds);
  const [seconds, setSeconds] = useState(timeInSeconds % 60);
  const [minutes, setMinutes] = useState(Math.floor((timeInSeconds / 60) % 60));
  const [countdownInterval, setCountdownInterval] = useState(null);
  const [isWorking, setIsWorking] = useState(true); // Track if it's working or break time

  const startTimer = () => {
    if (!countdownInterval && timeInSeconds > 0) {
      setCountdownInterval(
        setInterval(() => {
          if (seconds === 0 && minutes === 0) {
            clearInterval(countdownInterval);
            if (isWorking) {
              setIsWorking(false); // Switch to break time
              setTimeInSeconds(breakTimeInSeconds);
            } else {
              setIsWorking(true); // Switch to work time
              setTimeInSeconds(workTimeInSeconds);
            }
          } else {
            if (seconds === 0) {
              if (minutes > 0) {
                setMinutes((prevMinutes) => prevMinutes - 1);
                setSeconds(59);
              } else {
                setMinutes(59);
                setSeconds(59);
              }
            } else {
              setSeconds((prevSeconds) => prevSeconds - 1);
            }
          }
        }, 1000)
      );
    }
  };

  useEffect(() => {
    return () => {
      clearInterval(countdownInterval);
    };
  }, [countdownInterval]);

  return (
    <div className="timer-popup">
      <h1>Pomodoro Timer</h1>
      <p>Work Time: 25 minutes</p>
      <p>Break Time: 5 minutes</p>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={onClose}>Close</button>
      <p>
        {isWorking ? 'Work Time:' : 'Break Time:'} {minutes}m {seconds > 0 ? `${seconds}s` : 'Time is up!'}
      </p>
    </div>
  );
}

export default Middle;
