import {configureStore} from "@reduxjs/toolkit"
import curdreducer from "./Curdslice"
import   addressReducer from "./Address"
import Multiple from "./Multiple";

const store =configureStore({
    reducer:{
        AddFrom:curdreducer,
        address:   addressReducer,
        MultiAdress:Multiple,
        devTools: process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION_(),
    }
})

export default store;