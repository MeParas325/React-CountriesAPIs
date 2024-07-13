import React, { useState } from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import SearchMenu from './SearchMenu'
import CountryList from './CountryList'

const Home = () => {
    const [query, setQuery] = useState("")
  return <>
  <main>
    <div className="search-filter-container">
      <SearchBar setQuery = {setQuery} />
      <SearchMenu />
    </div>
    {query === 'unmount' ? '' :<CountryList query = {query} /> }
  </main>
</>
}

export default Home