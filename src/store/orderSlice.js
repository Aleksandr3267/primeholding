import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import instance from '../api';
import {showSingleErrorToast, showSingleSuccessToast} from "../utils/toastify.js";


export const createPurchase = createAsyncThunk('orders/createPurchase', async (data) => {
    try {
        const response = await instance.post('/orders', {
            type: "purchase",
            ...data
        });
        showSingleSuccessToast('Заказ успешно создан');
        return response.data;
    } catch (err) {
        showSingleErrorToast(err?.response?.data?.message || err?.message);
        return err;
    }
});

export const createBarter = createAsyncThunk('orders/createBarter', async (data, {dispatch, getState}) => {
    try {
        const response = await instance.post('/orders', {
            type: "barter",
            ...data
        });
        showSingleSuccessToast('Бартер успешно создан');
        return response.data;
    } catch (err) {
        showSingleErrorToast(err?.response?.data?.message || err?.message);
        return err;
    }
});

export const createRent = createAsyncThunk('orders/createRent', async (data, {dispatch, getState}) => {
    try {
        const response = await instance.post('/orders', {
            type: "rent",
            ...data
        });
        showSingleSuccessToast('Бронирование успешно создано')
        return response.data;
    } catch (err) {
        showSingleErrorToast(err?.response?.data?.message || err?.message);
        return err;
    }
});

export const createMortgage = createAsyncThunk('orders/createMortgage', async (data, {dispatch, getState}) => {
    try {
        const response = await instance.post('/orders', {
            type: "mortgage",
            ...data
        });
        showSingleSuccessToast('Рассрочка успешно создана');
        return response.data;
    } catch (err) {
        showSingleErrorToast(err?.response?.data?.message || err?.message);
        return err;
    }
});

export const cancelOrder = createAsyncThunk('orders/cancelOrder', async (data, {dispatch, getState}) => {
    try {
        const response = await instance.post('/orders/cancel', data);
        showSingleSuccessToast('Запрос на отмену успешно отправлен');
        return response.data;
    } catch (err) {
        showSingleErrorToast(err?.response?.data?.message || err?.message);
        return err;
    }
});


const orderSlice = createSlice({
    name: 'order',
    initialState: {
        data: {},
        loading: false,
    },
    reducers: {},
    extraReducers: {
        [createPurchase.pending]: (state, action) => {
            state.loading = true;
        },
        [createPurchase.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        [createPurchase.rejected]: (state, action) => {
            state.loading = false;
            state.data = {
                error: action.payload,
            };
        },
        [createBarter.pending]: (state, action) => {
            state.loading = true;
        },
        [createBarter.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        [createBarter.rejected]: (state, action) => {
            state.loading = false;
            state.data = {
                error: action.payload,
            };
        },
        [createRent.pending]: (state, action) => {
            state.loading = true;
        },
        [createRent.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        [createRent.rejected]: (state, action) => {
            state.loading = false;
            state.data = {
                error: action.payload,
            };
        },
        [createMortgage.pending]: (state, action) => {
            state.loading = true;
        },
        [createMortgage.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        [createMortgage.rejected]: (state, action) => {
            state.loading = false;
            state.data = {
                error: action.payload,
            };
        },
        [cancelOrder.pending]: (state, action) => {
            state.loading = true;
        },
        [cancelOrder.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        [cancelOrder.rejected]: (state, action) => {
            state.loading = false;
            state.data = {
                error: action.payload,
            };
        },
        [cancelOrder.pending]: (state, action) => {
            state.loading = true;
        },
        [cancelOrder.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        [cancelOrder.rejected]: (state, action) => {
            state.loading = false;
            state.data = {
                error: action.payload,
            };
        },
    },
});


export const selectOrder = ({order}) => order.data;
export const selectOrderLoading = ({order}) => order.loading;

export default orderSlice.reducer;
