import React, { useState } from 'react'
import Header from './components2/Header/Header'
import Catalog from './components2/Catalog/Catalog'
import Favorites from './components2/Favorites/Favorites'


function App2() {
    // it will be 'items', 'favorites'
    const [pageStatus, setPageStatus] = useState('items')

    const changePageStatus = (newStatus) => {
        setPageStatus(newStatus)
    }
    
    
    
    let content;
    if( pageStatus === 'items') {
        content = <Catalog />
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