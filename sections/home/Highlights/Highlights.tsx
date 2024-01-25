'use client';

import Link from 'next/link';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { BookCard } from '@/components';

import { newBooks } from '@/data/temp.json';
import { highlights } from '@/data/homepage.json';

const Highlights: React.FC = () => {
  const { title, catalogBtn } = highlights;

  const slderOptions = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: false,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 1599,
        settings: {
          slidesToShow: 3,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <>
      {/* only show this section when there are books available */}
      {newBooks.length > 0 && (
        <section className="pb-10">
          <div className="container">
            <h2 className="mb-5 text-2xl font-semibold uppercase">{title}</h2>
            {/* <ul className="flex flex-wrap justify-center gap-5"> */}
            <Slider {...slderOptions}>
              {newBooks.map(book => (
                // <li key={book.id}>
                <BookCard key={book.id} book={book} />
                // </li>
              ))}
            </Slider>

            {/* </ul> */}
            <Link
              href="/catalog"
              className="mx-auto mt-5 block w-[250px] rounded-lg bg-accent px-4 py-3 text-center text-lg font-medium text-white duration-300 ease-in hover:bg-primary focus:bg-primary"
            >
              {catalogBtn}
            </Link>
          </div>
        </section>
      )}
    </>
  );
};

export default Highlights;
