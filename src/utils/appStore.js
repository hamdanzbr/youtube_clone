import { configureStore } from "@reduxjs/toolkit";
import appReducer from './appSlice.js';
import videoReducer from './videoSlice.js'
import searchReducer from './searchSlice.js'
const appStore=configureStore({
reducer:{
    app:appReducer,
    videos:videoReducer,
    search:searchReducer
}
})

export default appStore;