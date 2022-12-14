import React from 'react';

import { NewsList } from 'components/NewsList';
import { mockNews } from 'core/mockData/news';

import styles from './Home.module.scss';

export const Home = () => {
  return (
    <section className={styles.home}>
      <h1 className={styles.title}>Новости</h1>
      <NewsList news={mockNews} />
    </section>
  );
};
