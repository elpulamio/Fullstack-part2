import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './Filter'
import Country from './Country'

const App = () => {
  const [ countries, setCountries ] = useState([]) 
  const [ countryFilter, setNewFilter ] = useState('')

  const hook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }
  useEffect(hook, [])
  
  const countriesToShow = countries.filter(country => country.name.toLowerCase().includes(countryFilter.toLowerCase()))

  let message
  let country
  
  if (countriesToShow.length <= 10) {
    message = countriesToShow.map(country => 
    <Country key={country.name} country={country} countriesToShow={countriesToShow} />)
  }
  else {
    country = 0
    message = <Country country={country} countriesToShow={countriesToShow} />
  }

  const handleCountryChangeFilter = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <Filter filterValue={countryFilter} filterOnChange={handleCountryChangeFilter} />
      <div>
        {message}
      </div>
    </div>
  )
}

export default App