import React, { FC } from 'react';
import clsx from 'clsx';

import { SidebarProps } from './Sidebar.types';
import { SidebarItem } from './SidebarItem';

import styles from './Sidebar.module.scss';

export const Sidebar: FC<SidebarProps> = ({ items }) => {
  return (
    <div className={styles.sidebar}>
      <h2 className={styles.title}>Меню</h2>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.title} className={clsx(item.isSubmenu && styles.itemSubmenu, styles.item)}>
            <SidebarItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
