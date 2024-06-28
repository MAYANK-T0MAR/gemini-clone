import React from 'react'
import '../css/Welcome.css'
import PromptTemplate from './PromptTemplate';

function Welcome() {


  return (
    <>
      <div className="welcome">
        <div className="welcome-msg">
          <h1 id='special-text'>Hello, Visitor</h1>
          <h1 id='basic-text'>How can I help you today?</h1>
        </div>
        <div className="welcome-cards">
          <PromptTemplate prompt={"Suggest me some dark thriller suspense books"} />
          <PromptTemplate prompt={"Python script for daily email reports"} />
          <PromptTemplate prompt={"Flights to Tokyo and Seoul, and things to do"} />
          <PromptTemplate prompt={"Pick a casual outfit for a sunny picnic"} />
        </div>
      </div>
    </>
  )
}

export default Welcome