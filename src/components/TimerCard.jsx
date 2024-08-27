import React, { useState, useEffect } from 'react';

const TimerCard = ({ id, seconds, createdAt, onDelete }) => {
  const [remainingTime, setRemainingTime] = useState(seconds);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setRemainingTime(prev => {
          if (prev <= 0.01) {
            clearInterval(interval);
            onDelete(id);
            return 0;
          }
          return prev - 0.01;
        });
      }, 10);

      return () => clearInterval(interval);
    }
  }, [isPaused, id, onDelete]);

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className="timer-card">
      <p className='timer-sec'>{remainingTime.toFixed(2)}s</p>
      <p className='timer-created'>{createdAt}</p>
      <div className='buttons-div'>
        <button className='button-delete' onClick={() => onDelete(id)}>Delete</button>
        <button className='button' onClick={() => togglePause(id)}>{isPaused ? "Resume" : "Pause"}</button>
      </div>
    </div>
  );
};

export default TimerCard;
