import React from 'react';

import GenresItem from '../../src/components/Genres/GenresItem';
import { genreService } from '../../src/services/genres.service';

import { GenresListStyle, GenresStyle, Heading } from '../../styles/Genres';
import { GenresPropsType } from '../../types';

export type GenresProps = {
  genres: GenresPropsType[];
};

const Genres = ({ genres }: GenresProps) => {
  return (
    <div>
      <GenresStyle>
        <GenresListStyle>
          <Heading>Genres</Heading>
          {genres && genres.map((genre) => <GenresItem key={genre.id} genre={genre} />)}
        </GenresListStyle>
      </GenresStyle>
    </div>
  );
};

export const getStaticProps = async () => {
  try {
    const result = await genreService.allGenres();
    const data = result.data.genres;
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
