import React, { useState } from 'react'
import '../App.css'

const Header = () => {

    const [showRules, setShowRules] = useState(false)
    const toggleRules = () => {
        setShowRules(prev => !prev)
    }

    return (
        <header>
            <h1>Know Your Stack!</h1>
            <p>A hangman style game for programming languages</p>
            <p onClick={toggleRules} className='show-rules'>{showRules ? "Hide Rules" : "Show Rules"}</p>
            {showRules && 
            <>
                <p>
                    Guess the word within 8 attempts to win.
                    The word is unique to one of the programming languages below. With every wrong guess, you'll get a hint about which language it doesn't belong to.
                    <br />
                    <br />
                    Good luck!
                </p>
                <hr style={{ opacity: "50%" }} />
            </>
            }
        </header>
    )
}

export default Header
