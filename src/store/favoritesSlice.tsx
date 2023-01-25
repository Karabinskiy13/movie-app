import { createSlice } from '@reduxjs/toolkit';

import { HYDRATE } from 'next-redux-wrapper';
import { Movie } from '../../types';

export interface FavoritesState {
  favorites: Movie[];
}

const initialState: FavoritesState = {
  favorites: []
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites(state, { payload }: { payload: Movie }) {
      const index = state.favorites.findIndex((el: Movie) => el.id == payload.id);
      if (index == -1) state.favorites = [...state.favorites, payload];
    },

    removeFromFavorites(state, { payload }) {
      state.favorites = state.favorites.filter((favorite) => favorite.id !== payload);
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.favorites
      };
    }
  }
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
const favoritesReducer = favoritesSlice.reducer;

export default favoritesReducer;
