import React, { useState } from 'react'
import Header from './components2/Header/Header'
import Catalog from './components2/Catalog/Catalog'
import Favorites from './components2/Favorites/Favorites'
import ItemPage from './components2/ItemPage/ItemPage'


function App2() {
    // it will be 'items', 'favorites', 'item'
    const [pageStatus, setPageStatus] = useState('items')

    const changePageStatus = (newStatus) => {
        setPageStatus(newStatus)
    }
    
    
    
    let content;
    if( pageStatus === 'items') {
        content = <Catalog/>
    }
    if(pageStatus === 'favorites') {
        content = <Favorites/>
    }
    

    return (
        <div>
            <Header changePageStatus={changePageStatus} mainTitle={'FANCY SHOP'}/>
            {content}
        </div>
    )
}

export default App2