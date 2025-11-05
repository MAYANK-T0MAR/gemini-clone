import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/context';
import '../css/Sidebar.css'

function Sidebar() {

    const { setshowResult, previousPrompts, selectedPrompt, setselectedPrompt, switchPrompts } = useContext(Context);

    const [sidebarOpen, setsidebarOpen] = useState(false);
    const [transitionCompleted, settransitionCompleted] = useState(false);

    const toggleSidebar = () => {
        setsidebarOpen(!sidebarOpen);
    }

    useEffect(() => {
        if (sidebarOpen) {
            const timer = setTimeout(() => {
                settransitionCompleted(true);
            }, 200);
            return () => clearTimeout(timer);
        }
        else {
            settransitionCompleted(false);
        }

        if (previousPrompts.length > 0 && !selectedPrompt) {
            switchPrompts(previousPrompts[0].id); // Select the first prompt when available
        }
        if (selectedPrompt === null) {
            setshowResult(false);
            setselectedPrompt(null);
        }
    }, [sidebarOpen]);




    return (
        <>
            <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                <div className="sidebar-top">
                    <div onClick={toggleSidebar} className="menu">
                        <img src="../assets/menu_icon.png" alt="" />
                    </div>

                </div>
                <div onClick={() => {
                    setshowResult(false);
                    setselectedPrompt(null);
                }} className={`new-chat ${sidebarOpen ? 'open' : ''}`}>
                    <img src="../assets/plus_icon.png" alt="" />
                    <span id='new-text' className={transitionCompleted ? 'visible' : ''}>
                        New Chat
                    </span>
                </div>
                <div id="chats" className={transitionCompleted ? 'visible' : ''} >
                    {transitionCompleted && (

                        <>
                            <div id='recent'>Recent</div>
                            {previousPrompts.map((item) => {
                                return (
                                    <div onClick={() => switchPrompts(item.id)} className={`bottom-group ${selectedPrompt === item.id ? 'selected' : ''}`} key={item.id}>
                                        <img src="../assets/message_icon.png" alt="" />
                                        <span id="new-text" className={transitionCompleted ? 'visible' : ''}>
                                            {item.prompt.length > 20 ? item.prompt.slice(0, 20) + "..." : item.prompt}
                                        </span>
                                    </div>
                                )
                            })}


                        </>
                    )}
                </div>
                <div className="bottom-icons">
                    <div className='bottom-group'>
                        <img src="../assets/question_icon.png" alt="" />
                        <span id='new-text' className={transitionCompleted ? 'visible' : ''}>
                            Help
                        </span>
                    </div>
                    <div className="bottom-group">
                        <img src="../assets/history_icon.png" alt="" />
                        <span id='new-text' className={transitionCompleted ? 'visible' : ''}>
                            Activity
                        </span>
                    </div>
                    <div className="bottom-group">
                        <img src="../assets/setting_icon.png" alt="" />
                        <span id='new-text' className={transitionCompleted ? 'visible' : ''}>
                            Settings
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar