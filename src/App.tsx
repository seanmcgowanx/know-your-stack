import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header'
import GameStatus from './components/GameStatus'
import LanguageTiles from './components/LanguageTiles'
import AnswerTiles from './components/AnswerTiles'
import Keyboard from './components/Keyboard'

function App() {
  const [currentWord, setCurrentWord] = useState("react")
  const [guessedLetters, setGuessedLetters] = useState<(string | null)[]>([])

  const addGuessedLetter = (letter: string) => {
    setGuessedLetters(prev => {
      if (prev.includes(letter)) return prev
      return [...prev, letter]
    })    
  }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase()
      if (key.match(/^[a-z]$/)) {
        addGuessedLetter(key)
      }
    };

    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, []);

  console.log(guessedLetters)

  return (
    <>
      <Header />
      <GameStatus />
      <LanguageTiles />
      <AnswerTiles currentWord={currentWord}/>
      <Keyboard addGuessedLetter={addGuessedLetter}/>
      <button className='new-game'>New Game</button>
    </>
  );
}

export default App;
