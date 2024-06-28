import React from 'react'
import '../css/Header.css'

function Header() {
    return (
        <>
            <div className="header">
                <div className='title'>Gemini</div>
                <div className="header-options">
                    <div id='premium-btn'>
                        <img src="\src\assets\gemini_icon.png" alt="" />
                        Try Gemini Advanced
                    </div>
                    <img id='doted-icon' src="\src\assets\doted_icon.png" alt="" />
                    <img id='user-icon' src="\src\assets\user_icon.png" alt="" />

                </div>
            </div>

        </>
    )
}

export default Header