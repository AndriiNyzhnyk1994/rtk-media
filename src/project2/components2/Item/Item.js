import React, { useState } from 'react'
import soldierboy from '../../images/items/soldierboy.webp'
import s from './Item.module.css'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

function Item({ itemInfo }) {
    let isTrimmed = false
    let itemTitle = itemInfo.title

    if (itemTitle.length > 30) {
        isTrimmed = true
        itemTitle = itemInfo.title.slice(0, 30)
    }

    return (
        <div className={s.item + ' hover:bg-gray-200'}>
            <div className={s.itemImg}>
                <img src={itemInfo.mainImage} alt="item-photo" />
            </div>
            <div className={`${s.price} font-bold text-xl`}>
                <span className='py-3 px-3'>${'13.99'}</span>
            </div>
            <div className={s.itemName}>
                <span>{itemTitle} {isTrimmed && '...'}</span>
            </div>
            <div className={s.buyOptions}>
                <button className='bg-blue-500 hover:bg-blue-700 text-xs  text-white font-medium py-2 px-4 rounded mt-1'>
                    ADD TO CART
                </button>
                {itemInfo.isFavorite
                    ? <MdFavorite className={s.favorite} size={'1.5rem'} />
                    : <MdFavoriteBorder className={s.favorite} size={'1.5rem'} />
                }
            </div>
        </div>
    )
}

export default Item