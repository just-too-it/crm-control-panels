import clsx from 'clsx';
import React, { FC, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './SidebarItem.module.scss';
import { SidebarItemProps } from './SidebarItem.types';

export const SidebarItem: FC<{ item: SidebarItemProps }> = (props) => {
  const { icon, title, link, isSubmenu = false, submenu } = props.item;
  const submenuRef = useRef<HTMLUListElement>(null);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)

  const handleSubmenu = () => {
    if (submenuRef.current.style.height == '') {
      const scrollHeight = submenuRef.current?.scrollHeight;
      submenuRef.current.style.height = `${scrollHeight}px`;
      submenuRef.current.style.marginTop = '36px';
    //   submenuRef.current.style.marginLeft = '48px';
      submenuRef.current.style.overflow = 'visible';
    } else {
      submenuRef.current.style.height = '';
      submenuRef.current.style.margin = '0';
      submenuRef.current.style.marginLeft = '48px';
      submenuRef.current.style.overflow = 'hidden';
    }
    setIsSubmenuOpen(isSubmenuOpen => !isSubmenuOpen)
  };
  return (
    <>
      {!isSubmenu ? (
        <Link to={link} className={styles.item} title={title}>
          {icon} {title}
        </Link>
      ) : (
        <>
          <span onClick={handleSubmenu} className={clsx(styles.item, isSubmenuOpen ? styles.submenuTitleClose :styles.submenuTitleOpen)}>
            {icon} {title}
          </span>
          <ul className={styles.submenu} ref={submenuRef}>
            {submenu.map((item) => (
              <li key={item.title} className={styles.submenuItem}>
                <Link to={link} className={styles.item} title={title}>
                  {item.icon} {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
