'use client';

import { usePathname } from 'next/navigation';

import { authForm } from '@/data/common.json';

const AuthForm = () => {
  const path = usePathname();
  const { signup, login } = authForm;
  console.log(signup.inputs);

  return (
    <>
      <h2 className="mb-3 text-center text-base font-semibold uppercase text-primary">
        {path === '/signup' ? signup.title : login.title}
      </h2>

      <div className="mx-auto max-w-[400px] rounded-3xl bg-white p-5">
        {path === '/signup' ? (
          // registration form
          <form>
            <ul className="flex flex-col gap-3">
              {signup.inputs.map(input => (
                <li key={input.name} className="flex flex-col gap-3">
                  {input.label && (
                    <label htmlFor={input.name}>{input.label}</label>
                  )}
                  <input
                    name={input.name}
                    id={input.name}
                    type={input.type}
                    placeholder={input.placeholder}
                    autoComplete={input.autocomplete}
                    required={input.required}
                  />
                </li>
              ))}
            </ul>
          </form>
        ) : (
          // login form
          <form>
            <ul className="flex flex-col gap-3">
              {login.inputs.map(input => (
                <li key={input.name} className="flex flex-col gap-3">
                  <input
                    name={input.name}
                    id={input.name}
                    type={input.type}
                    placeholder={input.placeholder}
                    autoComplete={input.autocomplete}
                    required={input.required}
                  />
                </li>
              ))}
            </ul>
          </form>
        )}
      </div>
    </>
  );
};

export default AuthForm;
