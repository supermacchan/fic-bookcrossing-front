'use client';

import Link from 'next/link';
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
      {/* external link */}
      {item.link && (
        <a
          href={item.link}
          aria-label={item.linkAria}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className={btnStyles}
        >
          <Icon aria-label={item.svgAria} />
        </a>
      )}

      {/* icon button */}
      {!item.link && !item.navLink && (
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

      {/* nav link */}
      {item.navLink && (
        <Link
          href={item.navLink}
          aria-label={item.linkAria}
          className={btnStyles}
          onClick={actionHandler}
        >
          <Icon aria-label={item.svgAria} />
        </Link>
      )}
    </>
  );
};

export default IconBtn;
