import classNames from 'classnames';

import { rules } from '@/data/homepage.json';

import css from './Rules.module.css';

const Rules = () => {
  const rulesCardStyles = classNames(
    'bg-white py-6 px-5 rounded-3xl',
    css.card,
  );
  return (
    <section className="py-10 xl:py-14">
      <div className="container">
        <div className={rulesCardStyles}>
          <h2 className="mb-2 font-medium xl:text-center xl:text-2xl">
            {rules.title}
          </h2>
          <ul className="flex list-inside list-disc flex-col gap-2 text-sm xl:mx-auto xl:max-w-[704px] xl:text-base xxl:max-w-[904px]">
            {rules.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Rules;
