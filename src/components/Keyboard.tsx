import React, { useEffect } from 'react'
import '../App.css'
import clsx from 'clsx';

interface Props {
    addGuessedLetter: (letter: string) => void;
    currentWord: string | null
    guessedLetters: (string | null)[] 
    isGameOver: boolean | undefined
}

const Keyboard = ({ addGuessedLetter, currentWord, guessedLetters, isGameOver }: Props) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
          const key = e.key.toLowerCase();
          if (key.match(/^[a-z]$/)) {
            addGuessedLetter(key);
          }
        };
      
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
      }, [addGuessedLetter]);

    return (
        <section className='keyboard'>
            {alphabet.split('').map(letter => {

            const isGuessed = guessedLetters.includes(letter)
            const isCorrect = isGuessed && currentWord?.includes(letter)
            const isWrong = isGuessed && currentWord && !currentWord.includes(letter)
            const className = clsx({
                correct: isCorrect,
                wrong: isWrong
            })
            
            return (
                <button 
                    key={letter} 
                    onClick={() => addGuessedLetter(letter)}
                    className={className}
                    disabled={isGameOver}
                    aria-disabled={guessedLetters.includes(letter)}
                    aria-label={`Letter ${letter}`}
                >
                    {letter.toUpperCase()}
                </button>
            )
            })}
        </section>
    )
}

export default Keyboard