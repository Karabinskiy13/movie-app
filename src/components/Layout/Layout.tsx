/* eslint-disable react/prop-types */
import React, { FC, ReactNode } from 'react';

import Header from '../Header/Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;
