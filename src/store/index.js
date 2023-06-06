import { configureStore } from '@reduxjs/toolkit';
import apiKeyReducer from './apiKeySlice';

const store = configureStore({
  reducer: {
    apiKey: apiKeyReducer,
  },
});

export default store;
