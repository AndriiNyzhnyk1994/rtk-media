import { configureStore } from "@reduxjs/toolkit";
import { itemsReducer } from "./slices/itemsSlice";
import { userReducer } from "./slices/userSlice2";
import { pageStatusReducer } from "./slices/pageStatusSlice";


export const store2 = configureStore({
    reducer: {
        items: itemsReducer,
        user: userReducer,
        pageStatus: pageStatusReducer
    }
})

window.store = store2