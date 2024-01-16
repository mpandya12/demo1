import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    user: {
    profile_img: "",
    name: "",
    email: "",
    phone:""
    },
    image: null,
    imageUrl:null,
    completedsteps:[]
  },
  reducers: {
    updateuser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
    updateImage: (state, action) => {
      state.image = action.payload;
    },
    updateImageUrl: (state, action) => {
        state.imageUrl = action.payload;
    },
    
      completed: (state, action) => {
        state.completedsteps= action.payload;
      },
    

  },
});

export const { updateuser, updateImage,updateImageUrl ,completed} = profileSlice.actions;

export default profileSlice.reducer;
