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

  const setDarkMode = function(){
    document.querySelector("body").setAttribute("app-theme", "dark")
    localStorage.setItem("selectedTheme", "dark")
  }
  const setLightMode = function(){
    document.querySelector("body").setAttribute("app-theme", "light")
    localStorage.setItem("selectedTheme", "light")
  }

  const selectedTheme = localStorage.getItem("selectedTheme")
  if(selectedTheme === "dark"){
    setDarkMode()
  }

  const handleToggle = function(event){
    if(event.target.checked){
      setDarkMode()
    } else {
      setLightMode()
    }
  }

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
  const handleSubmit = function(event){
    event.preventDefault()    
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
              <input type="checkbox" onChange={handleToggle} defaultChecked={selectedTheme === "dark"}/>
              <span className="slider"></span>
            </label>
            <img src={moon} alt="moon-logo" />
          </div>

      </section>
        <form className='search-section' onSubmit={handleSubmit}>
          <input 
            type="text" 
            className='search-input' 
            value={wordToLookFor} 
            placeholder='Search for any word...'
            onChange={handleChange}/>
          <img src={searchIcon} alt="search-icon" className="search-icon" onClick={handleClick}/>
        </form>
          
    </div>
  )
}

export default Header