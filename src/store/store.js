import { configureStore } from "@reduxjs/toolkit";
import formatReducer from './slice';

const store = configureStore({
    reducer: {
        format: formatReducer
    }
})

export default store;