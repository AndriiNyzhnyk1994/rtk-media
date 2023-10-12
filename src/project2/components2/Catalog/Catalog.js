import React from 'react'
import s from './Catalog.module.css'
import Item from '../Item/Item'
import { useDispatch, useSelector } from 'react-redux'


function Catalog() {

    const dispatch = useDispatch()
    const items = useSelector(state => state.items)

    let content;
    if(items) {
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