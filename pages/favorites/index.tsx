import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TopRatedMovie from '../../src/components/TopRatedMovie/TopRatedMovie';
import { addToFavorites, selectFavoritesState } from '../../src/store/favoritesSlice';

const Favorites = () => {
  const dispatch = useDispatch();
  const { favorites } = useSelector(selectFavoritesState);

  const handle = (id: any) => {
    dispatch(addToFavorites(id));
  };
  return (
    <div>
      {favorites &&
        favorites.map((favorite) => <TopRatedMovie key={favorite.id} topMovie={favorite} />)}
    </div>
  );
};
export default Favorites;
