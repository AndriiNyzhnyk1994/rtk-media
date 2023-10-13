import { createSlice } from "@reduxjs/toolkit";

// variants of state: 'catalog', 'item', 'favorites', 'cart', 

const pageStatusSlice = createSlice({
    name: 'pageStatus',
    initialState: 'catalog'
}) 

