'use client';

import classNames from 'classnames';

import getIconByName from '@/utils/getIconByName';

import { IconBtnProps } from './IconBtn.props';

const IconBtn: React.FC<IconBtnProps> = ({
  item,
  className,
  actionHandler,
}) => {
  const { iconRef: Icon } = getIconByName(item.svg);

  const btnStyles = classNames('flex justify-center items-center', className);

  return (
    <>
      {item.link ? (
        <a
          key={item.link}
          href={item.link}
          aria-label={item.linkAria}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className={btnStyles}
        >
          <Icon aria-label={item.svgAria} />
        </a>
      ) : (
        <button
          type="button"
          onClick={actionHandler}
          className={btnStyles}
          aria-label={item.text}
          title={item.text}
        >
          <Icon aria-label={item.svgAria} />
        </button>
      )}
    </>
  );
};

export default IconBtn;
