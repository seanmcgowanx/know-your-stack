import React from 'react'
import { languages } from '../data/languages'
import clsx from 'clsx'
import '../App.css'

interface Props {
    currentLanguage: string | null
    currentWord: string | null
    guessedLetters: (string | null)[]
    wrongGuessCount: number
    lostLanguages: string[] | null
}

const LanguageTiles = ({ currentLanguage, currentWord, guessedLetters, wrongGuessCount, lostLanguages }: Props) => {

    return (
        <section className='language-tiles'>
            {languages.map(lang => {
            
            const isLanguageLost = lostLanguages?.includes(lang.name)

                
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