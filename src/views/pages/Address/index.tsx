import React, { useState } from 'react';

import { Search } from 'components/Search';

import styles from './Address.module.scss';

export const Address = () => {
  const [data, setData] = useState(null);

  return (
    <section className={styles.address}>
      <h1 className={styles.title}>Поиск адресов</h1>
      <div className={styles.description}>Введите интересующий вас адрес</div>
      <Search getData={setData} />
      {data && data.map((address) => <div key={address.value}>{address.value}</div>)}
    </section>
  );
};
