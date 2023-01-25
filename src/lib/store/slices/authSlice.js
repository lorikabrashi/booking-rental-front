import { createSlice } from '@reduxjs/toolkit'
import storage from 'reduxjs-toolkit-persist/lib/storage'
import { persistReducer } from 'reduxjs-toolkit-persist'

const persistConfig = {
  key: 'auth',
  storage,
}

const initialState = {
  value: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload
    },
    logout: (state) => {
      state = initialState
    },
  },
})

export const { login, logout } = authSlice.actions
export default persistReducer(persistConfig, authSlice.reducer) 
