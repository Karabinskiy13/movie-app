/* eslint-disable react/react-in-jsx-scope */

import { genreService } from '../src/services/genres.service';

export const getStaticProps = async () => {
  try {
    const result = await genreService.allGenres();
    const data = result.data;
    console.log(data);

    return {
      props: {
        data: data
      }
    };
  } catch (error) {
    console.log(error);
  }
};
export default function Home() {
  return <div></div>;
}
