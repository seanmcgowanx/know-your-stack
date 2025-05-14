import React from 'react'
import { languages } from '../data/languages'

const LanguageTiles = () => {
    return (
        <section className='language-tiles'>
            {languages.map(lang => (
                <span 
                    key={lang.name} 
                    className='tile'
                    style={{backgroundColor: lang.backgroundColor, color: lang.color}}
                >
                    {lang.name}
                </span>
            ))}
        </section>
    )
}

export default LanguageTiles