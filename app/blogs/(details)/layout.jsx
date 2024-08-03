import Image from 'next/image';

// Components
import BlogCard1 from '@/components/pages/blogs/blog-card-1/blog-card-1';
import DetailMostVisitSwiper from '@/components/pages/blogs/detail-most-visit-swiper/detail-most-visit-swiper';

// Assets
import blogBanner3 from '@/assets/images/blogBanner3.png';

// Utils
import fetchDataHandler from '@/utils/fetchDataHandler';

async function layout({ children }) {
   const [mostVisitBlogsData, randomBlogs] = await Promise.all([
      fetchDataHandler('journal/list?ordering=most_visit&page_size=5', { next: { revalidate: 60 } }),
      fetchDataHandler('journal/list?ordering=random&page_size=5', { next: { revalidate: 60 } }),
   ]);

   return (
      <div className="px-eighteen customMd:px-90">
         <div className="mx-auto mt-[27px] max-w-[1260px] customMd:mt-[67px]">
            <section className="grid-cols-3 gap-x-30 customMd:grid">
               <aside className="order-2 shrink-0 max-customMd:hidden customMd:col-span-1">
                  <div className="h-[400px] rounded-[37px]">
                     <Image src={blogBanner3} alt="banner" className="size-full rounded-[37px]" />
                  </div>

                  <div className="mt-30">
                     <div className="basis-1/3 rounded-20 bg-primaryBlue/5 px-5 py-30">
                        <div className="mb-30 flex items-center justify-center border-b-2 border-solid border-primaryBlue pb-5">
                           <p className="font-kalamehSemiBold600 text-xl text-primaryBlue">پر خواننده ها</p>
                        </div>

                        <div className="space-y-[23px]">
                           {mostVisitBlogsData?.data?.map(item => (
                              <BlogCard1 key={item?.id} detail={item} />
                           ))}
                        </div>
                     </div>
                  </div>

                  <div className="mt-30">
                     <div className="basis-1/3 rounded-20 border border-solid border-textColor1/25 p-5 pt-30">
                        <DetailMostVisitSwiper randomBlogs={randomBlogs} />
                     </div>
                  </div>
               </aside>

               <div className="order-1 shrink-0 customMd:col-span-2">{children}</div>
            </section>
         </div>
      </div>
   );
}

export default layout;
