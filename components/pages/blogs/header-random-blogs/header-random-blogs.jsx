'use client';

import Link from 'next/link';
import { useRef } from 'react';

// MUI
import { IconButton } from '@mui/material';

// Icons
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

function HeaderRandomBlogs({ detail }) {
   const swiperRef = useRef(null);

   return (
      <div className="max-customMd:hidden customMd:mt-[60px]">
         <div className="relative flex h-[61px] items-center justify-between rounded-10 border border-solid border-textColor1/25 px-5">
            <Swiper
               spaceBetween="30px"
               loop
               onSwiper={swiper => {
                  swiperRef.current = swiper;
               }}
               autoplay={{
                  delay: 2000,
                  disableOnInteraction: true,
               }}
               modules={[Autoplay]}
               // eslint-disable-next-line tailwindcss/no-custom-classname
               className="mySwiper"
            >
               {detail?.data?.map(item => (
                  <SwiperSlide key={item?.id}>
                     <Link
                        href={`/blogs/blogDetail/${item?.id}`}
                        className="line-clamp-1 text-xl text-textColor1/50"
                        title={item?.title}
                     >
                        {item?.title}
                     </Link>
                  </SwiperSlide>
               ))}
            </Swiper>

            <div className="absolute inset-y-0 left-0 z-[1] flex items-center gap-x-30 rounded-l-10 bg-white pl-5">
               <IconButton
                  sx={{
                     padding: '2px',
                     color: '#2ED7FE',
                     transition: 'all 0.2s',
                     ':hover': { color: 'white', backgroundColor: '#2ed8fea7' },
                  }}
                  onClick={() => swiperRef.current?.slidePrev()}
               >
                  <ArrowRight2 />
               </IconButton>
               <IconButton
                  sx={{
                     padding: '2px',
                     color: '#2ED7FE',
                     transition: 'all 0.2s',
                     ':hover': { color: 'white', backgroundColor: '#2ed8fea7' },
                  }}
                  onClick={() => swiperRef.current?.slideNext()}
               >
                  <ArrowLeft2 />
               </IconButton>
            </div>
         </div>
      </div>
   );
}

export default HeaderRandomBlogs;
