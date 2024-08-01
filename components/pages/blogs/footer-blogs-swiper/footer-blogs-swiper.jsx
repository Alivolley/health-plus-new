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
import BlogCard1 from '../blog-card-1/blog-card-1';
import BlogCard3 from '../blog-card-3/blog-card-3';

const arrowButtonSx = {
   padding: '2px',
   color: '#2ED7FE',
   transition: 'all 0.2s',
   ':hover': { color: 'white', backgroundColor: '#2ed8fea7' },
};

function FooterBlogsSwiper({ detail }) {
   const firstSwiperRef = useRef(null);
   const secondSwiperRef = useRef(null);

   return (
      <>
         <div className="basis-1/3 rounded-20 border border-solid border-textColor1/25 p-5 pt-30">
            <div className="relative">
               <div className="absolute left-0 z-[2] flex gap-x-1 bg-white">
                  <IconButton sx={arrowButtonSx} onClick={() => firstSwiperRef.current?.slidePrev()}>
                     <ArrowRight2 />
                  </IconButton>
                  <IconButton sx={arrowButtonSx} onClick={() => firstSwiperRef.current?.slideNext()}>
                     <ArrowLeft2 />
                  </IconButton>
               </div>
               <Swiper
                  spaceBetween="30px"
                  loop
                  onSwiper={swiper => {
                     firstSwiperRef.current = swiper;
                  }}
                  autoplay={{
                     delay: 3000,
                     disableOnInteraction: true,
                  }}
                  modules={[Autoplay]}
                  // eslint-disable-next-line tailwindcss/no-custom-classname
                  className="mySwiper"
               >
                  {detail?.data?.map(
                     (item, index) =>
                        index < 5 && (
                           <SwiperSlide key={item.id}>
                              <div className="mb-30 flex items-center justify-between border-b-2 border-solid border-primaryBlue pb-5">
                                 <p className="font-kalamehSemiBold600 text-xl text-primaryBlue">{item?.name}</p>
                              </div>

                              <BlogCard3 detail={item?.blogs?.[0]} />

                              <div className="mt-10 space-y-[23px]">
                                 {item?.blogs?.map(
                                    (innerItem, innerIndex) =>
                                       innerIndex >= 1 && <BlogCard1 key={innerItem?.id} detail={innerItem} />
                                 )}
                              </div>
                           </SwiperSlide>
                        )
                  )}
               </Swiper>
            </div>
         </div>

         <div className="basis-1/3 rounded-20 border border-solid border-textColor1/25 p-5 pt-30">
            <div className="relative">
               <div className="absolute left-0 z-[2] flex gap-x-1 bg-white">
                  <IconButton sx={arrowButtonSx} onClick={() => secondSwiperRef.current?.slidePrev()}>
                     <ArrowRight2 />
                  </IconButton>
                  <IconButton sx={arrowButtonSx} onClick={() => secondSwiperRef.current?.slideNext()}>
                     <ArrowLeft2 />
                  </IconButton>
               </div>
               <Swiper
                  spaceBetween="30px"
                  loop
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
                  {detail?.data?.map(
                     (item, index) =>
                        index >= 5 && (
                           <SwiperSlide key={item.id}>
                              <div className="mb-30 flex items-center justify-between border-b-2 border-solid border-primaryBlue pb-5">
                                 <p className="font-kalamehSemiBold600 text-xl text-primaryBlue">{item?.name}</p>
                              </div>

                              <BlogCard3 detail={item?.blogs?.[0]} />

                              <div className="mt-10 space-y-[23px]">
                                 {item?.blogs?.map(
                                    (innerItem, innerIndex) =>
                                       innerIndex >= 1 && <BlogCard1 key={innerItem?.id} detail={innerItem} />
                                 )}
                              </div>
                           </SwiperSlide>
                        )
                  )}
               </Swiper>
            </div>
         </div>
      </>
   );
}

export default FooterBlogsSwiper;
