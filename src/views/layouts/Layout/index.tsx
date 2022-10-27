import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from 'components/Header';
import { SideBar } from 'components/Sidebar';

import styles from './Layout.module.scss';
import clsx from 'clsx';

export const Layout = () => {
  return (
    <>
      <Header />
      <div className={clsx(styles.content, 'container')}>
        <SideBar />
        <Outlet />
      </div>
    </>
  );
};
