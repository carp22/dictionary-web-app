import React from 'react'
import logo from "../../assets/images/logo.svg"
import searchIcon from "../../assets/images/icon-search.svg"
import arrowDown from "../../assets/images/icon-arrow-down.svg"
import moon from "../../assets/images/icon-moon.svg"
import { useState } from 'react'
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
              <div className="select-container">
                <select className="fonts">
                    <option value="sans-serif">Sans Serif</option>
                    <option value="serif">Serif</option>
                    <option value="mono">Mono</option>
                </select>
                <div className="arrow-icon-container">
                    <img src={arrowDown} alt="arrow-down" className="arrow-down-icon"/>
                </div>
              </div>
                <div class="toggle-switch">
                  <label class="switch-label">
                  <input type="checkbox" class="checkbox"/>
                  <span class="slider"></span>
                  </label>
                </div>  
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
              <img src={searchIcon} alt="search-icon" className="search-icon" onClick={handleClick}/>
          </div>
          
        </div>
    </div> 
  )
}

export default Header