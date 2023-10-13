import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import s from './Favorites.module.css'
import Item from '../Item/Item';

function Favorites() {
    const user = useSelector((state) => state.user);

    let content;

    if (user.favoriteItems.length) {
        content = user.favoriteItems.map(item => {
            return <Item key={item.id} itemInfo={item} />
        })
    } else {
        content = <h2>You don't have any products in your favorites yet</h2>
    }

    return (
        <div className={s.itemsCatalog}>
            {content}
        </div>
    )
}

export default Favorites