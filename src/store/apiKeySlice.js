import { createSlice } from '@reduxjs/toolkit';

const loadApiKeyFromLocalStorage = () => {
  const apiKey = localStorage.getItem('apiKey');
  return apiKey ? apiKey : '';
};

const apiKeySlice = createSlice({
  name: 'apiKey',
  initialState: loadApiKeyFromLocalStorage(),
  reducers: {
    setApiKey: (state, action) => {
      return action.payload;
    },
  },
});

export const { setApiKey } = apiKeySlice.actions;

export default apiKeySlice.reducer;



