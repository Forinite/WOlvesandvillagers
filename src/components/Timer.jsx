import React, { useState, useEffect } from 'react';

function CircularGameTimer() {
  const initialTime = 30;
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime > 0) return prevTime - 1;
        clearInterval(interval);
        return 0;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const progress = (time / initialTime) * circumference;

  return (
    <div style={{ position: 'relative', width: '100px', height: '100px' }}>
      <svg width="100" height="100" style={{ transform: 'rotate(-90deg)' }}>
        <circle cx="50" cy="50" r={radius} fill="none" stroke="#ddd" strokeWidth="10" />
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="#4caf50"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 1s linear' }}
        />
      </svg>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '20px',
        fontWeight: 'bold'
      }}>
        {time}s
      </div>
    </div>
  );
}

export default CircularGameTimer;
