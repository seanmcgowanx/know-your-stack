import React, { useMemo } from 'react'
import { languages } from '../data/languages'
import clsx from 'clsx'
import '../App.css'

interface Props {
    currentLanguage: string | null
    currentWord: string | null
    guessedLetters: (string | null)[]
    wrongGuessCount: number
}

const shuffleArray = (arr: string[]) => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
}

const LanguageTiles = ({ currentLanguage, currentWord, guessedLetters, wrongGuessCount }: Props) => {

    const fixedLanguages = languages.map(lang => lang.name.toLowerCase().replace(/\./g, ''))

    const wrongLanguages = useMemo(() => {
        return fixedLanguages.filter(
            lang => lang !== currentLanguage
        )
    }, [currentLanguage])

    const randomizedWrongLanguages = useMemo(() => {
        return shuffleArray(wrongLanguages)
    }, [wrongLanguages])

    const lostLanguages = randomizedWrongLanguages.slice(0, wrongGuessCount || 0)


    return (
        <section className='language-tiles'>
            {languages.map(lang => {
            
            const isLanguageLost = lostLanguages.includes(lang.name.toLowerCase().replace(/\./g, ''))

                
                return (
                    <span 
                        key={lang.name} 
                        style={{backgroundColor: lang.backgroundColor, color: lang.color}}
                        className={clsx('tile', {
                            lost: isLanguageLost
                        })}
                    >
                        {lang.name}
                    </span>
                )
            })}
        </section>
    )
}

export default LanguageTiles