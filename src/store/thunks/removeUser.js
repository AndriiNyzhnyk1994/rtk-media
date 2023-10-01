import { createAsyncThunk } from "@reduxjs/toolkit";

const removeUser = createAsyncThunk('user/remove', async (user) => {
    const response = await axios.delete(`http://localhost:3005/users/${user.id}`)

    // FIX !!!!
    return response.data
})


export { removeUser }