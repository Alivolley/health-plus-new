import Link from 'next/link';
import Image from 'next/image';

// Icons
import { Calendar, Clock, ArrowLeft2 } from 'iconsax-react';
import { IoDocumentTextOutline } from 'react-icons/io5';

// Assets
import noImage from '@/assets/images/noImageBlogs.jpg';

function BlogCard3({ detail }) {
   return (
      <Link href={`/blogs/blogDetail/${detail?.id}`} className="group block">
         <div className="relative h-[175px] w-full rounded-10 bg-primaryBlue">
            <Image src={detail?.banner || noImage} alt="cover" fill className="rounded-10 object-cover" />
         </div>

         <div className="mt-[22px] flex items-center gap-x-[9px]">
            <IoDocumentTextOutline color="#2ED7FE" className="shrink-0" />
            <p
               className="line-clamp-2 h-[48px] text-15 leading-6 text-textColor1 transition-all duration-200 group-hover:text-primaryBlue"
               title={detail?.title}
            >
               {detail?.title}
            </p>
         </div>

         <div className="flex gap-x-2 customLg:gap-x-30">
            <div className="mt-[22px] flex gap-x-[9px]">
               <Calendar color="#2ED7FE" size="16" className="shrink-0" />
               <p className="line-clamp-1 font-DanaFaNum text-xs text-textColor1/50">{detail?.created_at}</p>
            </div>
            <div className="mt-[22px] flex gap-x-[9px]">
               <Clock color="#2ED7FE" size="16" className="shrink-0" />
               <p className="line-clamp-1 text-xs text-textColor1/50">
                  زمان مطالعه <span className="font-DanaFaNum">{detail?.read_time}</span> دقیقه
               </p>
            </div>
         </div>

         <p className="mt-5 line-clamp-4 h-[96px] text-15 leading-6 text-textColor1/50">{detail?.summary}</p>

         <div className="mt-5 flex items-center justify-end gap-x-[5px] text-primaryBlue group-hover:underline max-customMd:hidden">
            <p className="text-center text-10 customMd:text-xl">بیشتر بخوانید</p>
            <ArrowLeft2 size="16" />
         </div>
      </Link>
   );
}

export default BlogCard3;
