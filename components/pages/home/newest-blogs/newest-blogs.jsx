import Link from 'next/link';

// MUI
import { Button } from '@mui/material';

// Icons
import { MdKeyboardArrowLeft } from 'react-icons/md';

// Components
import ArticleCard from '@/components/template/article-card/article-card';

function NewestBlogs() {
   return (
      <div className="px-eighteen customMd:px-[90px]">
         <div className="mx-auto mt-[27px] max-w-[1260px] customMd:mt-[67px]">
            <div className="max-customMd:hidden">
               <p className="text-center text-[19px] text-textColor1">مجله سلامت</p>
               <p className="mt-[11px] text-center font-kalamehRegular400 text-[19px] text-textColor2">
                  مقالات حوزه سلامت و بهداشت
               </p>
            </div>
            <div className="flex items-center justify-between customMd:mt-[26px] customMd:justify-end">
               <p className="font-kalamehSemiBold600 text-sm text-textColor1 customMd:hidden">مجله سلامت</p>
               <Link href="/">
                  <Button
                     endIcon={<MdKeyboardArrowLeft className="!text-[11px] customMd:!text-eighteen" />}
                     sx={{ span: { marginInlineStart: 0 } }}
                     className="!text-[11px] customMd:!text-eighteen"
                  >
                     نمایش همه
                  </Button>
               </Link>
            </div>
            <div className="mt-[9px] flex items-center gap-[9px] max-customMd:overflow-x-auto customMd:mt-[45px] customMd:gap-[22px]">
               <ArticleCard />
               <ArticleCard />
               <ArticleCard />
               <ArticleCard />
            </div>
         </div>
      </div>
   );
}

export default NewestBlogs;
