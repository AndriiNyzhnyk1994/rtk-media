import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const albumsApi = createApi({
    reducerPath: 'albums',
    baseQuery:  fetchBaseQuery({
        baseUrl: 'http://localhost:3005'
    }),
    endpoints(builder) {
        return {
            fetchAlbums: builder.query({
                query: (user) => {
                    // parameter (user) in this function 
                    // and argument (user) in hook's call `useFetchAlbumsQuery(users)`
                    // is the same data.
                    // So, what we put in `useFetchAlbumsQuery` as argument, that will be `user` param 
                    return {
                        url: '/albums',
                        params: {
                            userId: user.id
                        },
                        method: 'GET'
                    }
                }
            })
        }
    }
})

export const { useFetchAlbumsQuery } = albumsApi
export { albumsApi }