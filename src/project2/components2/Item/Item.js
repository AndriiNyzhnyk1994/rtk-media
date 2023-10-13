import React, { useState } from 'react'
import s from './Item.module.css'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { addToUserFavorites, removeFromUserFavorites } from '../../store2/slices/userSlice2'
import { store2 } from '../../store2/index2'

function Item({ itemInfo }) {
    const dispatch = useDispatch()

    const handleAddToFavorites = () => {
        dispatch(addToUserFavorites(itemInfo))
        console.log(store2.getState())
    }
    const handleRemoveFromFavorites = () => {
        dispatch(removeFromUserFavorites(itemInfo))
        console.log(store2.getState())
    }


    let isTrimmed = false
    let itemTitle = itemInfo.title

    if (itemTitle.length > 25) {
        isTrimmed = true
        itemTitle = itemInfo.title.slice(0, 25)
    }

    return (
        <div className={s.item + ' hover:bg-gray-200'}>
            {/* ITEM IMAGE */}
            <div className={s.itemImg}>
                <img src={itemInfo.mainImage} alt="item-photo" />
            </div>
            {/* ITEM PRICE */}
            <div className={`${s.price} font-bold text-xl`}>
                <span className='py-3 px-3'>${itemInfo.price}</span>
            </div>
            {/* ITEM NAME */}
            <div className={s.itemName}>
                <span>{itemTitle} {isTrimmed && '...'}</span>
            </div>
            {/* BUY OPTIONS */}
            <div className={s.buyOptions}>
                <button className='bg-blue-500 hover:bg-blue-700 text-xs  text-white font-medium py-2 px-4 rounded mt-1'>
                    ADD TO CART
                </button>
                {itemInfo.isFavorite
                    ? <MdFavorite onClick={handleRemoveFromFavorites} className={s.favorite} size={'1.5rem'} />
                    : <MdFavoriteBorder onClick={handleAddToFavorites} className={s.favorite} size={'1.5rem'} />
                }
            </div>
        </div>
    )
}

export default Item