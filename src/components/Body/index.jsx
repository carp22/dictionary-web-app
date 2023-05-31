import React from 'react'
import "./Body.css"

function Body({ results }) {
  const { meanings } = results[0] || ""
  console.log(results)
  
  return (
    <div>
      <section className='word-title'>
        <div className='meaning-found'>
          <h2 className='word-text'>{results[0]?.word}</h2>
          <h4 className='word-phonetic'>{results[0]?.phonetic}</h4>
        </div>
        <span className='word-audio'>{results[0]?.phonetics[0].audio}</span>
      </section>
      
      <section className="word-body">
        { meanings?.map( (meaning, index) =>(   
        <div key={index}>
          <section className="word">
            <div className="word-partofspeech">
              <h4 className="partofspeech-text">{meaning.partOfSpeech}<hr /></h4> 
              <p>Meaning</p>
                 {meaning.definitions.map( (element, index) => (
                  <ul key={index}>
                    <li className="word-meanings">{element.definition}</li>
                    {element.example && <li className='word-example'>"{element.example}"</li>}
                  </ul>
                  ))}
                {meaning.synonyms.length > 0 
                  && 
                    <h4 className="word-synonyms">
                      Synonyms <span className='synonyms'>{meaning.synonyms.join(", ")}</span>
                    </h4>}
            </div>
          </section>
        </div>   
        ))}
      </section>

    </div>
  )
}

export default Body