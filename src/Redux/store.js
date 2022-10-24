import {configureStore} from '@reduxjs/toolkit';
import timeActions from './slice.js'
export const store = configureStore({
    reducer:{
        timer:timeActions
    }
})