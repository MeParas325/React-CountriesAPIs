import React, { useEffect, useState } from 'react'
import './CountryDetail.css'

const CountryDetail = () => {

  const countryName = new URLSearchParams(location.search).get('name')
  const [countryData, setCountryData] = useState(null)

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`).then((res) => res.json()).then((data) => {
      console.log(data)
      setCountryData(data)
    })
    return () => {
      
    }
  }, [])


  
  return countryData === null ? <h1>Loading...</h1> : <>
    <main>
      <div className="country-details-container">
        <span className="back-button">
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img src={countryData[0].flags.svg} alt={`${countryData[0].name.common} flag`} />
          <div className="details-text-container">
            <h1>{countryData[0].name.common}</h1>
            <div className="details-text">
              <p>
                <b>Native Name: {countryData[0].name.nativeName.isl.common}</b>
                <span className="native-name"></span>
              </p>
              <p>
                <b>
                  Population: {countryData[0].population.toLocaleString('en-IN')}
                </b>
                <span className="population"></span>
              </p>
              <p>
                <b>Region: {countryData[0].region}</b>
                <span className="region"></span>
              </p>
              <p>
                <b>Sub Region: {countryData[0].subregion}</b>
                <span className="sub-region"></span>
              </p>
              <p>
                <b>Capital: {countryData[0].capital[0]}</b>
                <span className="capital"></span>
              </p>
              <p>
                <b>Currencies: {countryData[0].currencies.ISK.name} </b>
                <span className="currencies"></span>
              </p>
              <p>
                <b>Languages: {countryData[0].languages.isl}</b>
                <span className="languages"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </>
}

export default CountryDetail