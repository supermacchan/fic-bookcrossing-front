import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';

import Available from '@/public/icons/tick.svg';
import Unavailable from '@/public/icons/cross.svg';

import { bookCard } from '@/data/common.json';

import { BookCardProps } from './BookCard.props';
import css from './BookCard.module.css';

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const { statusAria, loadMoreBtn } = bookCard;

  const cardStyles = classNames(
    // 'hover:scale-[1.03]',
    'relative mx-auto w-[280px] h-[500px] md:w-[300px] rounded-xl duration-300 ease-in overflow-hidden',
    css.card,
  );

  const textStyles = classNames(
    'invisible opacity-0 h-0',
    'absolute bottom-0 left-0 z-10 bg-white-dark text-primary flex flex-col w-full p-4 rounded-b-xl duration-300 ease-in',
    css.text,
  );

  const statusStyles = classNames(
    'block p-2 border-black-primary rounded-full',
    'absolute top-4 right-4 z-20',
    {
      'bg-[#73c96b]': book.available,
      'bg-accent': !book.available,
    },
  );

  return (
    <div className={cardStyles}>
      <Image
        src={book.image}
        alt={book.title}
        width={300}
        height={500}
        loading="lazy"
        className="h-[500px] rounded-xl object-cover"
      />

      <div className={textStyles}>
        <p className="text-base font-semibold">{book.title}</p>
        <p className="text-sm">{book.author}</p>

        <ul className="mt-4 flex flex-wrap gap-3">
          {book.genres.map((tag, index) => (
            <li
              key={index}
              className="rounded border-[0.5px] bg-coldBg bg-opacity-60 p-1 text-xs font-medium text-primary"
            >
              {tag}
            </li>
          ))}
        </ul>

        <Link
          href={`/book/${book.id}`}
          className="mt-auto block rounded-lg bg-coldBg p-3 text-center font-medium duration-200 ease-in hover:bg-secondary hover:text-white focus:bg-secondary focus:text-white"
        >
          {loadMoreBtn}
        </Link>
      </div>

      <div
        className={statusStyles}
        title={book.available ? statusAria.available : statusAria.unavailable}
      >
        {book.available ? (
          <Available width={20} height={20} aria-label={statusAria.available} />
        ) : (
          <Unavailable
            width={20}
            height={20}
            aria-label={statusAria.unavailable}
          />
        )}
      </div>
    </div>
  );
};

export default BookCard;
