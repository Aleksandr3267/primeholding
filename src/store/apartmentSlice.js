import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import instance from '../api';

export const checkApartment = createAsyncThunk('apartment/checkApartment', async (data, { dispatch, getState }) => {
  try {
    const response = await instance.post('/apartments/check',  data);
    return response.data;
  } catch (err) {
    return err;
  }
});

export const fetchSimilarApartments = createAsyncThunk('apartment/fetchSimilarApartments', async (data, { dispatch, getState }) => {
    try {
      const response = await instance.post('/apartments/similar', data);
      return response.data;
    } catch (err) {
      return err;
    }
  }
);

const apartmentSlice = createSlice({
  name: 'apartment',
  initialState: {
      data: {},
      current: {},
      similar: [],
      loading: false,
  },
  reducers: {
      setCurrent: (state, action) => {
            state.current = action.payload;
      }
  },
  extraReducers: {
    [checkApartment.pending]: (state, action) => {
        state.loading = true;
    },
    [checkApartment.fulfilled]: (state, action) => {
        state.loading = false;
        state.data = action.payload;
    },
    [checkApartment.rejected]: (state, action) => {
        state.loading = false;
        state.data = {
            error: action.payload,
        };
    }
  },

  [fetchSimilarApartments.pending]: (state, action) => {
    state.loading = true;
  },
  [fetchSimilarApartments.fulfilled]: (state, action) => {
    state.loading = false;
    state.similar = action.payload;
  },
  [fetchSimilarApartments.rejected]: (state, action) => {
    state.loading = false;
    state.similar = {
      error: action.payload,
    };
  },
});

export const { setCurrent } = apartmentSlice.actions;


export const selectSimilarApartments = ({ apartment }) => apartment.similar;

export const selectApartment = ({ apartment }) => apartment.data;
export const selectApartmentLoading = ({ apartment }) => apartment.loading;
export const selectCurrentApartment = ({ apartment }) => apartment.current;

export default apartmentSlice.reducer;
