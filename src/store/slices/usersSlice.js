import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        data: [
            {"id": 1, "name": "Andrew"}
        ],
        isLoading: false,
        error: null
    },
    extraReducers(builder) {
        builder.addCase(fetchUsers.pending, (state, action) => {
            //action.payload === response.data
            state.isLoading = true

        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
    }
})


export const usersReducer = usersSlice.reducers