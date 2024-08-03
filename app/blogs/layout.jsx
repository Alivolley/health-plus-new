import Link from 'next/link';

// MUI
import { Breadcrumbs } from '@mui/material';

// Components
import HeaderRandomBlogs from '@/components/pages/blogs/header-random-blogs/header-random-blogs';
import DropDownCategories from '@/components/pages/blogs/drop-down-categories/drop-down-categories';

// Utils
import fetchDataHandler from '@/utils/fetchDataHandler';

async function layout({ children }) {
   const [randomBlogsData, blogCategoriesData] = await Promise.all([
      fetchDataHandler('journal/list?ordering=random', { next: { revalidate: 60 } }),
      fetchDataHandler('journal/groups', { next: { revalidate: 60 } }),
   ]);

   return (
      <div>
         <div className="px-eighteen customMd:px-90">
            <div className="mx-auto max-w-[1260px]">
               <Breadcrumbs separator=">" className="max-customMd:hidden">
                  {[
                     <Link
                        href="/"
                        key={1}
                        className="text-15 text-textColor2 transition-all duration-200 hover:text-black hover:underline"
                     >
                        صفحه اصلی
                     </Link>,
                     <Link
                        href="/blogs"
                        key={2}
                        className="text-15 text-textColor2 transition-all duration-200 hover:text-black hover:underline"
                     >
                        مجله سلامت
                     </Link>,
                  ]}
               </Breadcrumbs>
               <div
                  className="max-customMd:rounded-lg max-customMd:py-[10px] customMd:mt-15 customMd:!shadow-none"
                  style={{ boxShadow: '0px 0px 15px 0px #0000000D' }}
               >
                  <p className="text-[20px] leading-8 text-primaryBlue max-customMd:text-center">مجله سلامت</p>
                  <p className="mt-15 text-15 leading-7 text-textColor2 max-customMd:text-center">
                     مقالات پزشکی و تخصصی
                  </p>
               </div>

               <HeaderRandomBlogs detail={randomBlogsData} />

               <DropDownCategories detail={blogCategoriesData} />
            </div>
         </div>

         {children}
      </div>
   );
}

export default layout;
