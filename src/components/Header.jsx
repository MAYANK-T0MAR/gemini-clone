import React from 'react'
import '../css/Header.css'

function Header() {
    return (
        <>
            <div className="header">
                <div className='title'>Gemini</div>
                <div className="header-options">
                    <div id='premium-btn'>
                        <img src="/gemini_icon.png" alt="" />
                        Try Gemini Advanced
                    </div>
                    <img id='doted-icon' src="/doted_icon.png" alt="" />
                    <img id='user-icon' src="/user_icon.png" alt="" />

                </div>
            </div>

        </>
    )
}

export default Header