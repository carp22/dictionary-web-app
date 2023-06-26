
import Header from "./components/Header"
import Body from "./components/Body"
import NotFound from "./components/NotFound"
import { useState } from "react"


function App() {
  const [dictionary, setDictionary] = useState([])
  const [font, setFont] = useState("sans-serif")
  const [selectedTheme, setSelectedTheme] = useState(localStorage.getItem("selectedTheme") || "")

  document.querySelector("body").setAttribute("app-font", font)

  const setDarkMode = function(){
    setSelectedTheme("dark")
    document.querySelector("body").setAttribute("app-theme", "dark")
    localStorage.setItem("selectedTheme", "dark")
  }
  const setLightMode = function(){
    setSelectedTheme("light")
    document.querySelector("body").setAttribute("app-theme", "light")
    localStorage.setItem("selectedTheme", "light")
  }

  if (selectedTheme === "dark") {
    document.querySelector("body").setAttribute("app-theme", "dark")
  } else {
    document.querySelector("body").setAttribute("app-theme", "light")
  }

  return (
    <div>
      <div >
        <Header 
          onSearch={setDictionary} 
          selectFont={setFont} 
          darkMode = {setDarkMode} 
          lightMode={setLightMode}
          currentTheme={selectedTheme}/>
        {
          dictionary.length === undefined && <NotFound messageNotFound={dictionary} />
          }
        {
          dictionary.length > 0 && <Body results={dictionary} /> 
          }
      </div>
    </div>
  )
}

export default App
