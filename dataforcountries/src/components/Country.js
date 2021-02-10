import React, { useState } from 'react'

const Country = ({ country, countriesToShow }) => {
    console.log(country)
    if (country == 0) {
        return <>Too many matches, specify another filter</>
    }
    else if (countriesToShow.length == 1) {
        return (
            <>
                <h1>{country.name}</h1> 
                <p>Capital: {country.capital}<br />
                Population: {country.population}</p>
                <h2>Languages</h2>{country.languages.map(sub => <li key={sub.name}> {sub.name} </li> )}
                <br /><img src={country.flag} width="100" height="auto"></img>
            </>
        )
    }
    else {
        return <>{country.name}<br /></>
    }
    
}

export default Country