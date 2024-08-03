'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// MUI
import { IconButton } from '@mui/material';

// Icons
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

// Assets
import noImage from '@/assets/images/noImageBlogs.jpg';

// Components
import BlogCard2 from '../blog-card-2/blog-card-2';

const arrowButtonSx = {
   padding: '2px',
   color: '#2ED7FE',
   transition: 'all 0.2s',
   ':hover': { color: 'white', backgroundColor: '#2ed8fea7' },
};

function RelatedBlogs({ relatedBlogsData }) {
   const firstSwiperRef = useRef(null);
   const secondSwiperRef = useRef(null);

   return (
      <>
         <div className="max-customMd:hidden">
            <div className="mb-30 flex items-center justify-between border-b-2 border-solid border-primaryBlue pb-5">
               <p className="font-kalamehSemiBold600 text-xl text-textColor1">مقالات مشابه</p>
               <div className="flex gap-x-1">
                  <IconButton sx={arrowButtonSx} onClick={() => firstSwiperRef.current?.slidePrev()}>
                     <ArrowRight2 />
                  </IconButton>
                  <IconButton sx={arrowButtonSx} onClick={() => firstSwiperRef.current?.slideNext()}>
                     <ArrowLeft2 />
                  </IconButton>
               </div>
            </div>
            <div className="relative">
               <Swiper
                  slidesPerView={4}
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
                  breakpoints={{
                     300: {
                        spaceBetween: '6px',
                     },
                     1200: {
                        spaceBetween: '30px',
                     },
                  }}
               >
                  {relatedBlogsData?.data?.map(item => (
                     <SwiperSlide key={item.id}>
                        <Link
                           style={{ boxShadow: '0px 0px 8.8px 0px #0000000D' }}
                           className="group block rounded-[11px] p-1 pb-[13px]"
                           href={`/blogs/blogDetail/${item?.id}`}
                        >
                           <div className="relative h-[94px] w-full rounded-[5px] bg-primaryBlue">
                              <Image
                                 src={item?.banner || noImage}
                                 alt="cover"
                                 fill
                                 className="rounded-[5px] object-cover"
                              />
                           </div>

                           <p
                              className="mt-1.5 line-clamp-1 text-[11px] text-textColor1 transition-all duration-200 group-hover:text-primaryBlue"
                              title={item?.title}
                           >
                              {item?.title}
                           </p>
                           <div
                              className="mt-3 justify-between gap-x-[13px] border-t border-dashed border-textColor1/25 pt-[7px]
                           max-customLg:space-y-2 customLg:flex customXl:justify-start"
                           >
                              <div className="flex items-center gap-x-1">
                                 <div className="size-2 shrink-0 bg-primaryBlue" />
                                 <p className="font-DanaFaNum text-[7px] text-primaryBlue transition-all duration-200 group-hover:text-primaryBlue/50">
                                    {item?.created_at}
                                 </p>
                              </div>
                              <div className="flex items-center gap-x-1">
                                 <div className="size-2 shrink-0 bg-primaryBlue" />
                                 <p className="text-[7px] text-primaryBlue transition-all duration-200 group-hover:text-primaryBlue/50">
                                    زمان مطالعه <span className="font-DanaFaNum">{item?.read_time}</span> دقیقه
                                 </p>
                              </div>
                           </div>
                        </Link>
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
         </div>

         <div className="mt-10 customMd:hidden">
            <div className="h-[175px] rounded-10 bg-primaryBlue/5 px-15 py-5">
               <div className="flex items-center justify-between">
                  <IconButton sx={arrowButtonSx} onClick={() => secondSwiperRef.current?.slidePrev()}>
                     <ArrowRight2 size="16" />
                  </IconButton>
                  <p className="font-kalamehSemiBold600 text-xs text-textColor1">مقالات مشابه</p>
                  <IconButton sx={arrowButtonSx} onClick={() => secondSwiperRef.current?.slideNext()}>
                     <ArrowLeft2 size="16" />
                  </IconButton>
               </div>

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
                  {relatedBlogsData?.data?.map(item => (
                     <SwiperSlide key={item?.id}>
                        <BlogCard2 detail={item} />
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
         </div>
      </>
   );
}

export default RelatedBlogs;
