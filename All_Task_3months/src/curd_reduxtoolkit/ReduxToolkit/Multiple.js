import {createSlice} from "@reduxjs/toolkit"

const initialState={
    Address:[
        // {
        //     city:"ahnedabad",
        //     state:"Gujarat",
        //     pincode:"123"
        // },
        // {
        //     city:"mumbai",
        //     state:"maharast",
        //     pincode:"156"
        // }
    ]
}

const MultipalAddress=createSlice({
   name:"MultipalAddress",
    initialState,
   reducers:{
    AdressAction:(state,action)=>{
      state.Address.push(action.payload)
    },
    DeleteAddress:(state,action)=>{
       state.Address=state.Address.filter((Address)=>Address.id !== action.payload)
    }
   }
})

export const {AdressAction,DeleteAddress}=MultipalAddress.actions
export default MultipalAddress.reducer