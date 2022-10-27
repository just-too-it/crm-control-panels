import React, { useState } from 'react';

import { Search } from 'components/Search';

import styles from './Address.module.scss';
import { AddressList } from 'components/AddressList';

export const Address = () => {
  const [data, setData] = useState([]);

  return (
    <section className={styles.address}>
      <h1 className={styles.title}>Поиск адресов</h1>
      <div className={styles.description}>Введите интересующий вас адрес</div>
      <div className={styles.search}><Search getData={setData} /></div>
      <AddressList suggestions={data} />
    </section>
  );
};
