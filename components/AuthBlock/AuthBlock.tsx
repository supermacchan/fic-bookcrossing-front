import { authBlock } from '@/data/common.json';

import { AuthBlockProps } from './AuthBlock.props';

const AuthBlock: React.FC<AuthBlockProps> = ({ auth }) => {
  return (
    <>
      {' '}
      {!auth && (
        <>
          <ul className="flex flex-col items-center justify-center gap-4 text-base md:flex-row md:gap-12 xxl:text-xl">
            {/* TODO: refactor buttons */}
            <li>
              <button
                type="button"
                className="w-[180px] rounded-lg bg-accent py-3 font-medium text-white duration-300 ease-in hover:bg-primary focus:bg-primary xxl:w-[220px]"
              >
                {authBlock.buttons.signup}
              </button>
            </li>
            <li>
              <button
                type="button"
                className="w-[180px] rounded-lg bg-accent py-3 font-medium text-white duration-300 ease-in hover:bg-primary focus:bg-primary xxl:w-[220px]"
              >
                {authBlock.buttons.login}
              </button>
            </li>
          </ul>
          <p className="mt-5 text-xs text-secondary md:text-sm xxl:mt-7 xxl:text-base">
            {authBlock.text}
          </p>
        </>
      )}{' '}
    </>
  );
};

export default AuthBlock;
