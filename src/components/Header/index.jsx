import React from 'react'
import logo from "../../assets/images/logo.svg"
import searchIcon from "../../assets/images/icon-search.svg"
import arrowDown from "../../assets/images/icon-arrow-down.svg"
import moon from "../../assets/images/icon-moon.svg"
import { useState } from 'react'
import "./Header.css"


function Header({onSearch, selectFont, fontFamily}) {
  // Investigar useReference y cambiarlo por useState
  const [wordToLookFor, setWordToLookFor] = useState("") 

  const handleChange = function(event){
    const {value} = event.target
    setWordToLookFor(value)
  }
  
  const selectChange = function (event){
    const {value} = event.target
    selectFont(value)
  }
  
  const handleClick = function (){
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordToLookFor}`)
    .then(response => response.json())
    .then(data => onSearch(data))  

  }
  return (
    <div className='dictionary-header' style={fontFamily}>
      <section className='dictionary-section'>
        <img src={logo} alt="logo" />
          <div className='theme'>
            <div className="select-container" >
              <select className="fonts" onChange={selectChange}>
                <option className='option' value="sans-serif" >Sans Serif</option>
                <option className='option' value="serif" >Serif</option>
                <option className='option' value="mono" >Mono</option>
              </select>
              <div className="arrow-icon-container">
                <img src={arrowDown} alt="arrow-down" className="arrow-down-icon"/>
              </div>
            </div>
            
            <label className="switch">
              <input type="checkbox"/>
              <span className="slider"></span>
            </label>
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
  )
}

export default Header