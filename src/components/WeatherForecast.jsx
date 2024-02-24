import React from 'react';
import './WeatherForecast.css';

import ClearSkyDay from '../assets/images/01d.png';
import ClearSkyNight from '../assets/images/01n.png';
import FewCloudsDay from '../assets/images/02d.png';
import FewCloudsNight from '../assets/images/02n.png';
import scatteredcloudsDay from '../assets/images/03d.png';
import scatteredcloudsNight from '../assets/images/03n.png';
import brokencloudsDay from '../assets/images/04d.png';
import brokencloudsNight from '../assets/images/04n.png';

import showerrainDay from '../assets/images/09d.png';
import showerrainNight from '../assets/images/09n.png';

import rainDay from '../assets/images/10d.png';
import rainNight from '../assets/images/10n.png';

import thunderstormDay from '../assets/images/11d.png';
import thunderstormNight from '../assets/images/11n.png';

import snowDay from '../assets/images/13d.png';
import snowNight from '../assets/images/13n.png';

import mistDay from '../assets/images/50d.png';
import mistNight from '../assets/images/50n.png';

const WeatherForecast = ({ weatherData }) => {
  const { daily } = weatherData;

  const getWeatherIconUrl = (iconCode) => {
    switch (iconCode) {
      case '01d':
        return ClearSkyDay;
      case '01n':
        return ClearSkyNight;
      case '02d':
        return FewCloudsDay;
      case '02n':
        return FewCloudsNight;
      case '03d':
        return scatteredcloudsDay;
      case '03n':
        return scatteredcloudsNight;
      case '04d':
        return brokencloudsDay;
      case '04n':
        return brokencloudsNight;
      case '09d':
        return showerrainDay;
      case '09n':
        return showerrainNight;
      case '10d':
        return rainDay;
      case '10n':
        return rainNight;
      case '11d':
        return thunderstormDay;
      case '11n':
        return thunderstormNight;
      case '13d':
        return snowDay;
      case '13n':
        return snowNight;
      case '50d':
        return mistDay;
      case '50n':
        return mistNight;
      default:
        return ''; 
    }
  };
  
  return (
    <div className="weather-forecast" style={{ paddingTop:'30px'}}>
      {daily.slice(1).map((day, index) => (
        <div key={index} className="weather-forecast-item">
          <div className="day">{new Date(day.dt * 1000).toLocaleDateString('en', { weekday: 'short' })}</div>
          <img src={getWeatherIconUrl(day.weather[0].icon)} alt="weather icon" className="w-icon" style={{ width:'30px'}} />
          <div className="description" style={{fontWeight:'bold',fontSize:'10px'}}>{day.weather[0].description}</div>
          <div className="temp">Night - {day.temp.night}&#176;C</div>
          <div className="temp">Day - {day.temp.day}&#176;C</div>
        </div>
      ))}
    </div>
  );
};

export default WeatherForecast;
