import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import colorReducer from '../features/counter/colorSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        color: colorReducer,
    },
})