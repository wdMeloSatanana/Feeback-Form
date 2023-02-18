import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const FORMS_URL = 'localhost:3000/forms';

const initialState= {
    form: {
        name: "",
        email: "",
        message: ""
    },
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}

export const addNewForm = createAsyncThunk('posts/', async (newForm) => {
    const response = await axios.post(FORMS_URL, newForm);
    console.log(response.data);
    return response.data
})

export const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        sendForm: {
            reducer(state, action ){
                state.form = action.payload
            },
            prepare(name, email, message) {
                return {
                    payload: {
                        name,
                        email,
                        message
                    }
                }
            }
        },
        extraReducers(builder) {
            builder
                .addCase(addNewForm.fulfilled, (state, action) => {
                    
                    console.log(action.payload)
                    state.form = action.payload
                })
        }
    }
})

export const { sendForm } = formSlice.actions

export default formSlice.reducer