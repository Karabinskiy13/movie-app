import React from 'react';
import Link from 'next/link';

import { GenresInfoStyle, GenresItemStyle } from '../../../styles/Genres';
import { Genre } from '../../../types';

type GenresItem = {
  genre: Genre;
};
const GenresItem = ({ genre }: GenresItem) => {
  const { name, id } = genre;
  return (
    <GenresItemStyle>
      <Link href={`/genres/${id}`}>
        <GenresInfoStyle>{name}</GenresInfoStyle>
      </Link>
    </GenresItemStyle>
  );
};

export default GenresItem;
