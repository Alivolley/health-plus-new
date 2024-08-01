'use client';

import { useRef } from 'react';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';

// Assets
import noImage from '@/assets/images/noImageBlogs.jpg';

function RandomSwiperBlogs({ randomBlogsData3 }) {
   const firstSwiperRef = useRef(null);

   return (
      <section className="mt-[60px] bg-textColor1 py-30 max-customMd:hidden">
         <div className="px-eighteen customMd:px-90">
            <div className="mx-auto max-w-[1260px]">
               <div>
                  <Swiper
                     slidesPerView={3}
                     spaceBetween="30px"
                     loop
                     autoplay={{
                        delay: 3000,
                        disableOnInteraction: true,
                     }}
                     pagination={{ clickable: true }}
                     onSwiper={swiper => {
                        firstSwiperRef.current = swiper;
                     }}
                     modules={[Autoplay, Pagination]}
                     // eslint-disable-next-line tailwindcss/no-custom-classname
                     className="mySwiper !pb-[35px] [&>.swiper-pagination]:!bottom-[-2px]"
                  >
                     {randomBlogsData3?.data?.map((item, index) => (
                        <SwiperSlide key={item?.id}>
                           <div
                              style={{ backgroundImage: `url(${item?.banner || noImage?.src})` }}
                              className="overflow-hidden rounded-20 bg-cover bg-center bg-no-repeat"
                           >
                              <div
                                 className={`flex h-[380px] flex-col justify-end p-5 ${
                                    index % 2 === 0 ? 'bg-gradient6' : 'bg-gradient7'
                                 }`}
                              >
                                 <p className="mb-2.5 line-clamp-2 font-kalamehSemiBold600 text-xl text-white">
                                    {item?.title}
                                 </p>
                                 <p className="font-DanaFaNum text-15 text-white">{item?.created_at}</p>
                              </div>
                           </div>
                        </SwiperSlide>
                     ))}
                  </Swiper>
               </div>
            </div>
         </div>
      </section>
   );
}

export default RandomSwiperBlogs;
