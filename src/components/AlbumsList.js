import React from 'react'
import {useAddAlbumMutation, useFetchAlbumsQuery } from '../store'
import Skeleton from './Skeleton';
import ExpandeblePanel from './ExpandeblePanel';
import Button from './Button';

function AlbumsList({ user }) {
    const { data, error, isLoading } = useFetchAlbumsQuery(user)
    // query hook for GET requests:
    // 1. returns an object with data and loading (+ error) status
    // 2. hook is calling automatically when our component did mount

    const [addAlbum, results] = useAddAlbumMutation()
    // mutatuin hook for POST, PUT, DELETE requests:
    // 1. returns an ARRAY with callback (`addAlbum` in this case)
    //    addAlbum is a function. This function accepts an argument 
    //    that passed into  endpoint `addAlbum` inside `albumsApi`
    // 2. also returned array have `result` element (object), that keep information
    //    about result of our request (isError, isLoading, isSuccess...)
    // 3. mutation hook give you a function to run when you want
    //    (onClick, onChange ect.) 

    const handleAddAlbum = () => {
        addAlbum(user)
    }

    let content;
    if (isLoading) {
        content = <Skeleton className='h-10 w-full' times={3} />
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
            <div className='m-2 flex flex-row items-center justify-between'>
                <h3 className='text-lg font-bold'>Albums for {user.name}</h3> 
                <Button loading={results.isLoading} onClick={handleAddAlbum}>+ Add album</Button>
            </div>
            <div>
                {content}
            </div>
        </div>
    )
}

export default AlbumsList