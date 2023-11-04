import React, { useState, useEffect } from 'react';

function StandUpReminder({ onClose, person, ST }) {
  const [timeInSeconds, setTimeInSeconds] = useState(parseInt(ST, 10)); // Default time: 5 minutes
  const [seconds, setSeconds] = useState(timeInSeconds);
  const [countdownInterval, setCountdownInterval] = useState(null);

  const startTimer = () => {
    if (!countdownInterval && seconds > 0) {
      setCountdownInterval(
        setInterval(() => {
          if (seconds <= 0) {
            clearInterval(countdownInterval);
            onClose(); // Close the reminder popup
            window.alert('Time to stand up and take a break!'); // Display an alert message
          } else {
            setSeconds((prevSeconds) => prevSeconds - 1);
          }
        }, 1000)
      );
    }
  };

  const handleTimeInputChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue) && newValue >= 0) {
      setTimeInSeconds(newValue);
      setSeconds(newValue);
    }
  };

  useEffect(() => {
    return () => {
      clearInterval(countdownInterval);
    };
  }, [countdownInterval]);

  return (
    <div className="stand-up-reminder-popup">
      <h2>{person}'s Stand Up Reminder</h2>
      <label htmlFor="timer-input">Set Time (in minutes):</label>
      <input
        type="number"
        id="timer-input"
        min="0"
        value={timeInSeconds}
        onChange={handleTimeInputChange}
      />
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={onClose}>Close</button>
      <p>Time remaining: {seconds > 0 ? `${seconds} minutes` : 'Time is up!'}</p>
    </div>
  );
}

export default StandUpReminder;
