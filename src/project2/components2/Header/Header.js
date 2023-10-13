import React from 'react'
import s from './Header.module.css'

function Header({mainTitle, changePageStatus}) {

    const handleItemsStatus = () => {
        changePageStatus('items')
    }

    const handleFavoritesStatus = () => {
        changePageStatus('favorites')
    }

    return (
        <header className={s.blackHeader}>
            <h1 onClick={handleItemsStatus} className={'font-sans text-xl cursor-pointer'}>{mainTitle}</h1>
            <button onClick={handleFavoritesStatus}>Favorites</button>
        </header>
    )
}

export default Header