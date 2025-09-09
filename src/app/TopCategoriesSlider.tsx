'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';
  <div className='text-center'>
         <h2>Top Categories</h2>
        </div>
const MySplideSlider = () => {
  return (
    <Splide
      options={{
        perPage: 10,
        type: 'loop',
        rewind: true,
        gap: '10px',
        breakpoints: {
          640: {
            perPage: 2,
          },
          1024: {
            perPage: 4,
          },
        },
      }}
      aria-label="My Favorite Images"
    >
      
      <SplideSlide className="mb">
        <Image src="/assets/img/banking-finance-.png" width={150} height={150} alt="Image 1" />
      </SplideSlide>
      <SplideSlide>
        <Image src="/assets/img/biggest-sales.png" width={150} height={150} alt="Image 2" />
      </SplideSlide>
      <SplideSlide>
        <Image src="/assets/img/health-medicine.png" width={150} height={150} alt="Image 4" />
      </SplideSlide>
      <SplideSlide>
        <Image src="/assets/img/min-cashback.png" width={150} height={150} alt="Image 3" />
      </SplideSlide>
      <SplideSlide>
        <Image src="/assets/img/travel-offers.png" width={150} height={150} alt="Image 5" />
      </SplideSlide>
       <SplideSlide>
        <Image src="/assets/img/beauty-personal.png" width={150} height={150} alt="Image 6" />
      </SplideSlide>
       <SplideSlide>
        <Image src="/assets/img/food-and-grocery.png" width={150} height={150} alt="Image 7" />
      </SplideSlide>
      <SplideSlide>
        <Image src="/assets/img/mobiles-phones.png" width={150} height={150} alt="Image 7" />
      </SplideSlide>
       <SplideSlide>
        <Image src="/assets/img/new-on.png" width={150} height={150} alt="Image 7" />
      </SplideSlide>
       <SplideSlide>
        <Image src="/assets/img/home-kitchen-.png" width={150} height={150} alt="Image 7" />
      </SplideSlide>
    </Splide>
  );
};

export default MySplideSlider;