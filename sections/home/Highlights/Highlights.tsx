import { BookCard } from '@/components';
import { newBooks } from '@/data/temp.json';

const Highlights: React.FC = () => {
  return (
    <>
      {/* only show this section when there are books available */}
      {newBooks.length > 0 && (
        <section className="pb-10">
          <div className="container">
            <ul className="flex flex-wrap justify-center gap-5">
              {newBooks.map(book => (
                <li key={book.id}>
                  <BookCard book={book} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
};

export default Highlights;
