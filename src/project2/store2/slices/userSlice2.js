import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
      id: 1,
      name: 'Bob',
      favoriteItems: [],
    },
    reducers: {
      addToUserFavorites: (state, action) => {
        state.favoriteItems.push({...action.payload, isFavorite: true});
      },
      removeFromUserFavorites: (state, action) => {
        state.favoriteItems = state.favoriteItems.filter((item) => item.id !== action.payload.id);
      },
    },
    
  });

  
export const { addToUserFavorites, removeFromUserFavorites } = userSlice.actions
export const userReducer = userSlice.reducer