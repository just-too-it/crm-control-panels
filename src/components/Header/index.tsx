import clsx from 'clsx';
import { LogoIcon } from 'components/icons';
import { User } from 'components/User';
import { PagesLinks } from 'core/constants/pagesLinks';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './Header.module.scss';

export const Header = () => {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <div className={clsx('container', styles.container)}>
        {location.pathname === PagesLinks.HOME_PAGE ? (
          <div className={styles.logo}>
            <LogoIcon width={48} height={48} fill={'white'} />
            <div className={styles.title}>Wrench CRM</div>
          </div>
        ) : (
          <Link to={PagesLinks.HOME_PAGE} className={styles.link} title="Главная страница Wrench CRM">
            <div className={styles.logo}>
              <LogoIcon width={48} height={48} fill={'white'} />
              <div className={styles.title}>Wrench CRM</div>
            </div>
          </Link>
        )}
        <User />
      </div>
    </header>
  );
};
