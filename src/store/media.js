import { createSlice } from '@reduxjs/toolkit';

const media = createSlice({
  name: 'media',
  initialState: {
    isLoading: false,
    error: null,
    media: []
  },
  reducers: {
    getMediaStart(state) {
      state.isLoading = true;
    }
  }
});
