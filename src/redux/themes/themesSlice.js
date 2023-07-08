import { createSlice } from '@reduxjs/toolkit';

const themesInitialState = {
  lightTheme: true,
};

export const themesSlice = createSlice({
  name: 'themes',
  initialState: themesInitialState,
  reducers: {
    setTheme(state, action) {
      state.lightTheme = action.payload;
    },
  },
});

// Экспортируем генераторы экшенов и редюсер
export const { setTheme } = themesSlice.actions;
export const themesReducer = themesSlice.reducer;
