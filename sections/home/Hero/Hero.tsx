import Image from 'next/image';

import { hero } from '@/data/homepage.json';

const Hero: React.FC = () => {
  return (
    <section>
      <div className="container xl:flex xl:gap-5">
        {/* image container */}
        <div className="-mx-5 md:-mx-8 xl:mx-0 xl:w-1/2">
          <Image
            src="/images/home/hero/01.jpg"
            alt="Coming soon"
            width={500}
            height={300}
            loading="lazy"
            className="w-full"
          />
        </div>

        {/* text block */}
        <div className="flex flex-col gap-4 py-5 text-sm xl:w-1/2 xl:gap-3">
          <h1 className="-mx-3 text-center text-base font-semibold text-primary md:mx-0 md:text-lg xl:text-left">
            {hero.title}
          </h1>
          <p>{hero.description}</p>
          <p>{hero.target}</p>
          {/* if !auth */}
          <p className="text-xs md:text-sm">{hero.auth.text}</p>
          {/* refactor + button client (onClick) */}
          <ul className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-12">
            <li>
              <button
                type="button"
                className="w-[180px] rounded-lg bg-accent py-3 font-medium text-white duration-300 ease-in hover:bg-primary focus:bg-primary"
              >
                {hero.auth.buttons.signup}
              </button>
            </li>
            <li>
              <button
                type="button"
                className="w-[180px] rounded-lg bg-accent py-3 font-medium text-white duration-300 ease-in hover:bg-primary focus:bg-primary"
              >
                {hero.auth.buttons.login}
              </button>
            </li>
          </ul>
          {/* end if !auth */}

          <div>
            <h2 className="mb-2 font-medium">{hero.rules.title}</h2>
            <ul className="list-inside list-disc">
              {hero.rules.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
