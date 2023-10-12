import React from 'react'
import s from './Catalog.module.css'
import Item from '../Item/Item'


function Catalog() {
    return (
        <div className={s.itemsCatalog}>
            <Item/>            
            <Item/>            
            <Item/>            
            <Item/>            
        </div>
    )
}

export default Catalog