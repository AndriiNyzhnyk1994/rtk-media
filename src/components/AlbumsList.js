import React from 'react'
import {useAddAlbumMutation, useFetchAlbumsQuery } from '../store'
import Skeleton from './Skeleton';
import ExpandeblePanel from './ExpandeblePanel';
import Button from './Button';

function AlbumsList({ user }) {
    const { data, error, isLoading } = useFetchAlbumsQuery(user)
    const [addAlbum, results] = useAddAlbumMutation()
    
    const handleAddAlbum = () => {
        addAlbum(user)
    }


    let content;
    if (isLoading) {
        content = <Skeleton times={3} />
    } else if (error) {
        content = <div>Error loading albums</div>
    } else {
        content = data.map(album => {
            const header = <div>{album.title}</div>
            return <ExpandeblePanel key={album.id} header={header}>
                List of photos in the album
            </ExpandeblePanel>
        })
    }

    return (
        <div>
            <div>
                Albums for {user.name}
                <Button onClick={handleAddAlbum}>+ Add album</Button>
            </div>
            <div>
                {content}
            </div>
        </div>
    )
}

export default AlbumsList