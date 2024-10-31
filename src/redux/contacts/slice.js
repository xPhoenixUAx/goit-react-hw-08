import { createSelector, createSlice, isAnyOf } from "@reduxjs/toolkit"
import {fetchContacts, addContact, deleteContact, patchContact} from './operations'
import toast from "react-hot-toast"
import { logout } from "../auth/operations"
import { selectContacts } from "./selectors"
import { selectNameFilter } from "../filters/selectors"





const initialState = {
  contacts: {
    items: [],
    loading: false,
    error: null
  }
}


const slice = createSlice({
    name: 'contacts',
    initialState,
        extraReducers: builder => {
        builder
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.contacts.items = action.payload
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.contacts.items.push(action.payload)
                toast.success('Contact successfully created.', {
                     position: "bottom-left"
                })
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.contacts.items = state.contacts.items.filter(item => item.id !== action.payload)
                toast.success('Contact successfully deleted.', {
                     position: "bottom-left"
                })
            })
            .addCase(patchContact.fulfilled, (state, action) => {
                const index = state.contacts.items.findIndex(item => item.id === action.payload.id)
                state.contacts.items[index] = action.payload
                toast.success('Contact successfully edited.', {
                     position: "bottom-left"
                })
            })
            .addCase(logout.fulfilled, () => initialState)

            .addMatcher(isAnyOf(fetchContacts.pending, addContact.pending, deleteContact.pending, patchContact.pending), (state) => {
                state.contacts.loading = true
            })
            .addMatcher(isAnyOf(fetchContacts.fulfilled, addContact.fulfilled, deleteContact.fulfilled, patchContact.fulfilled), (state) => {
                state.contacts.loading = false
            })
            .addMatcher(isAnyOf(fetchContacts.rejected, addContact.rejected, deleteContact.rejected, patchContact.rejected), (state, action) => {
                state.contacts.loading = false
                state.contacts.error = action.payload
                toast.error('Something went wrong, please try again.', {
                     position: "bottom-left"
                })
            })
    }
})





export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter], (contacts, str) => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(str.toLowerCase().trim()) || contact.number.includes(str))
})


export const contactsReducer = slice.reducer

