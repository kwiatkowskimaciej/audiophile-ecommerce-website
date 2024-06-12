import Link from 'next/link';
import { FC, HTMLAttributeAnchorTarget, PropsWithChildren } from 'react';
import styles from './index.module.scss';

type NavItemProps = {
  href: string;
  className?: string;
  target?: HTMLAttributeAnchorTarget | undefined;
};

const NavItem: FC<PropsWithChildren<NavItemProps>> = ({
  href = '',
  children,
  className,
  target,
}) => {
  return (
    <Link
      href={href}
      className={[styles.navItem, className].join(' ')}
      target={target}
    >
      {children}
    </Link>
  );
};

export default NavItem;
