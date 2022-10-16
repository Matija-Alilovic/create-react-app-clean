import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  id: string;
  error?: string;
}

const initialState: AuthState = {
  id: '',
  error: undefined,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

const { reducer } = authSlice;
export const {} = authSlice.actions;
export default reducer;
