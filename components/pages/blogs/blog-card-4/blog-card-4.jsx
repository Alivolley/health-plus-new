import Link from 'next/link';
import Image from 'next/image';

// Icons
import { Calendar, Clock, ArrowLeft2 } from 'iconsax-react';
import { IoDocumentTextOutline } from 'react-icons/io5';

// Assets
import noImage from '@/assets/images/noImageBlogs.jpg';

function BlogCard4({ detail }) {
   return (
      <Link
         href={`/blogs/blogDetail/${detail?.id}`}
         className="group block transition-all duration-200 hover:shadow-sm"
      >
         <div className="flex items-center gap-x-30">
            <div className="relative h-[177px] w-[230px] shrink-0 rounded-20 customLg:w-[277px]">
               <Image src={detail?.banner || noImage} alt="cover" fill className="rounded-20 object-cover" />
            </div>

            <div className="grow">
               <div className="mt-[22px] flex gap-x-[9px]">
                  <IoDocumentTextOutline color="#2ED7FE" className="shrink-0" />
                  <p
                     className="-mt-1.5 line-clamp-2 text-xl leading-6 text-textColor1 transition-all duration-200 group-hover:text-primaryBlue"
                     title={detail?.title}
                  >
                     {detail?.title}
                  </p>
               </div>

               <div className="mb-30 mt-15 flex justify-between customLg:justify-start customLg:gap-x-3 customXl:gap-x-7">
                  <div className="flex gap-x-2.5">
                     <Calendar color="#2ED7FE" size="16" className="shrink-0" />
                     <p className="line-clamp-1 font-DanaFaNum text-xs text-textColor1/50">{detail?.created_at}</p>
                  </div>
                  <div className="flex gap-x-[9px]">
                     <Clock color="#2ED7FE" size="16" className="shrink-0" />
                     <p className="line-clamp-1 text-xs text-textColor1/50">
                        زمان مطالعه <span className="font-DanaFaNum">{detail?.read_time}</span> دقیقه
                     </p>
                  </div>
               </div>

               <div className="flex justify-between">
                  <p className="line-clamp-3 basis-3/4 text-15 leading-6 text-textColor1/50">{detail?.summary}</p>
                  <div className="mt-5 flex items-center justify-end gap-x-[5px] self-end text-primaryBlue group-hover:underline">
                     <p className="text-center text-10 customMd:text-xl">بخوانید</p>
                     <ArrowLeft2 size="16" />
                  </div>
               </div>
            </div>
         </div>
      </Link>
   );
}

export default BlogCard4;
