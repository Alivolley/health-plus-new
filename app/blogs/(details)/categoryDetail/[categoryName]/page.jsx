import Image from 'next/image';

// Assets
import blogBanner2 from '@/assets/images/blogBanner2.png';

// Components
import BlogCard4 from '@/components/pages/blogs/blog-card-4/blog-card-4';
import PaginationComponent from '@/components/template/pagination-component/pagination-component';
import CategoryDetailMobile from '@/components/pages/blogs/categoryDetail-mobile/categoryDetail-mobile';

// Utils
import fetchDataHandler from '@/utils/fetchDataHandler';

async function CategoryDetail({ params, searchParams }) {
   const [categoryBlogsData, mostVisitBlogsData, randomBlogsData2] = await Promise.all([
      fetchDataHandler(`journal/list?group=${params?.categoryName}&page_size=7&page=${searchParams?.page || 1}`, {
         cache: 'no-store',
      }),
      fetchDataHandler('journal/list?ordering=most_visit&page_size=5', {
         cache: 'no-store',
      }),
      fetchDataHandler('journal/list?ordering=random', {
         cache: 'no-store',
      }),
   ]);

   return (
      <div>
         <CategoryDetailMobile
            categoryBlogsData={categoryBlogsData}
            mostVisitBlogsData={mostVisitBlogsData}
            randomBlogsData2={randomBlogsData2}
            searchParams={searchParams}
         />

         <div className="space-y-[25px] max-customMd:hidden">
            {categoryBlogsData?.data?.map(item => (
               <BlogCard4 key={item?.id} detail={item} />
            ))}
         </div>

         {categoryBlogsData?.total_pages > 1 && (
            <div className="mt-30 flex justify-center max-customMd:hidden customMd:mt-[70px] customMd:justify-end">
               <PaginationComponent searchParams={searchParams} totalPage={categoryBlogsData?.total_pages} />
            </div>
         )}

         <div className="mt-[100px] max-customMd:hidden">
            <div className="h-[223px] rounded-[23px]">
               <Image src={blogBanner2} alt="banner" className="size-full" />
            </div>
         </div>
      </div>
   );
}

export default CategoryDetail;
