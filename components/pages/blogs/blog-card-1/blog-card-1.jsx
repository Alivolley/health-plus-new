import Link from 'next/link';
import Image from 'next/image';

// icons
import { IoDocumentTextOutline } from 'react-icons/io5';
import { Calendar, Clock } from 'iconsax-react';

// Assets
import noImage from '@/assets/images/noImageBlogs.jpg';

function BlogCard1({ detail }) {
   return (
      <Link
         href={`/blogs/blogDetail/${detail?.id}`}
         className="group flex items-center gap-x-1 transition-all duration-200 hover:shadow-sm customLg:gap-2.5"
         key={detail?.id}
      >
         <div className="relative size-[95px] shrink-0 rounded-10 bg-primaryBlue">
            <Image src={detail?.banner || noImage} alt="banner" fill className="rounded-10 object-cover" />
         </div>

         <div className="space-y-2.5">
            <div className="flex items-center gap-x-[5px] customLg:gap-x-[9px]">
               <IoDocumentTextOutline color="#2ED7FE" className="shrink-0" />
               <p
                  className="line-clamp-1 text-xs text-textColor1 transition-all duration-200 group-hover:text-primaryBlue"
                  title={detail?.title}
               >
                  {detail?.title}
               </p>
            </div>
            <div className="flex items-center gap-x-[5px] customLg:gap-x-[9px]">
               <Calendar color="#2ED7FE" size="16" className="shrink-0" />
               <p className="line-clamp-1 font-DanaFaNum text-xs text-textColor1/50">{detail?.created_at}</p>
            </div>
            <div className="flex items-center gap-x-[5px] customLg:gap-x-[9px]">
               <Clock color="#2ED7FE" size="16" className="shrink-0" />
               <p className="line-clamp-1 text-xs text-textColor1/50 transition-all duration-200 group-hover:text-textColor1">
                  زمان مطالعه <span className="font-DanaFaNum">{detail?.read_time}</span> دقیقه
               </p>
            </div>
         </div>
      </Link>
   );
}

export default BlogCard1;
