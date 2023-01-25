import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/authSlice'

import { persistStore } from 'reduxjs-toolkit-persist'


export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
})

export default persistStore(store)
