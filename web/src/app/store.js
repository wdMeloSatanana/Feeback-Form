import { configureStore} from '@reduxjs/toolkit'
import formsReducer from '../features/formSlice.js'

export const store = configureStore({
    reducer: {
        forms: formsReducer,
    }
})