import React from 'react'
import "./Body.css"

function Body({ results }) {
  const { meanings } = results[0] || ""
  console.log(results)
  
  return (
    <div>
      <section className='word-title'>
        <div className='word-'>
          <h2>{results[0]?.word}</h2>
          <h4>{results[0]?.phonetic}</h4>
        </div>
        <span className='word-audio'>{results[0]?.phonetics[0].audio}</span>
      </section>
      
      <section className="word-body">
        { meanings?.map( (meaning, index) =>(   
        <div key={index}>
          <section className="word">
            <div className="word-partofspeech">
              <h4 className="">{meaning.partOfSpeech}</h4> <hr />
                 {meaning.definitions.map( (definition, index) => (
                  <ul key={index}>
                    <li className="word-meanings">{definition.definition}</li>
                  </ul>
                  ))}
                {meaning.synonyms.length > 0 && <h4 className="word-synonyms">Synonyms: {meaning.synonyms.join(", ")}</h4>}
            </div>
          </section>
        </div>   
        ))}
      </section>

    </div>
  )
}

export default Body