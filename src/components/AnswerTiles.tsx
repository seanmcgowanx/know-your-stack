import React from 'react'
import '../App.css'

interface Props {
    currentWord: string;
}

const AnswerTiles = ({ currentWord }: Props) => {
    return (
        <section className='word'>
            {currentWord.split('').map((letter, i) => (
                <span key={i}>{letter.toUpperCase()}</span>
            ))}
        </section>
    )
}

export default AnswerTiles