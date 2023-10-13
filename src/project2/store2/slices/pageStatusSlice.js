import { createSlice } from "@reduxjs/toolkit";

// variants of state: 'catalog', 'item', 'favorites', 'cart', 

const pageStatusSlice = createSlice({
    name: 'pageStatus',
    initialState: {
        status: 'catalog',
        currentItemPage: null
    },
    reducers: {
        changeToCatalog: (state, action) => {
            state.status = 'catalog'
        },
        changeToFavorites: (state, action) => {
            state.status = 'favorites'
        },
        changeToCart: (state, action) => {
            state.status = 'cart'
        },
        changeToItem: (state, action) => {
            state.status = 'item'
            state.currentItemPage = action.payload.item
        },
    }
}) 


export const pageStatusReducer = pageStatusSlice.reducer
export const { changeToCart, changeToCatalog, changeToItem, changeToFavorites } = pageStatusSlice.actions