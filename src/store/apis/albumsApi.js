import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { faker } from '@faker-js/faker'

//DEV ONLY!
// artificial delay function (simulaation of throttling)
const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration)
    })
}


const albumsApi = createApi({
    reducerPath: 'albums',
    baseQuery:  fetchBaseQuery({
        baseUrl: 'http://localhost:3005',
        fetchFn: async(...args) => {
            // REMOVE FOR PRODUCTION
            // it's just a function that makes an artificial delay of response
            await pause(1000)
            return fetch(...args)
        }
    }),
    endpoints(builder) {
        return {
            addAlbum: builder.mutation({
                invalidatesTags: (result, error, user) => {
                    return [{type: 'Album', id: user.id}]
                },
                query: (user) => {
                    return {
                        url: '/albums',
                        method: 'POST',
                        body: {
                            userId: user.id,
                            title: faker.commerce.productName()
                        }
                    }
                }
            }) ,
            fetchAlbums: builder.query({
                providesTags: (result, error, user) => {
                    // the third parameter is argument of hook's calling
                    // in this case it would be `user`
                    return [{type: 'Album', id: user.id}]
                },
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
                },
            })
        }
    }
})

export const {
     useAddAlbumMutation,
     useFetchAlbumsQuery } = albumsApi
export { albumsApi }