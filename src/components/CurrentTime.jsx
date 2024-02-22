import React, { useState, useEffect } from 'react';
import './CurrentTime.css';
const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const time = new Date();
      const hours = time.getHours();
      const minutes = time.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = hours % 12 || 12;
      setCurrentTime(`${formattedHours}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`);
    };

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="time">
      {currentTime}
    </div>
  );
};

export default CurrentTime;
