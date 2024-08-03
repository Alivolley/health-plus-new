import Image from 'next/image';

// icons
import { IoDocumentTextOutline } from 'react-icons/io5';
import { Calendar, Clock, User } from 'iconsax-react';

// Utils
import fetchDataHandler from '@/utils/fetchDataHandler';

// Assets
import noImage from '@/assets/images/noImageBlogs.jpg';
import blogBanner2 from '@/assets/images/blogBanner2.png';

// Styles
import BlogDetailStyle from './blogDetail.style';

// Components
import RelatedBlogs from '@/components/pages/blogs/related-blogs/related-blogs';

async function BlogDetail({ params }) {
   const blogDetail = await fetchDataHandler(`journal/detail?id=${params?.blogId}`, { next: { revalidate: 60 } });
   const relatedBlogsData = await fetchDataHandler(
      `journal/list?group=${blogDetail?.group}&ordering=random&page_size=10`,
      {
         next: { revalidate: 60 },
      }
   );

   return (
      <BlogDetailStyle>
         <div className="customMd:hidden">
            <p className="mt-5 text-xl text-primaryBlue">{blogDetail?.title}</p>
            <div>
               <div className="mt-5">
                  <div className="relative aspect-video rounded-[5px] bg-primaryBlue">
                     <Image
                        src={blogDetail?.banner || noImage}
                        alt="banner"
                        fill
                        className="rounded-[5px] object-cover"
                     />
                  </div>

                  <div className="flex flex-wrap gap-x-30">
                     <div className="mt-[22px] flex gap-x-2.5">
                        <Calendar color="#2ED7FE" size="16" className="shrink-0" />
                        <p className="font-DanaFaNum text-xs text-textColor1/50">{blogDetail?.created_at}</p>
                     </div>
                     <div className="mt-[22px] flex gap-x-[9px]">
                        <Clock color="#2ED7FE" size="16" className="shrink-0" />
                        <p className="text-xs text-textColor1/50">
                           زمان مطالعه <span className="font-DanaFaNum">{blogDetail?.read_time}</span> دقیقه
                        </p>
                     </div>
                     <div className="mt-[22px] flex gap-x-[9px]">
                        <User color="#2ED7FE" size="16" className="shrink-0" />
                        <p className="text-xs text-textColor1/50">{blogDetail?.author}</p>
                     </div>
                  </div>
               </div>
               <div dangerouslySetInnerHTML={{ __html: blogDetail?.text }} className="mt-5" id="content" />
            </div>

            <div className="mt-30">
               <div className="flex gap-1 text-15 leading-6 text-primaryBlue">
                  <p className="text-nowrap">منابع : </p>
                  <pre className="whitespace-pre-wrap font-kalamehRegular400">{blogDetail?.resources}</pre>
               </div>
            </div>

            <RelatedBlogs relatedBlogsData={relatedBlogsData} />
         </div>

         <div className="gap-x-30 max-customMd:hidden">
            <div className="space-y-[25px]">
               <div>
                  <div className="">
                     <div className="relative h-[450px] rounded-20 bg-primaryBlue customLg:h-[530px]">
                        <Image
                           src={blogDetail?.banner || noImage}
                           alt="banner"
                           fill
                           className="rounded-20 object-cover"
                        />
                     </div>

                     <div className="mt-[22px] flex gap-x-[9px]">
                        <IoDocumentTextOutline color="#2ED7FE" className="shrink-0" />
                        <p className="text-[25px] leading-8 text-textColor1">{blogDetail?.title}</p>
                     </div>
                     <div className="mt-[32px] flex flex-wrap gap-x-30">
                        <div className="flex gap-x-2.5">
                           <Calendar color="#2ED7FE" size="16" className="shrink-0" />
                           <p className="font-DanaFaNum text-xs text-textColor1/50">{blogDetail?.created_at}</p>
                        </div>
                        <div className="flex gap-x-[9px]">
                           <Clock color="#2ED7FE" size="16" className="shrink-0" />
                           <p className="text-xs text-textColor1/50">
                              زمان مطالعه <span className="font-DanaFaNum">{blogDetail?.read_time}</span> دقیقه
                           </p>
                        </div>
                        <div className="flex gap-x-[9px]">
                           <User color="#2ED7FE" size="16" className="shrink-0" />
                           <p className="text-xs text-textColor1/50">{blogDetail?.author}</p>
                        </div>
                     </div>
                  </div>

                  <div dangerouslySetInnerHTML={{ __html: blogDetail?.text }} className="mt-[60px]" id="content" />
               </div>

               <div className="mt-30 rounded-20 border border-solid border-primaryBlue px-30 py-10">
                  <div className="flex gap-1 text-[25px] leading-8 text-primaryBlue">
                     <p className="text-nowrap">منابع : </p>
                     <pre className="whitespace-pre-wrap font-kalamehRegular400">{blogDetail?.resources}</pre>
                  </div>
               </div>

               <div className="mt-30">
                  <div className="h-[223px] rounded-[23px]">
                     <Image src={blogBanner2} alt="banner" className="size-full" />
                  </div>
               </div>

               <RelatedBlogs relatedBlogsData={relatedBlogsData} />
            </div>
         </div>
      </BlogDetailStyle>
   );
}

export default BlogDetail;
