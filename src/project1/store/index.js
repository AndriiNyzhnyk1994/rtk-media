import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";
import { setupListeners } from '@reduxjs/toolkit/query'
import { albumsApi } from "./apis/albumsApi";
import { photosApi } from "./apis/photosApi";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
        [photosApi.reducerPath]: photosApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(albumsApi.middleware)
            .concat(photosApi.middleware)
    }
})
// key 'albums' must be equal to reducerPath of albumsApi 
// otherwise (в противном случае) our code will not work
// so we needn't { 'albums': albumsApi.reducer } from now.
// We need { [albumsApi.reducerPath]: albumsApi.reducer } syntax 


setupListeners(store.dispatch)


export * from './thunks/fetchUsers'
export * from './thunks/addUser'
export * from './thunks/removeUser'
export {
    useAddAlbumMutation,
    useFetchAlbumsQuery,
    useRemoveAlbumMutation
} from './apis/albumsApi'
export {
    useFetchPhotosQuery,
    useAddPhotoMutation,
    useRemovePhotoMutation
} from './apis/photosApi'

// yes, it's export from another file, it's confusing
// here we catch all exported data from `fetchUsers` (now it's only fetchUsers variable)
// and creating export this catched data.
// From now, all our components can do import `fetchUsers` data from `index.js` file
// It's necessary to avoid the `circular dependency` (it is cause of a lot of errors)
// So we need to do import of all RTK features from the ONE file (index.js)

// If i got it right, `export * from './thunks/fetchUsers'` means that
// we do implicit (неявный) import of all exported entities from
// `fetchUsers` and then the data, that we have imported here to `index.js`
// we exporting out of `index.js` to our components