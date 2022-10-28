import React from 'react';
import { Outlet } from 'react-router-dom';
import clsx from 'clsx';

import { Header } from 'components/Header';
import { Sidebar } from 'components/Sidebar';
import { sidebarItems } from 'core/constants/sidebar';

import styles from './Layout.module.scss';

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
