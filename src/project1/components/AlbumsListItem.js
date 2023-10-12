import { GoTrash } from 'react-icons/go'
import React from 'react'
import ExpandeblePanel from './ExpandeblePanel'
import Button from './Button'
import { useRemoveAlbumMutation } from '../store'
import PhotosList from './PhotosList'


function AlbumsListItem({ album }) {

    const [removeAlbum, results] = useRemoveAlbumMutation()

    const handleRemoveAlbum = () => {
        removeAlbum(album)
    }

    const header = <>
        <Button
            className="mr-2"
            loading={results.isLoading}
            onClick={handleRemoveAlbum}
        >
            <GoTrash />
        </Button>
        {album.title}
    </>

    return <ExpandeblePanel key={album.id} header={header}>
        <PhotosList album={album}/>
    </ExpandeblePanel>
}

export default AlbumsListItem