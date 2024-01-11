import Image from 'next/image';
import classNames from 'classnames';

import Available from '@/public/icons/tick.svg';
import Unavailable from '@/public/icons/cross.svg';

import { BookCardProps } from './BookCard.props';
import css from './BookCard.module.css';

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const cardStyles = classNames(
    'relative w-[300px] h-[500px] rounded-xl hover:scale-[1.03] duration-300 ease-in',
    css.card,
  );

  const textStyles = classNames(
    'absolute bottom-0 left-0 z-10 bg-white-dark text-primary w-full p-4 h-0 invisible opacity-0 rounded-b-xl duration-300 ease-in',
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
      </div>

      <div
        className={statusStyles}
        title={book.available ? 'книга доступна' : 'книга недоступна'}
      >
        {book.available ? (
          <Available width={20} height={20} aria-label="книга доступна" />
        ) : (
          <Unavailable width={20} height={20} aria-label="книга недоступна" />
        )}
      </div>
    </div>
  );
};

export default BookCard;
