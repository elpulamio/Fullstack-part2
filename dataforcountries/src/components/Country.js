import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Country = ({ country, countriesToShow }) => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(true)
    const api_key = process.env.REACT_APP_API_KEY

    const [ weatherLocation, setWeatherLocation ] = useState([])
    const [ weatherCurrent, setWeatherCurrent ] = useState([])
    const axiosForWeather = require('axios');
    const params = {
        access_key: api_key,
        query: country.name
    }

     const hook = () => {
        axios
            .get('http://api.weatherstack.com/current', {params})
            .then(response => {
            setWeatherLocation(response.data.location)
            setWeatherCurrent(response.data.current)
        })
    }
    useEffect(hook, []) 

    if (country == 0) {
        return <>Too many matches, specify another filter</>
    }
    
    else if (countriesToShow.length == 1 || show ==true) {
        console.log(weatherCurrent)
        return (
            <>
                <h1>{country.name}</h1> 
                <p>Capital: {country.capital}<br />
                Population: {country.population}</p>
                <h2>Languages</h2>{country.languages.map(sub => <li key={sub.name}> {sub.name} </li> )}
                <br /><img src={country.flag} width="100" height="auto"></img>
                <br /><h2>Weather in {weatherLocation.name}</h2>
                <p><strong>Temperature:</strong> {weatherCurrent.temperature} Celsius</p>
                <img src={weatherCurrent.weather_icons}></img>
                <p><strong>Wind:</strong> {weatherCurrent.wind_speed} mph direction {weatherCurrent.wind_dir}</p>
            </>
        )
    }
    
    else {
        return (
            <>
                {country.name} 
                <button onClick={handleClick} value={country.name}>
                    show
                </button>
                <br />
            </>
        )
    }
}

export default Country