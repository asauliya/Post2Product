import { createSlice } from '@reduxjs/toolkit'

export const generatedSlice = createSlice({
  name: 'generated',
  initialState: {
    title : "",
    description: "",
    keywords : ""
  },
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setDesc: (state, action) => {
        state.description = action.payload;
    },
    setKeyword: (state, action) => {
      state.keywords = action.payload;
  }
  }
})

// Action creators are generated for each case reducer function
export const { setTitle, setDesc, setKeyword } = generatedSlice.actions

export default generatedSlice.reducer