import { createSlice } from "@reduxjs/toolkit";
import { relationshipFilters } from "./constants";
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

const filtersInitialState = {
  relationship: relationshipFilters.All,
  filter: "",
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
    setRelationship(state, action) {
      state.relationship = action.payload;
    },
  },
});

// Экспортируем генераторы экшенов и редюсер
export const { setFilter, setRelationship } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

// const persistFiltersConfig = {
//   key: 'filter',
//   storage,
// };

// export const persistedFiltersReducer = persistReducer(
//   persistFiltersConfig,
//   filtersReducer
// );
