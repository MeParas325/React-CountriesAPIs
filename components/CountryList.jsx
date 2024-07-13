import React from 'react'
import CountryCard from './CountryCard'
import { useState, useEffect } from 'react'

const CountryList = ({query}) => {

  const [countriesData, setCountriesData] = useState([])

  useEffect(() => { 
  fetch("https://restcountries.com/v3.1/all").then((res) => res.json()).then((data) => {
    setCountriesData(data)
  })

  let timerId = setInterval(() => {
    console.log("Hii")
  }, 1000)
  
    return () => {
      clearTimeout(timerId)
      console.log("Component unmount")
    }
  }, [])
  
  
  return (
    <div className="countries-container">
      {
         countriesData.filter((country) => country.name.common.toLowerCase().includes(query)).map((country) => <CountryCard key={country.name.common} name = {country.name.common} flag = {country.flags.svg} population = {country.population} capital = {country.capital} region = {country.region} /> )
      }
    </div>
  )
}

export default CountryList