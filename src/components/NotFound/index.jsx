import React from 'react'
import emoji from "../../assets/images/icon-emoji.svg"
import "./NotFound.css"

function NotFound({messageNotFound}) {
  return (
    <div>
      <section className="error-container">
        <img src={emoji} alt="emoji" />
        <h1 className='error-title'>{messageNotFound.title}</h1>
        <h3 className='error-message'>{messageNotFound.message}</h3>
        <h3 className='error-resolution'>{messageNotFound.resolution}</h3>
      </section>
    </div>
  )
}

export default NotFound