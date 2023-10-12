import { createSlice, nanoid } from "@reduxjs/toolkit";


const itemsArray = [
    {
        id: nanoid(),
        title: 'Soldier Boy With Helmet (The Boys)',
        mainImage: 'https://cdn.awsli.com.br/300x300/84/84034/produto/226137463/pop--solider-boy-c-800-gm7wwr4x1i.jpg',
        price: 13.99,
        description: `It's a cool figure of soldier from The Boys series`,
        isFavorite: false,
    },
    {
        id: nanoid(),
        title: 'Soldier Boy No Helmet (The Boys)',
        mainImage: 'https://down-th.img.susercontent.com/file/th-11134207-7r98o-lkvwschotvmy98',
        price: 13.99,
        description: `It's a cool figure of soldier from The Boys series`,
        isFavorite: false
    },
    {
        id: nanoid(),
        title: 'Homelander Levitating (The Boys)',
        mainImage: 'https://i.citrus.world/imgcache/size_800/uploads/shop/2/d/2d15be086c80ab607f5b6171fb506bee.jpg',
        price: 14.99,
        description: `It's a cool figure of Homelander from The Boys series`,
        isFavorite: false
    },
    {
        id: nanoid(),
        title: 'Homelander Burning Eyes (The Boys)',
        mainImage: 'https://cdn.awsli.com.br/800x800/84/84034/produto/165246877/homellander3-cf3aayc2yj.jpg',
        price: 99.99,
        description: `It's a cool figure of soldier from The Boys series`,
        isFavorite: false
    },
    {
        id: nanoid(),
        title: 'The Deep (The Boys)',
        mainImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu4pBakL7IXmc1zREMXfV6JO18QnTQBciryU26NY5l1g90DYrUQJolNWGhyl3VK7C9M1s&usqp=CAU',
        price: 99.99,
        description: `It's a cool figure of soldier from The Boys series`,
        isFavorite: false
    },
    {
        id: nanoid(),
        title: 'Billy Butcher (The Boys)',
        mainImage: 'https://imtoys.com.ua/image/cache/catalog/catalog/pop_new/95ecaebf-a526-436a-85f5-ac86aad43754-1000x1000.jpg',
        price: 13.99,
        description: `It's a cool figure of Butcher from The Boys series`,
        isFavorite: false
    },
    {
        id: nanoid(),
        title: 'Billy Butcher Amazon Exclusive (The Boys)',
        mainImage: 'https://m.media-amazon.com/images/I/61kPHCmWWES._AC_UF894,1000_QL80_.jpg',
        price: 99.99,
        description: `It's a cool figure of soldier from The Boys series`,
        isFavorite: false
    },
    {
        id: nanoid(),
        title: 'Starlight Lighting Eyes (The Boys)',
        mainImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1D_4oj_zwFv1b4oi_9hJw-aQ6Kn5s2Xji4goIWZh10Nn4DCHLpP3hLD4wlfc2foxxdFs&usqp=CAU',
        price: 13.99,
        description: `It's a cool figure of soldier from The Boys series`,
        isFavorite: false
    },
    {
        id: nanoid(),
        title: 'A-Train (The Boys)',
        mainImage: 'https://api.worldofcomics.ua/file-manager-thumb/3024/48194-564x564.webp',
        price: 13.99,
        description: `It's a cool figure of soldier from The Boys series`,
        isFavorite: false
    },
    {
        id: nanoid(),
        title: 'A-Train Rebrended (The Boys)',
        mainImage: 'https://cdn.lojasonlinectt.pt/usercontent/pop-dimension/media/images/224a406-190539-funko-pop-the-boys-a-train-1406.jpg',
        price: 13.99,
        description: `It's a cool figure of soldier from The Boys series`,
        isFavorite: false
    },
    {
        id: nanoid(),
        title: 'Kimiko (The Boys)',
        mainImage: 'https://cdn.popcultcha.com.au/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/f/u/fun72122-03.png',
        price: 13.99,
        description: `It's a cool figure of soldier from The Boys series`,
        isFavorite: false
    },
    {
        id: nanoid(),
        title: 'Mother Milk (The Boys)',
        mainImage: 'https://www.pro-bems.com/IMAGES/images_1/FIGFUN72123/m/FIGFUN72123_1.png',
        price: 13.99,
        description: `It's a cool figure of soldier from The Boys series`,
        isFavorite: false
    },
    {
        id: nanoid(),
        title: 'Hughie (The Boys)',
        mainImage: 'https://api.worldofcomics.ua/file-manager-thumb/3026/48197-564x564.webp',
        price: 13.99,
        description: `It's a cool figure of soldier from The Boys series`,
        isFavorite: false
    },
    {
        id: nanoid(),
        title: 'Queen Maeve (The Boys)',
        mainImage: 'https://m.media-amazon.com/images/I/51NTV5o0wyL._AC_UF350,350_QL80_.jpg',
        price: 13.99,
        description: `It's a cool figure of soldier from The Boys series`,
        isFavorite: false
    },
    {
        id: nanoid(),
        title: 'Translucent (The Boys)',
        mainImage: 'https://api.worldofcomics.ua/file-manager-thumb/3025/48195-564x564.webp',
        price: 13.99,
        description: `It's a cool figure of soldier from The Boys series`,
        isFavorite: false
    },
    {
        id: nanoid(),
        title: 'Black Noir (The Boys)',
        mainImage: 'https://img.mta.ua/image/cache/data/foto/z554/554414/photos/Funko-Kolekciina-figurka-POP-TV-The-Boys-Black-Noir-FunKon-2021-Exc-48516-889698485166-01-600x600.jpg',
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
