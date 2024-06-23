import Link from 'next/link';
import Image from 'next/image';

// Icons
import { CiCalendarDate, CiClock2 } from 'react-icons/ci';

// Assets
import noImage from '@/assets/images/noImageBlogs.jpg';

function ArticleCard({ detail }) {
   return (
      <Link
         href={`/blogs/blogDetail/${detail?.id}`}
         className="rounded-lg p-[6px] max-customMd:w-[138px] max-customMd:shrink-0 customXs:max-w-[300px] customMd:flex-1 customMd:rounded-[18px] customMd:p-2"
         style={{ boxShadow: '0px 0px 15px 0px #0000000D' }}
      >
         <div className="relative aspect-video w-full">
            <Image
               src={detail?.banner || noImage}
               alt="article"
               fill
               className="rounded-[4px] object-cover customMd:rounded-[9px]"
            />
         </div>
         <p className="mt-[9px] line-clamp-2 h-5 text-10 text-textColor1 customMd:mt-3 customMd:h-14 customMd:text-eighteen customMd:leading-7">
            {detail?.title}
         </p>

         <div className="mt-1 flex flex-col gap-2 border-t border-dashed border-borderColor pt-[9px] customMd:mt-2 customMd:flex-row customMd:gap-[22px] customMd:pt-3">
            <div className="flex items-center gap-[3px] text-[7px] customMd:gap-2 customMd:text-xs">
               <CiCalendarDate color="#40404080" className="text-[8px] customMd:text-15" />
               <p className="text-primaryBlue">{detail?.created_at}</p>
            </div>
            <div className="flex items-center gap-[3px] text-[7px] customMd:gap-2 customMd:text-xs">
               <CiClock2 color="#40404080" className="text-[8px] customMd:text-15" />
               <p className="text-primaryBlue">
                  زمان مطالعه <span className="font-DanaFaNum font-bold">{detail?.read_time}</span> دقیقه
               </p>
            </div>
         </div>
      </Link>
   );
}

export default ArticleCard;
