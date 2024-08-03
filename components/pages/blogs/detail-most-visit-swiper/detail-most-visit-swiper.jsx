'use client';

import { useRef } from 'react';

// MUI
import { IconButton } from '@mui/material';

// Icons
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

// Components
import BlogCard3 from '../blog-card-3/blog-card-3';

const arrowButtonSx = {
   padding: '2px',
   color: '#2ED7FE',
   transition: 'all 0.2s',
   ':hover': { color: 'white', backgroundColor: '#2ed8fea7' },
};

function DetailMostVisitSwiper({ randomBlogs }) {
   const secondSwiperRef = useRef(null);

   return (
      <div>
         <div className="mb-30 flex items-center justify-between border-b-2 border-solid border-primaryBlue pb-5">
            <p className="font-kalamehSemiBold600 text-xl text-primaryBlue">پر بازدید ترین اخبار</p>
            <div className="flex gap-x-1">
               <IconButton sx={arrowButtonSx} onClick={() => secondSwiperRef.current?.slidePrev()}>
                  <ArrowRight2 />
               </IconButton>
               <IconButton sx={arrowButtonSx} onClick={() => secondSwiperRef.current?.slideNext()}>
                  <ArrowLeft2 />
               </IconButton>
            </div>
         </div>

         <div>
            <Swiper
               loop
               spaceBetween="20px"
               onSwiper={swiper => {
                  secondSwiperRef.current = swiper;
               }}
               autoplay={{
                  delay: 3000,
                  disableOnInteraction: true,
               }}
               modules={[Autoplay]}
               // eslint-disable-next-line tailwindcss/no-custom-classname
               className="mySwiper"
            >
               {randomBlogs?.data?.map(item => (
                  <SwiperSlide key={item.id}>
                     <BlogCard3 detail={item} />
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </div>
   );
}

export default DetailMostVisitSwiper;
