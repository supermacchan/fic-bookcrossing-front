import classNames from 'classnames';

import MenuIcon from '@/public/icons/menu.svg';
import CloseIcon from '@/public/icons/close-icon.svg';

import { MobMenuButtonProps } from './MobMenuButton.props';

const BurgerMenuButton: React.FC<MobMenuButtonProps> = ({
  onClick,
  isMenu = false,
}) => {
  const btnStyles = classNames('flex justify-center items-center md:hidden', {
    'ml-auto': isMenu,
  });
  return (
    <button type="button" onClick={onClick} className={btnStyles}>
      {!isMenu ? (
        <MenuIcon width={32} height={32} className="stroke-primary" />
      ) : (
        <CloseIcon width={32} height={32} className="stroke-accent" />
      )}
    </button>
  );
};

export default BurgerMenuButton;
