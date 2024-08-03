'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// MUI
import { IconButton } from '@mui/material';

// Icons
import { Calendar, Clock, ArrowLeft2, ArrowRight2 } from 'iconsax-react';
import { IoDocumentTextOutline } from 'react-icons/io5';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

// Assets
import noImage from '@/assets/images/noImageBlogs.jpg';
import blogBanner2 from '@/assets/images/blogBanner2.png';

// Components
import BlogCard2 from '../blog-card-2/blog-card-2';
import PaginationComponent from '@/components/template/pagination-component/pagination-component';

const arrowButtonSx = {
   padding: '2px',
   color: '#2ED7FE',
   transition: 'all 0.2s',
   ':hover': { color: 'white', backgroundColor: '#2ed8fea7' },
};

function CategoryDetailMobile({ categoryBlogsData, mostVisitBlogsData, randomBlogsData2, searchParams }) {
   const mostVisitSwiperRef = useRef(null);
   const mostVisitNewsSwiperRef = useRef(null);

   return (
      <section className="mt-5 customMd:hidden">
         <div className="h-[170px] rounded-15 bg-primaryBlue" />

         <div className="mt-5">
            <Swiper
               loop
               spaceBetween="20px"
               autoplay={{
                  delay: 3000,
                  disableOnInteraction: true,
               }}
               modules={[Autoplay]}
               // eslint-disable-next-line tailwindcss/no-custom-classname
               className="mySwiper"
            >
               {categoryBlogsData?.data?.map(item => (
                  <SwiperSlide key={item.id}>
                     <Link
                        href={`/blogs/blogDetail/${item?.id}`}
                        className="group block transition-all duration-200 hover:shadow-sm"
                     >
                        <div className="relative h-[150px] w-full rounded-[5px] bg-primaryBlue">
                           <Image
                              src={item?.banner || noImage}
                              alt="cover"
                              fill
                              className="rounded-[5px] object-cover"
                           />
                        </div>

                        <div className="mt-[22px] flex gap-x-[9px]">
                           <IoDocumentTextOutline color="#2ED7FE" className="shrink-0" />
                           <p
                              className="line-clamp-2 text-15 leading-6 text-textColor1 transition-all duration-200 group-hover:text-primaryBlue"
                              title={item?.title}
                           >
                              {item?.title}
                           </p>
                        </div>
                        <div className="flex flex-wrap gap-x-30">
                           <div className="mt-[22px] flex gap-x-2.5">
                              <Calendar color="#2ED7FE" size="16" className="shrink-0" />
                              <p className="line-clamp-1 font-DanaFaNum text-xs text-textColor1/50">
                                 {item?.created_at}
                              </p>
                           </div>
                           <div className="mt-[22px] flex gap-x-[9px]">
                              <Clock color="#2ED7FE" size="16" className="shrink-0" />
                              <p className="line-clamp-1 text-xs text-textColor1/50">
                                 زمان مطالعه <span className="font-DanaFaNum">{item?.read_time}</span> دقیقه
                              </p>
                           </div>
                           <div className="mt-[22px] flex gap-x-[9px]">
                              <div className="size-5 shrink-0 bg-primaryBlue" />
                              <p className="line-clamp-1 text-xs text-textColor1/50">هلث پلاس</p>
                           </div>
                        </div>

                        <p className="line-clamp-5 text-15 leading-6 text-textColor1/50">{item?.summary}</p>

                        <div className="mt-5 flex items-center justify-end gap-x-[5px] self-end text-primaryBlue group-hover:underline">
                           <p className="text-center text-xl text-primaryBlue">بخوانید</p>
                           <ArrowLeft2 size="16" />
                        </div>
                     </Link>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>

         {categoryBlogsData?.total_pages > 1 && (
            <div className="mt-30 flex justify-center">
               <PaginationComponent searchParams={searchParams} totalPage={categoryBlogsData?.total_pages} />
            </div>
         )}

         <div className="mt-5 space-y-5">
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

         <div className="mt-1.5 h-[100px] rounded-8">
            <Image src={blogBanner2} alt="banner" className="size-full rounded-8" />
         </div>
      </section>
   );
}

export default CategoryDetailMobile;
