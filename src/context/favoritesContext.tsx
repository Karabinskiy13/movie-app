import React, { useReducer } from 'react';
import { createContext } from 'react';
import { Movie } from '../../types';

export type FavoritesState = {
  favorites: Movie[];
};

const initialState: FavoritesState = {
  favorites: []
};

export const FavoritesContext = createContext(initialState);

const favoritesReducer = (state: any, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_TO_FAVORITES':
      return {
        ...state,
        favorites: payload.favorites
      };

    case 'REMOVE_FROM_FAVORITES':
      return {
        ...state,
        favorites: payload.favorites
      };

    default:
      throw new Error('No case for that type');
  }
};
export const FavoritesProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(favoritesReducer, initialState);
  const addToFavorites = (movie = 'signal') => {
    const updatedFavorites = [...state.favorites, movie];
    // const index = state.favorites.findIndex((el: Movie) => el.id == movie.id);
    // if (index == -1) state.favorites = [...state.favorites, movie];

    dispatch({
      type: 'ADD_TO_FAVORITES',
      payload: {
        favorites: updatedFavorites
      }
    });
  };

  const removeFromFavorites = (id: number) => {
    const updatedFavorites = state.favorites.filter((movie: Movie) => movie.id !== id);

    dispatch({
      type: 'REMOVE_FROM_FAVORITES',
      payload: {
        favorites: updatedFavorites
      }
    });
  };
  const value = {
    favorites: state.favorites,
    addToFavorites,
    removeFromFavorites
  };

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
};
