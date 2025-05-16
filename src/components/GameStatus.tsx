import React from 'react'
import '../App.css'
import clsx from 'clsx'

interface Props {
    isGameWon: boolean | undefined
    isGameLost: boolean
    isGameOver: boolean 
}

const GameStatus = ({ isGameWon, isGameLost, isGameOver }: Props) => {

    const gameStatusClass = clsx("game-status", {
        won: isGameWon,
        lost: isGameLost
    })

    return (
        
        <section className={gameStatusClass}>
            {isGameOver ? (
                isGameWon ? (
                    <>
                        <h2>You win!</h2>
                        <p>Well done! 🎉</p>
                    </>
                ) : (
                    <>
                        <h2>Game over!</h2>
                        <p>You lost! Too bad. 😭</p>
                    </>
                )
            ) : (
                    null
                )
            }
        </section>
        
    )
}

export default GameStatus