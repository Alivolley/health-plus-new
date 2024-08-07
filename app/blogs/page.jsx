import Image from 'next/image';
import Link from 'next/link';

// Icons
import { ArrowLeft2 } from 'iconsax-react';

// Assets
import noImage from '@/assets/images/noImageBlogs.jpg';
import blogBanner from '@/assets/images/blogBanner.png';
import blogMobileMedicalPic from '@/assets/images/blogMobileMedicalPic.png';
import blogPsychoMobilePic from '@/assets/images/blogPsychoMobilePic.png';

// Components
import NewestBlogs from '@/components/pages/blogs/newest-blogs/newest-blogs';
import RandomSwiperBlogs from '@/components/pages/blogs/random-swiper-blogs/random-swiper-blogs';
import FooterBlogsSwiper from '@/components/pages/blogs/footer-blogs-swiper/footer-blogs-swiper';

// Utils
import fetchDataHandler from '@/utils/fetchDataHandler';

async function Blogs() {
   const [
      blogCategoriesData,
      boldBlogsData,
      newestBlogsData,
      mostVisitBlogsData,
      mostVisitPsychoBlogsData,
      randomBlogsData2,
      randomBlogsData3,
      fullCategoryBlogs,
   ] = await Promise.all([
      fetchDataHandler('journal/groups', { next: { revalidate: 60 } }),
      fetchDataHandler('journal/suggested?ordering=random', { next: { revalidate: 60 } }),
      fetchDataHandler('journal/list?ordering=newest&page_size=10', { next: { revalidate: 60 } }),
      fetchDataHandler('journal/list?ordering=most_visit&page_size=5', { next: { revalidate: 60 } }),
      fetchDataHandler('journal/list?ordering=most_visit&group=روانشناسی&page_size=10', { next: { revalidate: 60 } }),
      fetchDataHandler('journal/list?ordering=random', { next: { revalidate: 60 } }),
      fetchDataHandler('journal/list?ordering=random&page_size=6', { next: { revalidate: 60 } }),
      fetchDataHandler('journal/groupsOverview', { next: { revalidate: 60 } }),
   ]);

   const getAllCategories = () => {
      const resultArray = [];

      Object.values(blogCategoriesData).forEach(array => {
         resultArray.push(...array);
      });

      return resultArray;
   };

   return (
      <div>
         <div className="mt-[27px] px-eighteen customMd:mt-[67px] customMd:px-90">
            <div className="mx-auto max-w-[1260px]">
               <section className="mt-15 grid grid-cols-1 gap-x-30 gap-y-2.5 customMd:mt-[60px] customMd:grid-cols-4">
                  {boldBlogsData?.map((item, index) => (
                     <Link
                        href={`/blogs/blogDetail/${item?.id}`}
                        style={{ backgroundImage: `url(${item?.banner || noImage?.src})` }}
                        className="overflow-hidden rounded-10 bg-cover bg-center bg-no-repeat"
                        key={item?.id}
                        title={item?.title}
                     >
                        <div
                           // eslint-disable-next-line tailwindcss/no-custom-classname
                           className={`group flex h-[130px] flex-col justify-between p-15 customMd:h-[500px] customMd:p-5 ${
                              index === 0
                                 ? 'bg-gradient1'
                                 : index === 1
                                   ? 'bg-gradient2'
                                   : index === 2
                                     ? 'bg-gradient3'
                                     : index === 3
                                       ? 'bg-gradient4'
                                       : ''
                           }`}
                        >
                           <div className="flex justify-end">
                              <div className="flex h-30 min-w-[57px] items-center justify-center rounded-15 bg-white px-2 customMd:h-10 customMd:min-w-[82px]">
                                 <p className="text-center text-10 text-textColor1/50 transition-all duration-200 group-hover:text-primaryBlue customMd:text-15">
                                    {item?.group}
                                 </p>
                              </div>
                           </div>

                           <div className="max-w-[170px] customXs:max-w-72">
                              <p className="line-clamp-2 font-kalamehSemiBold600 text-15 text-white max-customMd:leading-[23px] customLg:text-xl">
                                 {item?.title}
                              </p>
                              <p className="mt-2.5 font-DanaFaNum text-10 text-white customMd:mt-5 customMd:text-15">
                                 {item?.created_at}
                              </p>
                              <div
                                 className="mt-[25px] hidden items-center justify-end gap-[3px] text-white transition-all duration-200
                            group-hover:text-primaryBlue customMd:flex"
                              >
                                 <p className="text-center text-10 customMd:text-xl">بخوانید</p>
                                 <ArrowLeft2 size="16" />
                              </div>
                           </div>
                        </div>
                     </Link>
                  ))}
               </section>

               <NewestBlogs
                  newestBlogsData={newestBlogsData}
                  mostVisitBlogsData={mostVisitBlogsData}
                  mostVisitPsychoBlogsData={mostVisitPsychoBlogsData}
                  randomBlogsData2={randomBlogsData2}
               />
            </div>
         </div>

         <RandomSwiperBlogs randomBlogsData3={randomBlogsData3} />

         <div className="mx-auto max-w-[1260px] px-eighteen customMd:hidden customMd:px-90">
            <Link href="/filter-medical-advice" className="my-15 block h-[130px] w-full">
               <Image src={blogBanner} alt="banner" className="size-full" />
            </Link>
         </div>

         <section className="">
            <div className="px-eighteen customMd:px-90">
               <div className="mx-auto max-w-[1260px]">
                  <div className="customMd:hidden">
                     <div className="space-y-[15px]">
                        <Link
                           href="/"
                           style={{ backgroundImage: `url(${blogMobileMedicalPic?.src})` }}
                           className="block overflow-hidden rounded-10 bg-cover bg-center bg-no-repeat"
                        >
                           <div className="box-border flex h-[146px] flex-col justify-end bg-gradient8 p-15">
                              <p className="m-0 font-kalamehSemiBold600 text-xl text-white">پزشکی</p>
                           </div>
                        </Link>
                        <Link
                           href="/"
                           style={{ backgroundImage: `url(${blogPsychoMobilePic?.src})` }}
                           className="block overflow-hidden rounded-10 bg-cover bg-center bg-no-repeat"
                        >
                           <div className="box-border flex h-[146px] flex-col justify-end bg-gradient9 p-15">
                              <p className="m-0 font-kalamehSemiBold600 text-xl text-white">روانشناسی</p>
                           </div>
                        </Link>
                     </div>
                  </div>
                  <div className="mt-[60px] max-customMd:hidden">
                     <div className="grid grid-cols-3 gap-x-30">
                        <FooterBlogsSwiper detail={fullCategoryBlogs} />

                        <div className="rounded-20 bg-primaryBlue/5 p-5 pt-30">
                           <div className="mb-30 flex items-center justify-between border-b-2 border-solid border-primaryBlue pb-5">
                              <p className="font-kalamehSemiBold600 text-xl text-primaryBlue">دسته بندی ها</p>
                           </div>
                           <div className="space-y-2.5 p-5">
                              {getAllCategories()?.map(item => (
                                 <Link
                                    className="flex items-center justify-between text-15 leading-6 text-primaryBlue 
                                          transition-all duration-200 hover:text-textColor1"
                                    key={item?.name}
                                    href="/"
                                 >
                                    <p>{item?.name}</p>
                                    <p className="font-DanaFaNum">{item?.count} مقاله</p>
                                 </Link>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}

export default Blogs;
