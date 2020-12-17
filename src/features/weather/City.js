import React from 'react'
import PropTypes from 'prop-types'

export const City = ({ country, weather }) => {

  return (<div>
    <h1>{country}</h1>
    <h2>{weather.summary.title}</h2>
    <p>{weather.summary.description}</p>
  </div>)
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