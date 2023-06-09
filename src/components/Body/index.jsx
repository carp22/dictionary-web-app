import React from 'react'
import playButton from "../../assets/images/icon-play.svg"
import newWindow from "../../assets/images/icon-new-window.svg"
import "./Body.css"

function Body({ results }) {
  const { meanings } = results?.length ? results[0] : {meanings : []}
  const { phonetics } = results?.length ? results[0] : {phonetics : []}

  console.log(results )

  let phonetic = ""
  let mp3
  
  for (let index = 0; index < phonetics?.length; index++) {
    const element = phonetics[index];
    if(element.text?.length > 0){
      phonetic = element.text
      break
    }
  } 
  for (let index = 0; index < phonetics?.length; index++) {
    const element = phonetics[index];
    if(element.audio?.length > 0){
      mp3 = element.audio
      break
    }
  } 

  const playAudio = function(){
    const audio = new Audio(mp3)
    audio.play()
  }
  
  return (
    <div className='dictionary-body'>
      <section className='word-title'>
        <div className='meaning-found'>
          <h2 className='word-text'>{results[0]?.word}</h2>
          <h4 className='word-phonetic'>{phonetic}</h4>
        </div>
          {mp3 && <img src={playButton} alt="audio-img" onClick={playAudio}/>}
      </section>
      
      <section className="word-body">
        { meanings?.map( (meaning, index) =>(   
        <div key={index}>
          <section className="word">
            <div className="word-partofspeech">
              <h4 className="partofspeech-text">{meaning.partOfSpeech}</h4> 
              <p>Meaning</p>
                 {meaning.definitions.map( (element, index) => (
                  <ul key={index}>
                    <li className="word-meanings">{element.definition}</li>
                    {element.example && <li className='word-example'>"{element.example}"</li>}
                  </ul>
                  ))}
                {meaning.synonyms?.length > 0 
                  && 
                    <h4 className="word-synonyms">
                      Synonyms <span className='synonyms'>{meaning.synonyms.join(", ")}</span>
                    </h4>}
                {meaning.antonyms?.length > 0 
                  && 
                    <h4 className="word-antonyms">
                      Antonyms <span className='antonyms'>{meaning.antonyms.join(", ")}</span>
                    </h4>}
            </div>
          </section>
        </div>   
        ))}
        <hr className='hr'/>
        <div className="word-source">
          <h5>Source</h5>
          <a href={results[0].sourceUrls} target='blank'>{results[0].sourceUrls}</a>
          <img src={newWindow} alt="link-img" />
        </div>
      </section>

    </div>
  )
}

export default Body