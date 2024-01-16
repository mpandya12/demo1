// addressSlice.js
import { createSlice } from '@reduxjs/toolkit';

const addressSlice = createSlice({
  name: 'address',
  initialState: {
    addresses: [],
  },
  reducers: {
    addAddress: (state, action) => {
      state.addresses.push(action.payload);
    },
  },
});

export const { addAddress } = addressSlice.actions;
export default addressSlice.reducer;
