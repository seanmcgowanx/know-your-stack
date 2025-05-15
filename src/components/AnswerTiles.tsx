import React from 'react'
import '../App.css'

interface Props {
    currentWord: string | null;
    guessedLetters: (string | null)[] 
}

const AnswerTiles = ({ currentWord, guessedLetters}: Props) => {
    return (
        <section className='word'>
            {currentWord?.split('').map((letter, i) => (
                <span key={i}>{guessedLetters.includes(letter) ? letter.toUpperCase() : ""}</span>
            ))}
        </section>
    )
}

export default AnswerTiles