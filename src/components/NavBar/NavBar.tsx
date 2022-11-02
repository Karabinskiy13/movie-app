import React from 'react';

import Link from 'next/link';

import Search from '../../../public/images/search.svg';
import Movie from '../../../public/images/movie.svg';
import Home from '../../../public/images/home.svg';
import Favourite from '../../../public/images/favourite.svg';
import { NavBarStyled, Icons } from '../../../styles/NavBar';

const NavBar = () => {
  return (
    <NavBarStyled>
      <Link href={'/'}>
        <Icons>
          <Home />
        </Icons>
      </Link>
      <Link href={'/genres'}>
        <Icons>
          <Movie />
        </Icons>
      </Link>
      <Link href={'/search'}>
        <Icons>
          <Search />
        </Icons>
      </Link>
      <Link href={'/top_rated'}>
        <Icons>
          <Favourite />
        </Icons>
      </Link>
    </NavBarStyled>
  );
};
export default NavBar;
