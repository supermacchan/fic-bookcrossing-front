import classNames from 'classnames';

import getIconByName from '@/utils/getIconByName';

import { IconBtnProps } from './IconBtn.props';

const IconBtn: React.FC<IconBtnProps> = ({ item, className }) => {
  const { iconRef: Icon } = getIconByName(item.svg);

  const btnStyles = classNames('flex justify-center items-center', className);

  const iconStyles = classNames('fill-current');

  return (
    <>
      <a
        key={item.link}
        href={item.link}
        aria-label={item.linkAria}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className={btnStyles}
      >
        <Icon className={iconStyles} aria-label={item.svgAria} />
      </a>

      {/* {url ? (
        <a
          href={url}
          onClick={onClick}
          rel="noopener noreferrer nofollow"
          target="_blank"
          className={`${btnStyles} ${className && className}`}
          aria-label={iconFunction}
        >
          <Icon className={iconStyles} aria-label={iconLabel} />
        </a>
      ) : (
        <button
          type="button"
          onClick={onClick}
          className={btnStyles}
          aria-label={iconFunction}
        >
          <Icon className={iconStyles} aria-label={iconLabel} />
        </button>
      )} */}
    </>
  );
};

export default IconBtn;
