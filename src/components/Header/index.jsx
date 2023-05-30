import React from 'react'
import logo from "../../assets/images/logo.svg"
import moon from "../../assets/images/icon-moon.svg"
import { useState, useEffect } from 'react'
import "./Header.css"


function Header({onSearch}) {
  // Investigar useReference y cambiarlo por useState
  const [wordToLookFor, setWordToLookFor] = useState("") 
  
  const handleChange = function(event){
    const {value} = event.target
    setWordToLookFor(value)
  }
  
  const handleClick = function (){
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordToLookFor}`)
    .then(response => response.json())
    .then(data => onSearch(data))  

  }
  return (
    <div>
        <div className='dictionary-header'>
          <section className='dictionary-section'>
              <img src={logo} alt="logo" />

            <div className='theme'>
                <select name="fonts">
                    <option value="sans-serif">Sans Serif</option>
                    <option value="serif">Serif</option>
                    <option value="mono">Mono</option>
                </select>
                <img src={moon} alt="moon-logo" />
            </div>

          </section>
          <div className='search-section'>

            <input 
              type="text" 
              className='search-input' 
              value={wordToLookFor} 
              placeholder='Search for any word...'
              onChange={handleChange}/>
            <button name= "search-btn" onClick={handleClick}>Search ...</button>
          </div>
          
        </div>
    </div> 
  )
}

export default Header