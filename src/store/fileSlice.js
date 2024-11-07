import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import instance from '../api';

export const uploadSingleFile = createAsyncThunk('uploadSingleFile', async (data) => {
    try {
        const formData = new FormData();
        formData.append('file', data);
        const response = await instance.post('/upload/single', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        });
        return response.data;
    } catch (error) {
        return error;
    }
});


export const deleteFile = createAsyncThunk('deleteFile', async (id) => {
  try {
    const response = await instance.delete('/upload/delete', { data: { id } });
    return response;
  } catch (error) {
    return error;
  }
});


const fileSlice = createSlice({
  name: 'file',
  initialState: {
      loading: false,
      file: null,
  },
  reducers: {},
  extraReducers: {
      [uploadSingleFile.pending]: (state) => {
            state.loading = true;
        },
        [uploadSingleFile.fulfilled]: (state, action) => {
            state.loading = false;
            state.file = action.payload;
        },
        [uploadSingleFile.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [deleteFile.pending]: (state) => {
            state.loading = true;
        },
        [deleteFile.fulfilled]: (state, action) => {
            state.loading = false;
            state.file = action.payload;

        },
        [deleteFile.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
      }
  }
});

export const selectFile = ({file}) => file.file;
export const selectFileLoading = ({file}) => file.loading;

export default fileSlice.reducer;
