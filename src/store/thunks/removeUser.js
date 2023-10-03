import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const removeUser = createAsyncThunk('user/remove', async (user) => {
    await axios.delete(`http://localhost:3005/users/${user.id}`)

    // FIX !!!!
    // return response.data
    // we cannot return response.data because 
    // DELETE request returns nothing and we can't sent nothing
    // as action.payload to our slice reducer.
    // We need to delete user in state so we don't know
    // what user must be deleted 
    
    // so, if response.data doesn't have any info about deleted user.
    // we can get this info from parameter of async function (`user`)
    // and from now we don't need `response` variable at all
    return user
})


export { removeUser }