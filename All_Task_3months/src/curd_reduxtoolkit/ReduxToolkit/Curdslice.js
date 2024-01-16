import { createSlice } from "@reduxjs/toolkit";
import { actions } from "react-table";
const initialState = {
  data: [
  
  {name:"manushi1", username:"manushi12", gender:"female", dob:"2/2/2002", state:"gujarat", city:"ahmedabad", email:"manushi12@gmail.com"},
  {name:"manushi2", username:"manushi12", gender:"female", dob:"2/2/2002", state:"gujarat", city:"ahmedabad", email:"manushi12@gmail.com"},
  {name:"manushi3", username:"manushi12", gender:"female", dob:"2/2/2002", state:"gujarat", city:"ahmedabad", email:"manushi12@gmail.com"},
  {name:"manushi4", username:"manushi12", gender:"female", dob:"2/2/2002", state:"gujarat", city:"ahmedabad", email:"manushi12@gmail.com"},
  // {name:"manushi5", username:"manushi12", gender:"female", dob:"2/2/2002", state:"gujarat", city:"ahmedabad", email:"manushi12@gmail.com"},
  // {name:"manushi6", username:"manushi12", gender:"female", dob:"2/2/2002", state:"gujarat", city:"ahmedabad", email:"manushi12@gmail.com"},
  // {name:"manushi7", username:"manushi12", gender:"female", dob:"2/2/2002", state:"gujarat", city:"ahmedabad", email:"manushi12@gmail.com"},
  // {name:"manushi1", username:"manushi12", gender:"female", dob:"2/2/2002", state:"gujarat", city:"ahmedabad", email:"manushi12@gmail.com"},
  // {name:"manushi2", username:"manushi12", gender:"female", dob:"2/2/2002", state:"gujarat", city:"ahmedabad", email:"manushi12@gmail.com"},
  // {name:"manushi3", username:"manushi12", gender:"female", dob:"2/2/2002", state:"gujarat", city:"ahmedabad", email:"manushi12@gmail.com"},
  // {name:"manushi4", username:"manushi12", gender:"female", dob:"2/2/2002", state:"gujarat", city:"ahmedabad", email:"manushi12@gmail.com"},
  // {name:"manushi5", username:"manushi12", gender:"female", dob:"2/2/2002", state:"gujarat", city:"ahmedabad", email:"manushi12@gmail.com"},
  // {name:"manushi6", username:"manushi12", gender:"female", dob:"2/2/2002", state:"gujarat", city:"ahmedabad", email:"manushi12@gmail.com"},
  // {name:"manushi7", username:"manushi12", gender:"female", dob:"2/2/2002", state:"gujarat", city:"ahmedabad", email:"manushi12@gmail.com"},





  ],
  editData: {},
  editId: null,
  currentPage: 1,
  totalPages: 1,
  data1:[],
  GuideIndex:[],
  completedsteps:[]
};

const curdSlice = createSlice({
  name: "AddFrom",
  initialState,
  reducers: {
    AddFrom: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    DeleteFrom: (state, action) => {
      state.data = state.data.filter((data) => data.id !== action.payload);
    },
    deleteCheckbox: (state, action) => {
      state.data = state.data.filter(
        (item) => !action.payload.includes(item.id)
      );
    },
    UpdateFrom: (state, action) => {
      // Store the user data for binding
      state.editData = action.payload;
      state.editId = action.payload.id;
    },
    EditFrom: (state, action) => {
      const updatedData = state.data.map((emp) => {
        if (state.editId === emp.id) {
          const empData = { ...action.payload };
          return empData;
        } else {
          return emp;
        }
      });
      state.data = updatedData;
    },
    searchEmployees: (state, action) => {
      const searchQuery = action.payload;

      // Filter data based on search query
      state.data = state.data.filter((emp) => {
        return (
          emp.name.toLowerCase().includes(searchQuery) ||
          emp.username.toLowerCase().includes(searchQuery) ||
          emp.email.toLowerCase().includes(searchQuery) ||
          emp.Address.toLowerCase().includes(searchQuery)
        );
      });
    },
    importdata: (state, action) => {
      state.data = action.payload;
    },
    currentdata:(state,action)=>{
      state.data=action.payload
    },
    AddressAdd:(state,action)=>{
      state.data1=action.payload
    },
    GuideIndex:(state,action)=>{
      state.GuideIndex=action.payload
    },
    complected: (state, action) => {
      state.completedsteps= action.payload;
    },
  },
});

export const {
  AddFrom,
  DeleteFrom,
  UpdateFrom,
  EditFrom,
  searchEmployees,
  autoSuggestions,
  clearAutoSuggestions,
  importdata,
  deleteCheckbox,
  currentdata,
  AddressAdd,
  GuideIndex,
  complected
  

} = curdSlice.actions;

export default curdSlice.reducer;
