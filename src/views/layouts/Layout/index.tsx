import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from 'components/Header';
import { SideBar } from 'components/Sidebar';

export const Layout = () => {
  return (
    <>
      <Header />
      <SideBar />
      <Outlet />
    </>
  );
};
