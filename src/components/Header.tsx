import React from 'react'
import '../App.css'

const Header = () => {
    return (
        <header>
            <h1>Know Your Stack!</h1>
            <p>A hangman style game for programming languages. Guess the word within 8 attempts to win. 
            <br/>
            <hr style={{opacity: "50%"}}/>
            The word is unique to one of the programming languages below.  With every wrong guess, you'll get a hint about which language it doesn't belong to.
            <br/>
            <br/>
            Good luck!
            </p>
        </header>
    )
}

export default Header