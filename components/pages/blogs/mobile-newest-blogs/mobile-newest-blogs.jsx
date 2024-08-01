'use client';

import { useRef } from 'react';

// MUI
import { IconButton } from '@mui/material';

// icons
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

// Components
import BlogCard2 from '../blog-card-2/blog-card-2';

const arrowButtonSx = {
   padding: '2px',
   color: '#2ED7FE',
   transition: 'all 0.2s',
   ':hover': { color: 'white', backgroundColor: '#2ed8fea7' },
};

function MobileNewestBlogs({ newestBlogsData, mostVisitBlogsData, mostVisitPsychoBlogsData, randomBlogsData2 }) {
   const newestSwiperRef = useRef(null);
   const mostVisitSwiperRef = useRef(null);
   const mostVisitPsychoSwiperRef = useRef(null);
   const mostVisitNewsSwiperRef = useRef(null);

   return (
      <div className="mt-5 space-y-[15px] customMd:hidden">
         <div className="h-[175px] rounded-10 bg-primaryBlue/5 px-15 py-5">
            <div className="flex items-center justify-between">
               <IconButton sx={arrowButtonSx} onClick={() => newestSwiperRef.current?.slidePrev()}>
                  <ArrowRight2 size="16" />
               </IconButton>
               <p className="font-kalamehSemiBold600 text-xs text-textColor1">جدید ترین های مجله سلامتی هلث پلاس</p>
               <IconButton sx={arrowButtonSx} onClick={() => newestSwiperRef.current?.slideNext()}>
                  <ArrowLeft2 size="16" />
               </IconButton>
            </div>

            <Swiper
               loop
               spaceBetween="20px"
               onSwiper={swiper => {
                  newestSwiperRef.current = swiper;
               }}
               autoplay={{
                  delay: 3000,
                  disableOnInteraction: true,
               }}
               modules={[Autoplay]}
               // eslint-disable-next-line tailwindcss/no-custom-classname
               className="mySwiper"
            >
               {newestBlogsData?.data?.map(item => (
                  <SwiperSlide key={item?.id}>
                     <BlogCard2 detail={item} />
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>

         <div className="h-[175px] rounded-10 bg-primaryBlue/5 px-15 py-5">
            <div className="flex items-center justify-between">
               <IconButton sx={arrowButtonSx} onClick={() => mostVisitSwiperRef.current?.slidePrev()}>
                  <ArrowRight2 size="16" />
               </IconButton>
               <p className="font-kalamehSemiBold600 text-xs text-textColor1">پرخواننده ها</p>
               <IconButton sx={arrowButtonSx} onClick={() => mostVisitSwiperRef.current?.slideNext()}>
                  <ArrowLeft2 size="16" />
               </IconButton>
            </div>

            <Swiper
               loop
               spaceBetween="20px"
               onSwiper={swiper => {
                  mostVisitSwiperRef.current = swiper;
               }}
               autoplay={{
                  delay: 3000,
                  disableOnInteraction: true,
               }}
               modules={[Autoplay]}
               // eslint-disable-next-line tailwindcss/no-custom-classname
               className="mySwiper"
            >
               {mostVisitBlogsData?.data?.map(item => (
                  <SwiperSlide key={item?.id}>
                     <BlogCard2 detail={item} />
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
         <div className="h-[175px] rounded-10 bg-primaryBlue/5 px-15 py-5">
            <div className="flex items-center justify-between">
               <IconButton sx={arrowButtonSx} onClick={() => mostVisitPsychoSwiperRef.current?.slidePrev()}>
                  <ArrowRight2 size="16" />
               </IconButton>
               <p className="font-kalamehSemiBold600 text-xs text-textColor1">پر بازدید های روانشناسی</p>
               <IconButton sx={arrowButtonSx} onClick={() => mostVisitPsychoSwiperRef.current?.slideNext()}>
                  <ArrowLeft2 size="16" />
               </IconButton>
            </div>
            <Swiper
               loop
               spaceBetween="20px"
               onSwiper={swiper => {
                  mostVisitPsychoSwiperRef.current = swiper;
               }}
               autoplay={{
                  delay: 3000,
                  disableOnInteraction: true,
               }}
               modules={[Autoplay]}
               // eslint-disable-next-line tailwindcss/no-custom-classname
               className="mySwiper"
            >
               {mostVisitPsychoBlogsData?.data?.map(item => (
                  <SwiperSlide key={item?.id}>
                     <BlogCard2 detail={item} />
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>

         <div className="h-[175px] rounded-10 bg-primaryBlue/5 px-15 py-5">
            <div className="flex items-center justify-between">
               <IconButton sx={arrowButtonSx} onClick={() => mostVisitNewsSwiperRef.current?.slidePrev()}>
                  <ArrowRight2 size="16" />
               </IconButton>
               <p className="m-0 font-kalamehSemiBold600 text-xs text-textColor1">پر بازدیدترین اخبار</p>
               <IconButton sx={arrowButtonSx} onClick={() => mostVisitNewsSwiperRef.current?.slideNext()}>
                  <ArrowLeft2 size="16" />
               </IconButton>
            </div>
            <Swiper
               loop
               spaceBetween="20px"
               onSwiper={swiper => {
                  mostVisitNewsSwiperRef.current = swiper;
               }}
               autoplay={{
                  delay: 3000,
                  disableOnInteraction: true,
               }}
               modules={[Autoplay]}
               // eslint-disable-next-line tailwindcss/no-custom-classname
               className="mySwiper"
            >
               {randomBlogsData2?.data?.map(item => (
                  <SwiperSlide key={item?.id}>
                     <BlogCard2 detail={item} />
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </div>
   );
}

export default MobileNewestBlogs;
