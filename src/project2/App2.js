import React, { useState } from 'react'
import Header from './components2/Header/Header'
import Catalog from './components2/Catalog/Catalog'
import Favorites from './components2/Favorites/Favorites'
import ItemPage from './components2/ItemPage/ItemPage'
import { useDispatch, useSelector } from 'react-redux'


function App2() {

    const pageStatus = useSelector(state => state.pageStatus.status)
    const currentItem = useSelector(state => state.pageStatus.currentItem)


    let content;
    if (pageStatus === 'catalog') {
        content = <Catalog />
    }
    if (pageStatus === 'favorites') {
        content = <Favorites />
    }
    if (pageStatus === 'item') {
        content = <ItemPage itemInfo={currentItem} />
    }


    return (
        <div>
            <Header mainTitle={'FANCY SHOP'} />
            
            {content}
            
        </div>
    )
}

export default App2