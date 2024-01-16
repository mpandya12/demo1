import {configureStore} from "@reduxjs/toolkit"
import Slice from "./Slice";
import Toureslice from "./Toureslice";

const store =configureStore({
    reducer:{
        Slice:Slice,
        tour: Toureslice,
        devTools: process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION_(),
    }
})

export default store;

