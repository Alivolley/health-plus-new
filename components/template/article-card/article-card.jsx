import Link from 'next/link';
import Image from 'next/image';

// Icons
import { CiCalendarDate, CiClock2 } from 'react-icons/ci';

// Assets
import articleSamplePic1 from '@/assets/images/articleSamplePic1.png';

function ArticleCard() {
   return (
      <Link
         href="/"
         className="rounded-lg p-[6px] max-customMd:w-[138px] max-customMd:shrink-0 customMd:flex-1 customMd:rounded-[18px] customMd:p-2"
         style={{ boxShadow: '0px 0px 15px 0px #0000000D' }}
      >
         <div className="relative aspect-video w-full">
            <Image
               src={articleSamplePic1}
               alt="article"
               fill
               className="rounded-[4px] object-cover customMd:rounded-[9px]"
            />
         </div>
         <p
            className="mt-[9px] border-b border-dashed border-borderColor pb-[5px]
          text-10 text-textColor1 customMd:mt-3 customMd:pb-[22.5px] customMd:text-eighteen"
         >
            انواع گلودرد و درمان آن
         </p>

         <div className="mt-[9px] flex flex-col gap-2 customMd:mt-3 customMd:flex-row customMd:gap-[22px]">
            <div className="flex items-center gap-[3px] text-[7px] customMd:gap-2 customMd:text-xs">
               <CiCalendarDate color="#40404080" className="text-[8px] customMd:text-15" />
               <p className="text-primaryBlue">۹ اردیبهشت ۱۴۰۳</p>
            </div>
            <div className="flex items-center gap-[3px] text-[7px] customMd:gap-2 customMd:text-xs">
               <CiClock2 color="#40404080" className="text-[8px] customMd:text-15" />
               <p className="text-primaryBlue">زمان مطالعه ۵ دقیقه</p>
            </div>
         </div>
      </Link>
   );
}

export default ArticleCard;
