import React, { useContext } from 'react';
import { FavoritesContext } from '../../src/context/favoritesContext';

const Favorites = () => {
  const favorites = useContext(FavoritesContext);

  return (
    <div>
      <div>{favorites.id} </div>
      <div>{favorites.title}</div>
      <div>{favorites.poster_path}</div>
      <button>Remove</button>
    </div>
  );
};

export default Favorites;
