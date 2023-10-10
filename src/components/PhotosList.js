import React from 'react'
import { useAddPhotoMutation, useFetchPhotosQuery } from '../store'
import Button from './Button'


function PhotosList({ album }) {
    const {} = useFetchPhotosQuery(album)
    const [addPhoto, addPhotoResults] = useAddPhotoMutation()


    const handleAddPhoto = () => {
        addPhoto(album)
    }

    return <div>
        <div className='m-2 flex flex-row items-center justify-between'>
            <h3 className='text-lg font-bold'>Photos In {album.title}</h3>
            <Button  
            onClick={handleAddPhoto}
            loading={addPhotoResults.isLoading}>+ Add Photo</Button>
        </div>
    </div>
}

export default PhotosList