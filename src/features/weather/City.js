import React from 'react'
import PropTypes from 'prop-types'
import './City.scss'

export const City = ({ name, country, weather }) => {
  const weatherToIcon = (w) => {
    switch (w) {
      case 'Clear':
        return 'wi-day-sunny'
      case 'Snow':
        return 'wi-day-snow'
      case 'Clouds':
      default:
        return 'wi-cloudy'
      case 'Fog':
      case 'Mist':
        return 'wi-fog'
      case 'Drizzle':
      case 'Rain':
      case 'Light Rain':
      case 'Heavy Rain':
        return 'wi-rain'
    }
  }

  return (
    <article className='widget'>
      <div className='weatherIcon'><i className={`wi ${weatherToIcon(weather.summary.title)}`} /></div>
      <div className='weatherInfo'>
        <div className='temperature'><span>{Math.round(weather.temperature.feelsLike * 10) / 10}&deg;</span></div>
        <div className='description'>
          <div className='weatherCondition'>{weather.summary.title}</div>
          <div className='place'>{`${name}, ${country}`}</div>
        </div>
      </div>
      <div className='date'>{new Date().getDay()}/{new Date().getMonth()}</div>
    </article>
  )
}

City.propTypes = {
  country: PropTypes.string.isRequired,
  weather: PropTypes.shape({
    temperature: PropTypes.shape({
      actual: PropTypes.number.isRequired,
      feelsLike: PropTypes.number.isRequired,
      min: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired
    }),
    summary: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    }),
    wind: PropTypes.shape({
      speed: PropTypes.number.isRequired,
      deg: PropTypes.number.isRequired
    }),
    clouds: PropTypes.shape({
      all: PropTypes.number.isRequired,
      visibility: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired
    })
  }).isRequired
}