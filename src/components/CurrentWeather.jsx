import React from 'react';
import './CurrentWeather.css';
import WeatherForecast from './WeatherForecast';
import CurrentTime from './CurrentTime';
import { WiHumidity } from "react-icons/wi";
import { WiSunrise } from "react-icons/wi";
import { TbSunset2 } from "react-icons/tb";
import { WiStrongWind } from "react-icons/wi";

import { IoIosCloud } from "react-icons/io";
import { MdTimeline } from "react-icons/md";
import { MdVisibility } from "react-icons/md";
import { GiMultiDirections } from "react-icons/gi";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
    
    
  
    <div className="wrapper ">
      
    <div className="main">
    
    <Container className='head'>
    <Row>
     <Col md={5}> <CurrentTime city={city} /> </Col>
     <Col md={2}> </Col>
      <Col className="weather-icon" md={5}>
        <img src={getWeatherIcon(description)} alt="Weather Icon"/>
        <h1>{description}</h1>
        <h4 id="temp">{temp} °C</h4>
        </Col>
        </Row>
      </Container>
    
      
      
      <WeatherForecast weatherData={weatherData} />
     
      
      <Container className="highlights text-center">
        <Row className="cards" d-flex justify-content-center align-items-center>
        
          <Col className="card2"md={3}>
            <h4 className="card-heading">Sunset <TbSunset2 /></h4>
            <div className="content">
              <p className="uv-index">{new Date(sunset * 1000).toLocaleTimeString()}</p>
            </div>
          </Col>
          <Col className="card2"md={3}>
            <h4 className="card-heading">Sunrise <WiSunrise /></h4>
            <div className="content">
              <p className="sun-rise">{new Date(sunrise * 1000).toLocaleTimeString()}</p>
            </div>
          </Col>
          <Col className="card2"md={3}>
            <h4 className="card-heading">Humidity <WiHumidity /></h4>
            <div className="content">
              <p className="humidity">{humidity}%</p>
              
            </div>
          </Col>
          <Col className="card2"md={3}>
            <h4 className="card-heading">Wind Status <WiStrongWind /></h4>
            <div className="content">
              <p className="wind-speed">{wind_speed} km/h</p>
              
            </div>
          </Col>
        
          
          <Col className="card2"md={3}>
            <h4 className="card-heading">Cloud Cover <IoIosCloud /></h4>
            <div className="content">
              <p className="cloud-cover">{current.clouds}%</p>
            </div>
          </Col>

          <Col className="card2"md={3}>
            <h4 className="card-heading">Pressure <MdTimeline/></h4>
            <div className="content">
              <p className="dew-point">{pressure} hPa</p>
            </div>
          </Col>

          <Col className="card2"md={3}>
            <h4 className="card-heading">UV Index</h4>
            <div className="content">
              <p className="uv-index">{current.uvi}</p>
            </div>
          </Col>

          <Col className="card2"md={3}>
            <h4 className="card-heading">Visibility <MdVisibility /></h4>
            <div className="content">
              <p className="visibility">{current.visibility} meters</p>
            </div>
          </Col>

          <Col className="card2"md={3}>
            <h4 className="card-heading">Wind Direction <GiMultiDirections /></h4>
            <div className="content">
              <p className="wind-direction">{current.wind_deg}°</p>
            </div>
          </Col>


        </Row>
      </Container>
     
    </div>
  </div>
  
  );
};

export default CurrentWeather;
