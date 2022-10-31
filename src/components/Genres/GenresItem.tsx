import React from 'react';
import Link from 'next/link';

type Props = {
  genre: {
    name: string;
    id: number;
  };
};
const GenresItem = ({ genre }: Props) => {
  const { name, id } = genre;
  return (
    <div>
      <Link href={`/genres/${id}`}>
        <div className={'genre'}>
          <p>{name}</p>
        </div>
      </Link>
    </div>
  );
};

export default GenresItem;
