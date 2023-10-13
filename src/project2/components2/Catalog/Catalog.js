import React from 'react'
import s from './Catalog.module.css'
import Item from '../Item/Item'
import { useDispatch, useSelector } from 'react-redux'
import { addToFavorites, removeFromFavorites } from '../../store2/slices/itemsSlice'
import { addToUserFavorites, removeFromUserFavorites } from '../../store2/slices/userSlice2'


function Catalog() {
    const items = useSelector(state => state.items.products)

    let content;
    if (items) {
        content = items.map(item => {
            return <Item key={item.id} itemInfo={item} />
        })
    }

    return (
        <div className={s.itemsCatalog}>
            {content}
            
        </div>
    )
}

export default Catalog