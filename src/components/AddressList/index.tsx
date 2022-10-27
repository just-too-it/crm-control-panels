import React, { FC } from 'react';

import { SuggestionsDTO } from './AddressList.types';

import styles from './AddressList.module.scss';

export const AddressList: FC<SuggestionsDTO> = ({ suggestions }) => {
  return (
    <>
      {suggestions.length > 1 && (
        <section className={styles.addresses}>
          <h2 className={styles.title}>Адреса</h2>
          <ul className={styles.list}>
            {suggestions && suggestions.map((address) => <li key={address.value} className={styles.item}>{address.value}</li>)}
          </ul>
        </section>
      )}
    </>
  );
};
