import { configureStore } from "@reduxjs/toolkit"
// const { configureStore } = require("@reduxjs/toolkit");

import cartReducer from "./cartSlice";


const appStore = configureStore({
    reducer:{
        cart:cartReducer,
    },
});

export default appStore