import { createAsyncThunk } from "@reduxjs/toolkit";
import { goitApi, refresh} from "../auth/operations";



export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkApi) => {
    try {
        await refresh()
        const { data } = await goitApi.get('contacts')
        return data
    } catch (err) {
        return thunkApi.rejectWithValue(err.message)
    }
})

export const addContact = createAsyncThunk("contacts/addContact", async (body, thunkApi) => {
    try {
        const { data } = await goitApi.post('contacts', body)
        return data
    } catch (err) {
        return thunkApi.rejectWithValue(err.message)
    }
})

export const deleteContact = createAsyncThunk("contacts/deleteContact ", async (id, thunkApi) => {
    try {
        
        const { data } = await goitApi.delete(`contacts/${id}`)
        return data.id
    } catch (err) {
        return thunkApi.rejectWithValue(err.message)
    }
})


export const patchContact = createAsyncThunk("contacts/patchContact", async ({id, ...body}, thunkApi) => {
    try {
        
        const { data } = await goitApi.patch(`/contacts/${id}`, body )
        return data
    } catch (err) {
        return thunkApi.rejectWithValue(err.message)
    }
})

