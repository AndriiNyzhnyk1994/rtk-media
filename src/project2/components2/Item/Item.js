import React from 'react'
import soldierboy from '../../images/items/soldierboy.webp'
import s from './Item.module.css'

function Item() {

    const itemName = 'Soldier Boy. FunkoPop edition.Soldier Boy. FunkoPop edition.Soldier Boy. FunkoPop edition.Soldier Boy. FunkoPop edition.'
    let trimmedItemName;
    if (itemName.length >= 15) {
        trimmedItemName = itemName.slice(0, 25)
    }

    return (
        <div className={s.item + ' hover:bg-gray-200'}>
            <div className={s.itemImg}>
                <img src={soldierboy} alt="item-photo" />
            </div>
            <div className={s.itemName}>
                <span>{trimmedItemName}...</span>
            </div>
            <div className={s.buyOptions}>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mt-1'>BUY</button>
                <span className='py-1 px-5'>${'13.99'}</span>
            </div>
        </div>
    )
}

export default Item