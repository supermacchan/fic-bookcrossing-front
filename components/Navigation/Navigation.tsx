'use client';

import Link from 'next/link';
import classNames from 'classnames';

import { navigation } from '@/data/common.json';

import { NavigationProps } from './Navigation.props';

const Navigation: React.FC<NavigationProps> = ({
  placement,
  actionHandler,
}) => {
  const navStyles = classNames({
    'flex flex-col gap-2 md:gap-3 md:flex-row': placement === 'footer',
    'smOnly:hidden md:flex md:gap-4 md:flex-row xl:gap-10':
      placement === 'header',
    'flex flex-col gap-4 pt-3': placement === 'menu',
  });

  const linkStyles = classNames(
    'font-medium text-sm text-center xl:text-base',
    'hover:text-accent focus:text-accent transition-all duration-300 ease-in',
    {
      'text-xl uppercase': placement === 'menu',
      'xl:text-xl': placement === 'header',
    },
  );

  // modal toggle for mobile menu only
  const handleLinkClick = () => {
    if (placement !== 'menu') {
      return;
    }

    if (actionHandler) {
      actionHandler();
    }
  };

  return (
    <nav className={navStyles}>
      {placement === 'menu' && (
        <Link
          href={navigation.home.link}
          className={linkStyles}
          onClick={handleLinkClick}
        >
          {navigation.home.text}
        </Link>
      )}
      {navigation.links.map(item => (
        <Link
          key={item.link}
          href={item.link}
          className={linkStyles}
          onClick={handleLinkClick}
        >
          {item.text}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
