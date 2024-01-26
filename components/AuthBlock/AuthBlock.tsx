import Link from 'next/link';

import { authBlock } from '@/data/common.json';

const AuthBlock: React.FC = () => {
  return (
    <>
      <ul className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-12">
        {authBlock.buttons.map(btn => (
          <li key={btn.navLink}>
            <Link
              href={btn.navLink}
              className="block w-[180px] rounded-lg bg-accent py-3 text-center text-base font-medium text-white duration-300 ease-in hover:bg-primary focus:bg-primary xxl:w-[220px] xxl:text-xl"
            >
              {btn.text}
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-xs text-secondary md:text-sm xxl:mt-7 xxl:text-base">
        {authBlock.text}
      </p>
    </>
  );
};

export default AuthBlock;
