import React from 'react'

const CountryCard = ({name, flag, population, capital, region}) => {
  return <>
  
    <a className="country-card" href={`/country?name=${name}`}>
    <div className="imageDiv">
      <img src = {flag} alt = {name + ' flag'} />
    </div>
    <div className="card-text">
      <h3 className="card-title"></h3>
      <p>
        <b>Population: </b>{population.toLocaleString('en-IN')}
      </p>
      <p>
        <b>Region: </b>{region}
      </p>
      <p>
        <b>Capital: </b>{capital}
      </p>
    </div>
  </a>
  </>
}

export default CountryCard