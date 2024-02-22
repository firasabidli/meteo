import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import WeatherDesc from './WeatherDesc';
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


const CurrentWeather = ({ weatherData }) => {
  const { current } = weatherData;
  const { humidity, pressure, sunrise, sunset, wind_speed, weather, temp } = current;
  const { description, icon } = weather[0];

  const getWeatherIconUrl = (iconCode) => {
    return require(`../assets/images/${iconCode}.png`).default;
  };

  
  const getWeatherIcon = (description, icon) => {
    switch(description) {
      case 'clear sky':
        return icon.includes('d') ? ClearSkyDay : ClearSkyNight;
      case 'few clouds':
        return icon.includes('d') ? FewCloudsDay : FewCloudsNight;
      case 'scattered clouds':
        return icon.includes('d') ? scatteredcloudsDay : scatteredcloudsNight;
      case 'broken clouds':
        return icon.includes('d') ? brokencloudsDay : brokencloudsNight;
      case 'shower rain':
        return icon.includes('d') ? showerrainDay : showerrainNight;
      case 'rain':
        return icon.includes('d') ? rainDay : rainNight;
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
    <Container>
      <Row>
        <Col md={4}>
          <WeatherDesc description={description}  />
        </Col>
        <Col md={4}>
          <img src={getWeatherIcon(description, icon)} alt="Weather Icon" style={{ width:'150px', paddingTop:'40px'}}/>
        </Col>
        <Col md={4}>
          <ListGroup style={{ width: '100%' }}>
            <ListGroup.Item action className="border-0 d-flex justify-content-between align-items-center">
              <span>Temperature</span>
              <span>{temp}&#176;C</span>
            </ListGroup.Item>
            <ListGroup.Item action className="border-0 d-flex justify-content-between align-items-center">
              <span>Humidity</span>
              <span>{humidity}%</span>
            </ListGroup.Item>
            <ListGroup.Item action className="border-0 d-flex justify-content-between align-items-center">
              <span>Pressure</span>
              <span>{pressure}</span>
            </ListGroup.Item>
            <ListGroup.Item action className="border-0 d-flex justify-content-between align-items-center">
              <span>Wind Speed</span>
              <span>{wind_speed}</span>
            </ListGroup.Item>
            <ListGroup.Item action className="border-0 d-flex justify-content-between align-items-center">
              <span>Sunrise</span>
              <span>{new Date(sunrise * 1000).toLocaleTimeString()}</span>
            </ListGroup.Item>
            <ListGroup.Item action className="border-0 d-flex justify-content-between align-items-center">
              <span>Sunset</span>
              <span>{new Date(sunset * 1000).toLocaleTimeString()}</span>
            </ListGroup.Item>
            
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default CurrentWeather;
