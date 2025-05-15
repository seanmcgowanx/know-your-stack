import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header'
import GameStatus from './components/GameStatus'
import LanguageTiles from './components/LanguageTiles'
import AnswerTiles from './components/AnswerTiles'
import Keyboard from './components/Keyboard'
import { words } from './data/words'


function App() {
  //State Values
  const [currentWord, setCurrentWord] = useState<(string | null)>("")
  const [guessedLetters, setGuessedLetters] = useState<(string | null)[]>([])

  //Derived Values

  const wrongGuessCount = guessedLetters.filter(letter => letter && currentWord && !currentWord.split("").includes(letter)).length

  //Helper Functions

  const getNewWord = () => {
    const languages = Object.keys(words) as (keyof typeof words)[]
    const randomLanguage = languages[Math.floor(Math.random() * languages.length)]
    const randomWords = words[randomLanguage]
    const randomWord = randomWords[Math.floor(Math.random() * randomWords.length)]
    setCurrentWord(randomWord)
  }

  const addGuessedLetter = (letter: string) => {
    setGuessedLetters(prev => {
      if (prev.includes(letter)) return prev
      return [...prev, letter]
    })    
  }

  //Side Effects

  useEffect(() => {
    getNewWord()
  }, [])

  //Render

  return (
    <>
      <Header />
      <GameStatus />
      <LanguageTiles />
      <AnswerTiles 
        currentWord={currentWord}
        guessedLetters={guessedLetters}
      />
      <Keyboard 
        addGuessedLetter={addGuessedLetter}
        currentWord={currentWord}
        guessedLetters={guessedLetters}
      />
      <button className='new-game'>New Game</button>
    </>
  );
}

export default App;
