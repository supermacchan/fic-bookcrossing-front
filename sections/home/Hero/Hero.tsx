import Image from 'next/image';

import { AuthBlock } from '@/components';

import { hero } from '@/data/homepage.json';

const Hero: React.FC = () => {
  // TEMP
  const auth = false;

  return (
    <section>
      <div className="container xl:flex xl:gap-7">
        {/* image container */}
        <div className="-mx-5 md:-mx-8 xl:mx-0 xl:w-1/2">
          <Image
            src="/images/home/hero/01.jpg"
            alt="Coming soon"
            width={500}
            height={300}
            priority
            className="w-full"
          />
        </div>

        {/* text block */}
        <div className="pt-5 text-sm md:text-base xl:w-1/2 xl:pt-10 xxl:text-xl">
          <h1 className="-mx-3 mb-4 text-center text-base font-semibold uppercase text-primary md:mx-0 md:text-lg xl:text-left xl:text-2xl xxl:mb-6">
            {hero.title}
          </h1>
          <p className="mb-3">{hero.description}</p>
          <p className="mb-6 xl:mb-8 xxl:mb-12">{hero.target}</p>

          {!auth ? <AuthBlock /> : <p>{hero.authorized}</p>}
        </div>
      </div>
    </section>
  );
};

export default Hero;
