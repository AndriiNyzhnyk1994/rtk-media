import { configureStore } from "@reduxjs/toolkit";
import { itemsReducer } from "./slices/itemsSlice";


export const store2 = configureStore({
    reducer: {
        items: itemsReducer
    }
})

