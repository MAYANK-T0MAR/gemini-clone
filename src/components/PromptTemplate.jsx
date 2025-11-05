import React, { useContext } from 'react'
import { Context } from '../context/context';
import '../css/PromptTemplate.css'

function PromptTemplate({ prompt }) {
    const { onSent } = useContext(Context);
    return (
        <div onClick={() => onSent(prompt)} className="cards">
            <div className="card-content">
                {prompt}
            </div>
            <img src="/bulb_icon.png" alt="" />
        </div>
    )
}

export default PromptTemplate