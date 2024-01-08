import Link from 'next/link';
import classNames from 'classnames';

import { navigation } from '@/data/common.json';

import { NavigationProps } from './Navigation.props';

const Navigation: React.FC<NavigationProps> = ({ placement }) => {
  const navStyles = classNames({
    'flex flex-col gap-2 md:gap-3 md:flex-row': placement === 'footer',
  });

  const linkStyles = classNames(
    'font-medium text-sm text-center xl:text-base',
    'hover:text-accent focus:text-accent transition-all duration-300 ease-in',
  );

  return (
    <nav className={navStyles}>
      {navigation.links.map(item => (
        <Link key={item.link} href={item.link} className={linkStyles}>
          {item.text}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
