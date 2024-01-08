import Link from 'next/link';
import LogoIcon from '@/public/icons/logo.svg';
import { logo } from '@/data/common.json';

const Logo = () => {
  const { link, linkAria, svgAria } = logo;

  return (
    <Link
      href={link}
      aria-label={linkAria}
      className="w-[120px] duration-300 ease-in hover:scale-105 md:w-[160px]"
    >
      <LogoIcon aria-label={svgAria} />
    </Link>
  );
};

export default Logo;
