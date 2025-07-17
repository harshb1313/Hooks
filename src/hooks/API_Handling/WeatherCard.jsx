import React from 'react'

function WeatherCard(props) {
  return (
    <div>
      <h1>{props.Name}</h1>
      <h3>{props.temperature}</h3>
    </div>
  )
}

export default WeatherCard
