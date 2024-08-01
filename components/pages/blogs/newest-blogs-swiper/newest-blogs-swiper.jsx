'use client';

import { useRef } from 'react';
import Link from 'next/link';

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
import BlogCard1 from '../blog-card-1/blog-card-1';

function NewestBlogsSwiper({ newestBlogsData }) {
   const swiperRef = useRef(null);

   return (
      <div className="col-span-2 rounded-20 bg-primaryBlue/5 p-30">
         <div className="mb-30 flex items-center justify-between border-b-2 border-solid border-primaryBlue pb-5">
            <p className="font-kalamehSemiBold600 text-xl text-textColor1">جدید ترین های مجله سلامتی هلث پلاس</p>
            <div className="flex gap-x-1">
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
         <div className="grid grid-cols-2 gap-x-2.5 customLg:grid-cols-3 customLg:gap-x-30">
            <div className="col-span-1 customLg:col-span-2">
               <Swiper
                  spaceBetween="20px"
                  loop
                  onSwiper={swiper => {
                     swiperRef.current = swiper;
                  }}
                  autoplay={{
                     delay: 3000,
                     disableOnInteraction: true,
                  }}
                  modules={[Autoplay]}
                  // eslint-disable-next-line tailwindcss/no-custom-classname
                  className="mySwiper"
               >
                  {newestBlogsData?.data?.map(
                     (item, index) =>
                        index <= 4 && (
                           <SwiperSlide key={item?.id}>
                              <Link
                                 href={`/blogs/blogDetail/${item?.id}`}
                                 style={{ backgroundImage: `url(${item?.banner || noImage?.src})` }}
                                 className="block overflow-hidden rounded-10 bg-cover bg-center bg-no-repeat"
                                 title={item?.title}
                              >
                                 <div
                                    className="group flex h-[130px] flex-col justify-between p-15 customMd:h-[568px] customMd:p-5"
                                    style={{
                                       background:
                                          'linear-gradient(180deg, rgba(46, 215, 254, 0.375) 0%, rgba(64, 64, 64, 0.75) 100%)',
                                    }}
                                 >
                                    <div className="flex justify-end">
                                       <div
                                          className="flex h-30 min-w-[57px] items-center justify-center rounded-15 bg-white
                                                    px-2 customMd:h-10 customMd:min-w-[82px]"
                                       >
                                          <p
                                             className="text-center text-10 text-textColor1/50 transition-all duration-200
                                                       group-hover:text-primaryBlue customMd:text-15"
                                          >
                                             {item?.group}
                                          </p>
                                       </div>
                                    </div>

                                    <div className="">
                                       <p className="line-clamp-2 font-kalamehSemiBold600 text-15 text-white customLg:text-xl">
                                          {item?.title}
                                       </p>
                                       <p className="mt-2.5 font-DanaFaNum text-10 text-white customMd:mt-5 customMd:text-15">
                                          {item?.created_at}
                                       </p>
                                       <div
                                          className="mt-[25px] hidden items-center justify-end gap-[5px] text-white
                                                    transition-all duration-200 group-hover:text-primaryBlue customMd:flex"
                                       >
                                          <p className="text-center text-10 customMd:text-xl">بخوانید</p>
                                          <ArrowLeft2 size="16" />
                                       </div>
                                    </div>
                                 </div>
                              </Link>
                           </SwiperSlide>
                        )
                  )}
               </Swiper>
            </div>

            <div className="col-span-1 space-y-[23px]">
               {newestBlogsData?.data?.map((item, index) => index > 4 && <BlogCard1 key={item?.id} detail={item} />)}
            </div>
         </div>
      </div>
   );
}

export default NewestBlogsSwiper;
