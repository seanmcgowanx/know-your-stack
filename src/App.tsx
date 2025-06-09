import React, { useState, useEffect, useMemo } from 'react';
import './App.css';
import Header from './components/Header'
import GameStatus from './components/GameStatus'
import LanguageTiles from './components/LanguageTiles'
import AnswerTiles from './components/AnswerTiles'
import Keyboard from './components/Keyboard'
import SrOnly from './components/SrOnly';
import { words } from './data/words'
import { languages } from './data/languages'
import { shuffleArray } from './utils/shuffleArray';
import Confetti from "react-confetti"


function App() {
  //State Values
  const [currentLanguage, setCurrentLanguage] = useState<(string | null)>("")
  const [currentWord, setCurrentWord] = useState<(string | null)>("")
  const [guessedLetters, setGuessedLetters] = useState<(string | null)[]>([])

  //Derived Values
  
  const langNameArr = languages.map(lang => lang.name)
 
  const wrongLanguages = useMemo(() => {
      return langNameArr.filter(
          lang => lang.toLowerCase().replace(/\./g, '') !== currentLanguage?.toLowerCase().replace(/\./g, '')
      )
  }, [currentLanguage, langNameArr])
  
  const randomizedWrongLanguages = useMemo(() => {
      return shuffleArray(wrongLanguages)
  }, [wrongLanguages])
  
  const wrongGuessCount = guessedLetters.filter(
    letter => letter && currentWord && !currentWord.split('').includes(letter)).length
  
  const lostLanguages = randomizedWrongLanguages.slice(0, wrongGuessCount || 0)
  const lastLostLanguage = lostLanguages[lostLanguages.length - 1]
  const isGameWon = currentWord?.split("").every(letter => guessedLetters.includes(letter))
  const isGameLost = wrongGuessCount >= 8 
  const isGameOver = isGameWon || isGameLost
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1]
  const isLastGuessIncorrect = lastGuessedLetter ? !currentWord?.includes(lastGuessedLetter) : false


  //Helper Functions

  const getNewWord = () => {
    const languages = Object.keys(words) as (keyof typeof words)[]
    const randomLanguage = languages[Math.floor(Math.random() * languages.length)]
    const randomWords = words[randomLanguage]
    const randomWord = randomWords[Math.floor(Math.random() * randomWords.length)]
    setCurrentLanguage(randomLanguage)
    setCurrentWord(randomWord)
  }

  const addGuessedLetter = (letter: string) => {
    setGuessedLetters(prev => {
      if (prev.includes(letter)) return prev
      return [...prev, letter]
    })    
  }

  const startNewGame = () => {
    getNewWord()
    setGuessedLetters([])
  }

  //Side Effects

  useEffect(() => {
    getNewWord()
  }, [])

  //Render

  return (
    <>
      { isGameWon &&
          <Confetti 
            recycle={false}
            numberOfPieces={1000}
          />
      }
      <Header />
      <GameStatus 
        isGameWon={isGameWon}
        isGameLost={isGameLost}  
        isGameOver={isGameOver}
        isLastGuessIncorrect={isLastGuessIncorrect}
        lastLostLanguage={lastLostLanguage}
      />
      <LanguageTiles 
        currentLanguage={currentLanguage}
        currentWord={currentWord}
        guessedLetters={guessedLetters}
        wrongGuessCount={wrongGuessCount}
        lostLanguages={lostLanguages}
      />
      <AnswerTiles 
        currentWord={currentWord}
        guessedLetters={guessedLetters}
        isGameLost={isGameLost}
      />
      <SrOnly 
        currentWord={currentWord}
        guessedLetters={guessedLetters}
        lastGuessedLetter={lastGuessedLetter}
        numGuessesLeft={languages.length - 1}
      />
      <Keyboard 
        addGuessedLetter={addGuessedLetter}
        currentWord={currentWord}
        guessedLetters={guessedLetters}
        isGameOver={isGameOver}
      />
      {isGameOver && <button onClick={startNewGame} className='new-game'>New Game</button>}
    </>
  );
}

export default App;
