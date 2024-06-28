import React, { useContext } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Welcome from './components/Welcome'
import { Context } from './context/context'



function App() {

  const { input, setinput, showResult, resultLoading, resultData, recentPrompt, onSent, } = useContext(Context);


  return (
    <>
      <Sidebar />
      <div className='container'>
        <Header />
        <div className='hero'>
          {!showResult ? <Welcome /> :

            <>
              <div className="recent-prompt">
                <div className="chat-pfp">
                  <img src="\src\assets\user_icon.png" alt="" />
                </div>
                <div className="given-prompt">{recentPrompt}</div>
              </div>
              <div className="result">
                <div className='chat-pfp'>
                  <img src="\src\assets\gemini_icon.png" alt="" />
                </div>
                {resultLoading
                  ? <div className='loader'>
                    <hr />
                    <hr />
                    <hr />
                  </div>
                  : <div id='response' dangerouslySetInnerHTML={{ __html: resultData }} />
                }

              </div>
            </>
          }
        </div>

        <div className="prompt">
          <div className="input-container">
            <input onChange={(e) => setinput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
            <div className={`input-icons ${input !== "" ? "expanded" : ""}`}>
              <img src="\src\assets\gallery_icon.png" alt="" />
              <img src="\src\assets\mic_icon.png" alt="" />
              {(input != "")
                ? <img onClick={() => onSent()} src="\src\assets\send_icon.png" alt="" className='scale-up' />
                : <></>
              }
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default App