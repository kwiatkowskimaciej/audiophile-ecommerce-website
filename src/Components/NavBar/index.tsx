import { FC, HTMLAttributeAnchorTarget } from 'react';
import Link from 'next/link';
import Logo from '../Logo';
import Cart from '../Cart';
import NavItem from '../NavItem';

import styles from './index.module.scss';

type NavBarProps = {
  navItems: Array<{
    text: string;
    link: string;
    target?: HTMLAttributeAnchorTarget | undefined;
  }>;
  type: 'navigation' | 'footer';
};

const NavBar: FC<NavBarProps> = ({ navItems, type = 'navigation' }) => {
  return (
    <nav
      className={[
        styles.navbarContainer,
        type === 'footer' && styles.navbarContainerFooter,
      ].join(' ')}
    >
      <Link href="/" aria-label="Home">
        <Logo />
      </Link>

      <div className={styles.navbarItems}>
        {navItems.map(({ text, link, target }) => (
          <NavItem key={link} href={link} target={target}>
            {text}
          </NavItem>
        ))}
      </div>

      {type === 'navigation' && <Cart />}
    </nav>
  );
};

export default NavBar;
