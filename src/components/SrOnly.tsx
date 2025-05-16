import React from 'react'
import '../App.css'

interface Props {
    currentWord: string | null
    guessedLetters: (string | null)[] 
    lastGuessedLetter: string | null
    numGuessesLeft: number
}

const SrOnly = ({ currentWord, guessedLetters, lastGuessedLetter, numGuessesLeft }: Props) => {

    return (
        <section 
            className="sr-only" 
            aria-live="polite" 
            role="status"
        >
            <p>
                {lastGuessedLetter && currentWord?.includes(lastGuessedLetter) ? 
                    `Correct! The letter ${lastGuessedLetter} is in the word.` : 
                    `Sorry, the letter ${lastGuessedLetter} is not in the word.`
                }
                You have {numGuessesLeft} attempts left.
            </p>
            <p>Current word: {currentWord?.split("").map(letter => 
            guessedLetters.includes(letter) ? letter + "." : "blank.")
            .join(" ")}</p>
        
        </section>
    )
}

export default SrOnly