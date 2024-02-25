import React from 'react';
import './CurrentWeather.css';
import WeatherForecast from './WeatherForecast';
import CurrentTime from './CurrentTime';
import { WiHumidity } from "react-icons/wi";
import { WiSunrise } from "react-icons/wi";
import { TbSunset2 } from "react-icons/tb";
import { WiStrongWind } from "react-icons/wi";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCloud } from "react-icons/io";
import { MdTimeline } from "react-icons/md";
import { MdVisibility } from "react-icons/md";
import { GiMultiDirections } from "react-icons/gi";
import ClearSkyDay from '../assets/images/01d.png';
import ClearSkyNight from '../assets/images/01n.png';
import FewCloudsDay from '../assets/images/02d.png';
import FewCloudsNight from '../assets/images/02n.png';
import scatteredcloudsDay from '../assets/images/03d.png';
import scatteredcloudsNight from '../assets/images/03n.png';
import overcastcloudsDay from '../assets/images/04d.png';
import overcastcloudsNight from '../assets/images/04n.png';

import showerrainDay from '../assets/images/09d.png';
import showerrainNight from '../assets/images/09n.png';

import LightrainDay from '../assets/images/10d.png';
import LightrainNight from '../assets/images/10n.png';

import thunderstormDay from '../assets/images/11d.png';
import thunderstormNight from '../assets/images/11n.png';

import snowDay from '../assets/images/13d.png';
import snowNight from '../assets/images/13n.png';

import mistDay from '../assets/images/50d.png';
import mistNight from '../assets/images/50n.png';


const CurrentWeather = ({ weatherData, city }) => {
  const { current } = weatherData;
  const { humidity, pressure, sunrise, sunset, wind_speed, weather, temp } = current;
  const { description, icon } = weather[0];
console.log(icon);
console.log(description);
  
  const getWeatherIcon = (description) => {
    switch(description) {
      case 'clear sky':
        return icon.includes('d') ? ClearSkyDay : ClearSkyNight;
      case 'few clouds':
        return icon.includes('d') ? FewCloudsDay : FewCloudsNight;
      case 'scattered clouds':
        return icon.includes('d') ? scatteredcloudsDay : scatteredcloudsNight;
      case 'overcast clouds':
        return icon.includes('d') ? overcastcloudsDay : overcastcloudsNight;
      case 'shower rain':
        return icon.includes('d') ? showerrainDay : showerrainNight;
      case 'light rain':
        return icon.includes('d') ? LightrainDay : LightrainNight;
      case 'thunderstorm':
        return icon.includes('d') ? thunderstormDay : thunderstormNight;
      case 'snow':
        return icon.includes('d') ? snowDay : snowNight;
      case 'mist':
        return icon.includes('d') ? mistDay : mistNight;
      default:
        return ''; 
    }
  };
  

  return (
          
    <div className="wrapper">
    <div className="sidebar">
      <div>
      <CurrentTime />
      <div className="weather-icon">
        <img src={getWeatherIcon(description)} alt="Weather Icon"/>
        
        </div>
        <div className="condition-rain">
          <div className="condition">
            <i className="fas fa-cloud"></i>
            <p id="condition">{description}</p>
          </div>
        </div>
        <div className="temperature">
          <h1 id="temp">{temp}</h1>
          <span className="temp-unit">°C</span>
        </div>
        
        <div className="divider"></div>
        
      </div>
      <div className="location">
        <div className="location-icon">
          <i className="fas fa-map-marker-alt"></i>
        </div>
        <div className="location-text">
          <p id="location"><FaLocationDot /> {city}</p>
        </div>
      </div>
    </div>
    <div className="main">
    
      <div className="cards" id="weather-cards">
      <WeatherForecast weatherData={weatherData} />
      </div>
      <div className="highlights">
        <div className="cards">
          <div className="card2">
            <h4 className="card-heading">Sunset <TbSunset2 /></h4>
            <div className="content">
              <p className="uv-index">{new Date(sunset * 1000).toLocaleTimeString()}</p>
            </div>
          </div>
          <div className="card2">
            <h4 className="card-heading">Sunrise <WiSunrise /></h4>
            <div className="content">
              <p className="sun-rise">{new Date(sunrise * 1000).toLocaleTimeString()}</p>
            </div>
          </div>
          <div className="card2">
            <h4 className="card-heading">Humidity <WiHumidity /></h4>
            <div className="content">
              <p className="humidity">{humidity}%</p>
              
            </div>
          </div>
          <div className="card2">
            <h4 className="card-heading">Wind Status <WiStrongWind /></h4>
            <div className="content">
              <p className="wind-speed">{wind_speed} km/h</p>
              
            </div>
          </div>
        
          
          <div className="card2">
            <h4 className="card-heading">Cloud Cover <IoIosCloud /></h4>
            <div className="content">
              <p className="cloud-cover">{current.clouds}%</p>
            </div>
          </div>

          <div className="card2">
            <h4 className="card-heading">Pressure <MdTimeline/></h4>
            <div className="content">
              <p className="dew-point">{pressure} hPa</p>
            </div>
          </div>

          <div className="card2">
            <h4 className="card-heading">UV Index</h4>
            <div className="content">
              <p className="uv-index">{current.uvi}</p>
            </div>
          </div>

          <div className="card2">
            <h4 className="card-heading">Visibility <MdVisibility /></h4>
            <div className="content">
              <p className="visibility">{current.visibility} meters</p>
            </div>
          </div>

          <div className="card2">
            <h4 className="card-heading">Wind Direction <GiMultiDirections /></h4>
            <div className="content">
              <p className="wind-direction">{current.wind_deg}°</p>
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>
  );
};

export default CurrentWeather;
