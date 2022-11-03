import React from 'react';
import Link from 'next/link';

import { GenresInfoStyle, GenresItemStyle } from '../../../styles/Genres';
import { GenresPropsType } from '../../../types';

type GenreProps = {
  genre: GenresPropsType;
};
const GenresItem = ({ genre }: GenreProps) => {
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
