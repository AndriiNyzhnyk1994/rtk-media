import React from 'react'
import s from './ItemPage.module.css'

function ItemPage({ itemInfo }) {
  const { id, title, mainImage, price, description, isFavorite, category } = itemInfo
  return (
    <div className={s.productContainer}>
      <div className={s.imageBox}>
        <img src={mainImage} alt="Item Photo" />
      </div>
      <div className={s.itemInfo}>
          <h2 className='text-4xl font-medium'>{title}</h2>
        <b>$ {price}</b>
        <div>{description}</div>
      </div>
    </div>
  )
}

export default ItemPage