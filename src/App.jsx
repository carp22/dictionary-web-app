
import Header from "./components/Header"
import Body from "./components/Body"
import { useState } from "react"


function App() {
 const [dictionary, setDictionary] = useState([])
 const [font, setFont] = useState("sans-serif")

  const fontStyle = {
    fontFamily: (font === "sans-serif") ? "sans-serif, Arial, Helvetica"
      :(font === "mono") ? "Inconsolata, monospace" : "Lora, serif",
  }

  return (
    <div>
      <div style={fontStyle}>
        <Header onSearch={setDictionary} selectFont={setFont} fontFamily = {fontStyle}/>
        {
          dictionary.length > 0 && <Body results={dictionary}/> 
        }
        
      </div>
    </div>
  )
}

export default App
