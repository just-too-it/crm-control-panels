import React, { FC } from 'react';

import { PersonIcon } from 'components/icons';
import { UserProps } from './UserProps.types';

import styles from './User.module.scss';

export const User: FC<UserProps> = ({ name, avatar }) => {
  return (
    <article className={styles.user}>
      {avatar ? <img src={avatar} width={48} height={48} /> : <PersonIcon width={48} height={48} stroke={'white'} />}
      <span className={styles.name}>{name ? name : 'Имя Фамилия'}</span>
    </article>
  );
};
