/* eslint-disable react/prop-types */
import React, { FC, ReactNode } from 'react';

import Header from '../Header/Header';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;
