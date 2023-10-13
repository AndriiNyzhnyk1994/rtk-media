import React from 'react'
import s from './Catalog.module.css'
import Item from '../Item/Item'
import { useDispatch, useSelector } from 'react-redux'


function Catalog({ changePageStatus }) {
    const items = useSelector(state => state.items.products)


    let content;
    if (items.length) {
        content = items.map(item => {
            const handleItemPageStatus = () => {
                changePageStatus('item')
            }
            return <Item onClick={handleItemPageStatus} key={item.id} itemInfo={item} />
        })
    }
    

    return (
        <div className={s.itemsCatalog}>
            {content}
        </div>
    )
}

export default Catalog