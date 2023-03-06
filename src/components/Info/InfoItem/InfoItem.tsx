import { PropsWithChildren } from 'react';

import styles from './InfoItem.module.scss';

export type InfoItemProps = PropsWithChildren<{}>;

export const InfoItem = (props: InfoItemProps) => {
  const { children } = props;

  return (
    <li className={styles.item}>
      {children}
    </li>
  );
};
