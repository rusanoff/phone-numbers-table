import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from 'react';

import styles from './Button.module.scss';
import cn from 'classnames';

type ButtonDefaultProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export type ButtonProps = PropsWithChildren<Pick<ButtonDefaultProps, 'type' | 'disabled' | 'className'>>;

export const Button = (props: ButtonProps) => {
  const {
    type,
    disabled,
    className,
    children,
  } = props;

  return (
    <button
      className={cn(styles.button, className)}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
