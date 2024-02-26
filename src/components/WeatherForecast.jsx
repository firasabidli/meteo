import React from 'react';
import './WeatherForecast.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
    <Container className="cards" id="weather-cards">
    <Row className="cards" style={{ paddingTop:'30px'}}>
      {daily.slice(1).map((day, index) => (
        <Col key={index} className="card" md={2}>
          <h2 className="day-name">{new Date(day.dt * 1000).toLocaleDateString('en', { weekday: 'short' })}</h2>
          <div className="card-icon">
          <img src={getWeatherIconUrl(day.weather[0].icon)} alt="weather icon" className="w-icon" style={{ width:'30px'}} />
          </div>
          
          <div className="day-desc"  >{day.weather[0].description}</div>
          <div className="day-temp"><h3>Night - {day.temp.night} &#176;C</h3> </div>
          <div className="day-temp"><h3>Day - {day.temp.day} &#176;C</h3> </div>
        </Col>
      ))}
    </Row>
     </Container>
  );
};

export default WeatherForecast;
