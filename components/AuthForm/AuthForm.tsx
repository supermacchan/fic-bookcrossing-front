'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { AuthInput } from '@/components';

import { authForm } from '@/data/common.json';

const AuthForm: React.FC = () => {
  const path = usePathname();
  const { signup, login } = authForm;
  let data;

  if (path === '/signup') {
    data = signup;
  } else {
    data = login;
  }

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
  };

  return (
    <>
      <div className="mx-auto max-w-[400px] rounded-3xl bg-white p-5 md:max-w-[500px] md:px-8 md:py-6 xxl:max-w-[600px] xxl:px-10">
        <form onSubmit={handleSubmit}>
          <ul className="flex flex-col gap-3 xl:gap-5 xxl:gap-6">
            {data.inputs.map(input => (
              <li
                key={input.name}
                className="flex flex-col gap-3 xl:gap-5 xxl:gap-6"
              >
                <AuthInput input={input} />
              </li>
            ))}
          </ul>
          <button
            type="submit"
            className="mt-4 block w-full rounded-lg bg-accent py-3 text-center text-base font-medium text-white duration-300 ease-in hover:bg-primary focus:bg-primary md:mx-auto xl:mt-5 xl:py-4 xxl:mt-6 xxl:text-xl"
          >
            {data.button}
          </button>
        </form>
      </div>

      <div className="mt-3 flex justify-center gap-2 text-xs md:text-sm xl:mt-5 xxl:text-base">
        <p>{data.alternative.text}</p>
        <Link
          href={data.alternative.link}
          className="underline transition-all duration-200 ease-in hover:text-accent hover:no-underline focus:text-accent focus:no-underline"
        >
          {data.alternative.linkText}
        </Link>
      </div>
    </>
  );
};

export default AuthForm;
