import Link from 'next/link';
import React from 'react';

const Banner = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-serif text-xl">
            <span className=" font-bold text-blue">
              100%
            </span>{' '}
            Original Product
          </h1>

          <p className="text-black">
            See Our latest discounted products from here and get a special
            <Link href="#discount">
              <a className="text-black font-bold ml-1">discount product</a>
            </Link>
          </p>
        </div>
        <Link href="/search?Category=organic-food">
          <a className="text-sm font-serif font-medium px-6 py-2 bg-emerald-500 text-center rounded-full text-white hover:bg-emerald-700 text-custom-blue">
            Shop Now
          </a>
        </Link>
      </div>
    </>
  );
};

export default Banner;
