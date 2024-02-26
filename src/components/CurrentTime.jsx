import React, { useState, useEffect } from 'react';
import './CurrentTime.css';
import { FaLocationDot } from "react-icons/fa6";

const CurrentTime = ({ city }) => {
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const time = new Date();
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const dayName = days[time.getDay()];
      const hours = time.getHours();
      const minutes = time.getMinutes();
      const formattedHours = hours < 10 ? '0' + hours : hours;
      const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
      setCurrentDateTime(`${dayName} ${formattedHours}:${formattedMinutes}`);
    };

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="time">
      {currentDateTime} <span><FaLocationDot />{city}</span>
    </div>
  );
};

export default CurrentTime;
