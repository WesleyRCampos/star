import React, { useState, useEffect } from 'react'
import Cards from './Cards'
import Browser from './Browser'


const MiApi = () => {
  const [characters, setCharacters] = useState([])
  const [endSearch, setEndSearch]= useState('')
  
  //Array com dados da Api
  useEffect(() => {
    getCharacters();
  }, [])

  //Convertendo json em um objeto 
  const getCharacters = async () => {
    try {
      const response = await fetch('https://swapi.dev/api/people/');
      const data = await response.json();
      setCharacters(data.results);
    } catch (error) {
      console.error('Error em obter os personagem:', error);
    }
  }

  //Metodo adicional de pesquisa
  const handleEndSearch =  (e) => {
    setEndSearch(e.target.value)
  }

  //Metodo filtra por nome
  const filteredCharacters = characters.filter(
    (characater) =>
    characater.name.toLowerCase().includes(endSearch.toLowerCase())
  )
  filteredCharacters.sort((a, b) => a.name.localeCompare(b.name))

  return (
    <div className="container-characters">
      <div className="container-characters">
      <Browser handleEndSearch={endSearch} onChange={handleEndSearch}/>
      </div>
      <div className="box">
      <Cards characters={filteredCharacters} />
      </div>
    </div>
  )
}

export default MiApi
