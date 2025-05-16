import React from 'react'
import '../App.css'
import clsx from 'clsx'

interface Props {
    isGameWon: boolean | undefined
    isGameLost: boolean
    isGameOver: boolean 
    isLastGuessIncorrect: boolean
    lastLostLanguage: string | null
}

const GameStatus = ({ isGameWon, isGameLost, isGameOver, isLastGuessIncorrect, lastLostLanguage }: Props) => {

    const gameStatusClass = clsx("game-status", {
        won: isGameWon,
        lost: isGameLost,
        hint: !isGameOver && isLastGuessIncorrect
    })

    const renderGameStatus = () => {
        if(!isGameOver && isLastGuessIncorrect) {
            return (
                <p className='hint'>Hint: The word is not unique to {lastLostLanguage}</p>
            )
        }

        if(isGameWon) {
            return (
                <>
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p>
                </>
            )
        }

        if(isGameLost) {
            return (
                <>
                    <h2>Game over!</h2>
                    <p>Better luck next time 😭</p>
                </>
            )
        }

        return null
    }

    return (
        
        <section className={gameStatusClass}>
            {renderGameStatus()}
        </section>
        
    )
}

export default GameStatus