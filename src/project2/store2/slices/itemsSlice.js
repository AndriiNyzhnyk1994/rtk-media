import { createSlice, nanoid } from "@reduxjs/toolkit";


const itemsArray = [
    {
        id: nanoid(),
        title: 'Funko-Pop Soldier Boy With Helmet (The Boys)',
        mainImage: 'https://cdn.awsli.com.br/300x300/84/84034/produto/226137463/pop--solider-boy-c-800-gm7wwr4x1i.jpg',
        price: 13.99,
        description: `It's a cool figure of soldier from The Boys series`,
        isFavorite: false,
    },
    {
        id: nanoid(),
        title: 'Funko-Pop Soldier Boy No Helmet (The Boys)',
        mainImage: 'https://down-th.img.susercontent.com/file/th-11134207-7r98o-lkvwschotvmy98',
        price: 13.99,
        description: `It's a cool figure of soldier from The Boys series`,
        isFavorite: false
    },
]


const itemsSlice = createSlice({
    name: 'items',
    initialState: itemsArray,
    reducers: {
        removeItem: (state, action) => {
            const updated = state.filter(item => item.id !== action.payload.id)
            state = updated
        }
    }
})


export const {removeItem} = itemsSlice.actions
export const itemsReducer = itemsSlice.reducer
