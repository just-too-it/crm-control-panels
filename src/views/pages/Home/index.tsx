import { NewsList } from 'components/NewsList';
import { mockNews } from 'core/mockData/news';
import React from 'react';
import clsx from 'clsx';

import styles from './Home.module.scss';

export const Home = () => {
  return (
    <section className={clsx(styles.home, 'container')}>
      <h1 className={styles.title}>Новости</h1>
      <NewsList news={mockNews}/>
    </section>
  );
};
