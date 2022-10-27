import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from 'components/Header';
import { Sidebar } from 'components/Sidebar';

import styles from './Layout.module.scss';
import clsx from 'clsx';
import { sidebarItems } from 'core/constants/sidebar';

export const Layout = () => {
  return (
    <>
      <Header />
      <div className={clsx(styles.content, 'container')}>
        <Sidebar items={sidebarItems} />
        <Outlet />
      </div>
    </>
  );
};
