
import Header from "./components/Header"
import Body from "./components/Body"
import { useState } from "react"


function App() {
  const [dictionary, setDictionary] = useState([])

  return (
    <>
      <Header onSearch={setDictionary}/>
      <Body results={dictionary}/>
    </>
  )
}

export default App
