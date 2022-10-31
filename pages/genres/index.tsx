import React from 'react';
import GenresItem from '../../src/components/Genres/GenresItem';
import { genreService } from '../../src/services/genres.service';

type Props = {
  genres: [
    {
      name: string;
      id: number;
    }
  ];
};

const Genres = ({ genres }: Props) => {
  return (
    <div>
      <div className="genres">
        <div className="allGenres">
          <h1>Genres</h1>
          {genres && genres.map((genre) => <GenresItem key={genre.id} genre={genre} />)}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  try {
    const result = await genreService.allGenres();
    const data = result.data.genres;
    console.log(data);

    return {
      props: {
        genres: data
      }
    };
  } catch (error) {
    console.log(error);
  }
};

export default Genres;
