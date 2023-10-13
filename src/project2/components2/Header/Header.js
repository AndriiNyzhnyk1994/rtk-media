import React from 'react'
import s from './Header.module.css'
import { useDispatch } from 'react-redux'
import { changeToCatalog, changeToFavorites } from '../../store2/slices/pageStatusSlice'

function Header({mainTitle}) {
    const dispatch = useDispatch()

    const handleCatalogStatus = () => {
        dispatch(changeToCatalog())
    }

    const handleFavoritesStatus = () => {
        dispatch(changeToFavorites())
    }

    return (
        <header className={s.blackHeader}>
            <h1 onClick={handleCatalogStatus} className={'font-sans text-xl cursor-pointer'}>{mainTitle}</h1>
            <button onClick={handleFavoritesStatus}>Favorites</button>
        </header>
    )
}

export default Header