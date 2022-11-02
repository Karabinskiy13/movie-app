import React from 'react';
import Link from 'next/link';
import { GenresInfoStyle, GenresItemStyle } from '../../../styles/Genres';

type Props = {
  genre: {
    name: string;
    id: number;
  };
};
const GenresItem = ({ genre }: Props) => {
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
