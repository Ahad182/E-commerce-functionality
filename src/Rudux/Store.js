import { configureStore } from "@reduxjs/toolkit";
import CartSlicer from "./Slicers/CartSlicer";


export const Store = configureStore({
    reducer:{
        cart:CartSlicer
    }

})