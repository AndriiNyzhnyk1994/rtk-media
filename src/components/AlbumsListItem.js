import { GoTrash } from 'react-icons/go'
import React from 'react'
import ExpandeblePanel from './ExpandeblePanel'
import Button from './Button'
import { useRemoveAlbumMutation } from '../store'

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
        List of photos in the album
    </ExpandeblePanel>
}

export default AlbumsListItem