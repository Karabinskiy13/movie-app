import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteFilm from '../../src/components/Favorites/Favorites';

import { removeFromFavorites } from '../../src/store/favoritesSlice';
import { RootState } from '../../src/store/store';
import { FavoritesWrapper } from '../../styles/Favorites';

const Favorites = () => {
  const dispatch = useDispatch();
  const removeFavorites = (id: number) => {
    dispatch(removeFromFavorites(id));
  };

  const { favorites } = useSelector((state: RootState) => state.favoritesReducer);
  console.log(favorites);
  return (
    <FavoritesWrapper>
      {favorites &&
        favorites.map((favorite) => (
          <FavoriteFilm
            key={favorite.id}
            favoriteFilm={favorite}
            handle={() => removeFavorites(favorite.id)}
          />
        ))}
    </FavoritesWrapper>
  );
};
export default Favorites;
