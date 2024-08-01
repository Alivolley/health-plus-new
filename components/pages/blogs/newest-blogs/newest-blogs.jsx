// Components
import BlogCard1 from '../blog-card-1/blog-card-1';
import MostVisitBlogs from '../most-visit-blogs/most-visit-blogs';
import NewestBlogsSwiper from '../newest-blogs-swiper/newest-blogs-swiper';
import MobileNewestBlogs from '../mobile-newest-blogs/mobile-newest-blogs';

function NewestBlogs({ newestBlogsData, mostVisitBlogsData, mostVisitPsychoBlogsData, randomBlogsData2 }) {
   return (
      <section className="">
         <MobileNewestBlogs
            newestBlogsData={newestBlogsData}
            mostVisitBlogsData={mostVisitBlogsData}
            mostVisitPsychoBlogsData={mostVisitPsychoBlogsData}
            randomBlogsData2={randomBlogsData2}
         />

         <div className="max-customMd:hidden">
            <div className="mt-[60px]">
               <div className="grid grid-cols-3 gap-x-30">
                  <NewestBlogsSwiper newestBlogsData={newestBlogsData} />

                  <div className="col-span-1 rounded-20 bg-primaryBlue/5 px-5 py-30">
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

               <MostVisitBlogs
                  mostVisitPsychoBlogsData={mostVisitPsychoBlogsData}
                  randomBlogsData2={randomBlogsData2}
               />
            </div>
         </div>
      </section>
   );
}

export default NewestBlogs;
