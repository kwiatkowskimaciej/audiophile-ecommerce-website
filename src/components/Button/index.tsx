import React, { ButtonHTMLAttributes, FC } from 'react';
import styles from './index.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  kind?: 'filled' | 'outlined' | 'text';
  disabled?: boolean;
};

const Button: FC<ButtonProps> = ({
  kind = 'filled',
  disabled = false,
  children,
  className,
  ...props
}) => {
  return (
    <button
      type="button"
      disabled={disabled}
      aria-disabled={disabled}
      className={[styles.button, styles[kind], className].join(' ')}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
