import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TopRatedMovie from '../../src/components/TopRatedMovie/TopRatedMovie';
import { removeFromFavorites } from '../../src/store/favoritesSlice';
import { RootState } from '../../src/store/store';

const Favorites = () => {
  const dispatch = useDispatch();
  const removeFavorites = (id: number) => {
    dispatch(removeFromFavorites(id));
  };

  const { favorites } = useSelector((state: RootState) => state.favoritesReducer);
  console.log(favorites);
  return (
    <div>
      {favorites &&
        favorites.map((favorite) => (
          <TopRatedMovie
            key={favorite.id}
            topMovie={favorite}
            handle={() => removeFavorites(favorite.id)}
          />
        ))}
    </div>
  );
};
export default Favorites;
