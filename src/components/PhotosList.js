import React from 'react'
import { useFetchPhotosQuery } from '../store'


function PhotosList({ album }) {
    const {} = useFetchPhotosQuery(album)
    
    return 'Photos List'
}

export default PhotosList