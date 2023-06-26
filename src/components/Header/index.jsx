import React from 'react'
import logo from "../../assets/images/logo.svg"
import searchIcon from "../../assets/images/icon-search.svg"
import arrowDown from "../../assets/images/icon-arrow-down.svg"
import moon from "../../assets/images/icon-moon.svg"
import Select from 'react-select'
import { useState } from 'react'
import "./Header.css"


function Header({onSearch, selectFont, darkMode, lightMode, currentTheme}) {
  // Investigar useReference y cambiarlo por useState
  const [wordToLookFor, setWordToLookFor] = useState("") 
  
  const fonts = [
    {label: "Sans Serif", value: "sans-serif"},
    {label: "Serif", value: "serif"},
    {label: "Mono", value: "mono"}
  ]
  
  const selectStyles = {
    menu:(styles) => ({
      ...styles,
      boxShadow: currentTheme === "dark" && "0 5px 1.75rem #A445ED",
      backgroundColor: currentTheme === "dark" ? "black" : "white",
      borderRadius: "15px",
      width: "165px",
      marginLeft: "-35px",
      paddingTop: "20px",
      paddingBottom: "20px"
    }),
    option:(styles) => ({
      ...styles,
      width: "165px",
      backgroundColor: "none",
      color: currentTheme === "dark" ? "white" : "black",
      "&:hover": {
        color: "#A445ED",
        cursor: "pointer"
      }
    }),
    control:(styles, {isFocused}) => ({
      ...styles,
      backgroundColor: "none",
      border: "none",
      outline: isFocused && "1px solid #A445ED" ,
      "&:hover":{
        cursor:"pointer"
      }
    }),
    dropdownIndicator:(styles) =>({
      ...styles,
      color: "#A445ED"
    }),
    singleValue:(styles)=>({
      ...styles,
      color: currentTheme === "dark" ? "white" : "black",
    })
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

  const handleToggle = function(event){
    if(event.target.checked){
      darkMode()
    } else {
      lightMode()
    }
  }

  const handleChange = function(event){
    const {value} = event.target
    setWordToLookFor(value)
  }
  
  const selectChange = function (event){
    selectFont(event.value)
  }

  return (
    <div className='dictionary-header' >
      <section className='dictionary-section'>
        <img src={logo} alt="logo" />
          <div className='theme'>
            <div className="select-container" >
              <Select 
                className='select-font'
                styles={selectStyles}
                defaultValue={fonts[0]} 
                options={fonts} 
                onChange={selectChange}/>
            </div>
            
            <label className="switch">
              <input type="checkbox" onChange={handleToggle} defaultChecked={currentTheme === "dark"} />
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