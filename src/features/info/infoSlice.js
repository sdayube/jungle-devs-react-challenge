import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const newsletterSubscribe = createAsyncThunk(
  'newsletter/sendRequest',
  async (_, thunkAPI) => {
    const { user } = thunkAPI.getState().newsletter;
    const response = await axios.post('https://api.jungledevs.com/api/v1/challenge-newsletter/', user);
    return response;
  },
);

export const infoSlice = createSlice({
  name: 'newsletter',
  initialState: {
    loading: 'idle',
    user: {
      name: '',
      email: '',
    },
  },
  reducers: {
    save: (state, action) => ({ ...state, user: action.payload }),
  },
  extraReducers: {
    [newsletterSubscribe.pending]: (state) => ({ ...state, loading: 'pending' }),
    [newsletterSubscribe.fulfilled]: (state) => ({ ...state, loading: 'fulfilled' }),
    [newsletterSubscribe.rejected]: (state) => ({ ...state, loading: 'rejected' }),
  },
});

export const { save } = infoSlice.actions;
export default infoSlice.reducer;
