import React, { useEffect } from 'react'
import '../App.css'

interface Props {
    addGuessedLetter: (letter: string) => void;
}

const Keyboard = ({ addGuessedLetter }: Props) => {
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
      }, []);

    return (
        <section className='keyboard'>
            {alphabet.split('').map(letter => (
                <button 
                    key={letter} 
                    onClick={() => addGuessedLetter(letter)}
                >
                    {letter.toUpperCase()}
                </button>
            ))}
        </section>
    )
}

export default Keyboard