import { ReactNode } from 'react';

import styles from './Header.module.scss';

export type HeaderProps = {
  title: string | ReactNode;
};

export const Header = (props: HeaderProps) => {
  const { title } = props;

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        {title}
      </h1>
    </header>
  );
};
