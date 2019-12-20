import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const media = createSlice({
  name: 'media',
  initialState: {
    isRequested: false,
    isLoading: false,
    error: null,
    media: []
  },
  reducers: {
    getMediaRequest(state) {
      state.isLoading = true;
      state.media = [];
      state.isRequested = true;
    },
    getMediaSuccess(state, { payload }) {
      state.isLoading = false;
      state.media = payload;
      state.error = null;
    },
    getMediaFailed(state, { payload }) {
      state.isLoading = false;
      state.media = [];
      state.error = payload;
    }
  }
});

export const { getMediaRequest, getMediaSuccess, getMediaFailed } = media.actions;

export default media.reducer;

export const getMedia = (search) => async (dispatch) => {
  try {
    dispatch(getMediaRequest());
    const { data } = await axios.get(`https://itunes.apple.com/search?term=${search}`);
    dispatch(getMediaSuccess(data.results));
  } catch (error) {
    dispatch(getMediaFailed(error.toString()));
  }
};
