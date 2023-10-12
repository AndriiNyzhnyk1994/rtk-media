import React from 'react'
import s from './Header.module.css'

function Header({mainTitle}) {
    return (
        <header className={s.blackHeader}>
            <h1 className={'font-sans text-xl'}>{mainTitle}</h1>
        </header>
    )
}

export default Header