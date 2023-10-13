import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import s from './Favorites.module.css'
import Item from '../Item/Item';

function Favorites() {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user);

    let content;

    if (user.favoriteItems) {
        content = user.favoriteItems.map(item => {
            return <Item key={item.id} itemInfo={item} />
        })
    }

    return (
        <div className={s.itemsCatalog}>
            {content}
        </div>
    )
}

export default Favorites