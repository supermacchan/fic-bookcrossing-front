'use client';

import classNames from 'classnames';

import { IconBtn } from '@/components';

import { authNav } from '@/data/common.json';
import { AuthMenuProps } from './AuthMenu.props';

const AuthMenu: React.FC<AuthMenuProps> = ({ placement, actionHandler }) => {
  const { authorized, nonAuthorized } = authNav;

  // TEMP FOR DEVELOPMENT
  const auth = false;

  // modal toggle for mobile menu only
  const handleBtnClick = () => {
    if (placement !== 'menu') {
      return;
    }

    if (actionHandler) {
      actionHandler();
    }
  };

  const authMenuStyles = classNames('flex gap-3', {
    'smOnly:hidden xl:gap-6': placement === 'header',
    'mt-10 justify-center gap-5': placement === 'menu',
  });

  const authButtonStyles = classNames(
    'stroke-primary duration-200 ease-in hover:stroke-accent focus:stroke-accent',
    {
      'h-[46px] w-[46px] rounded-xl bg-coldBg p-2': placement === 'menu',
      'h-[24px] w-[24px] xl:h-[32px] xl:w-[32px]': placement === 'header',
    },
  );

  return (
    <div className={authMenuStyles}>
      {/* TODO: refactor */}
      {auth
        ? authorized.map(item => (
            <IconBtn
              key={item.svg}
              item={item}
              actionHandler={handleBtnClick}
              className={authButtonStyles}
            />
          ))
        : nonAuthorized.map(item => (
            <IconBtn
              key={item.svg}
              item={item}
              actionHandler={handleBtnClick}
              className={authButtonStyles}
            />
          ))}
    </div>
  );
};

export default AuthMenu;
