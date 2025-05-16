import React from 'react'
import '../App.css'
import clsx from 'clsx'

interface Props {
    currentWord: string | null;
    guessedLetters: (string | null)[] 
    isGameLost: boolean
}

const AnswerTiles = ({ currentWord, guessedLetters, isGameLost }: Props) => {

    return (
        <section className='word'>
            {currentWord?.split('').map((letter, i) => {
        
            const shouldRevealLetter = isGameLost || guessedLetters.includes(letter)
            const letterClassName = clsx(
                isGameLost && !guessedLetters.includes(letter) && "missed-letter"
            )    
                return (
                <span key={i} className={letterClassName}>{shouldRevealLetter ? letter.toUpperCase() : ""}</span>
                )
            })}
        </section>
    )
}

export default AnswerTiles