import Link from 'next/link';
import Image from 'next/image';

// MUI
import { Avatar, AvatarGroup } from '@mui/material';

// Assets
import noProfilePic from '@/assets/images/noProfile.png';
import noImagePic from '@/assets/images/noImageBlogs.jpg';

function MedicalAdviceCart({ detail }) {
   return (
      <Link
         href={`/filter-medical-advice?specialty=${detail?.id}`}
         className="flex flex-col gap-[14px] rounded-10 bg-white px-[10px] pb-[10px] pt-15
          customMd:flex-row customMd:items-center customMd:gap-[19px] customMd:rounded-[25px] customMd:p-[30px]"
         style={{ boxShadow: '0px 0px 15px 0px #0000000D' }}
      >
         <div className="relative max-customMd:mx-auto max-customMd:size-[50px] customMd:size-[78px] customMd:shrink-0">
            <Image src={detail?.logo || noImagePic} alt="pic" fill className="object-cover" />
         </div>
         <div className="customMd:grow">
            <p className="line-clamp-2 text-[13px] leading-4 text-textColor1 max-customMd:h-8 max-customMd:text-center customMd:line-clamp-1 customMd:text-xl">
               {detail?.name}
            </p>
            <div className="customMd:mt-[10px]">
               <p className="line-clamp-2 h-10 text-15 leading-5 text-textColor2 max-customMd:hidden">
                  {detail?.description}
               </p>
               <div className="mt-15 items-center justify-between customMd:mt-[23px] customMd:flex">
                  <div className="max-customMd:hidden">
                     <AvatarGroup>
                        {detail?.doctors_profile?.map(item => (
                           <Avatar
                              key={crypto?.randomUUID()}
                              alt="doctor"
                              src={item || noProfilePic}
                              sx={{ width: '34px', height: '34px', boxShadow: '0px 0px 5px 0px #0000001A' }}
                           />
                        ))}
                     </AvatarGroup>
                  </div>
                  <p
                     className="rounded-[5px] bg-[#E5FAFF] py-3 font-DanaFaNum text-15 leading-[8px] text-primaryBlue
                   max-customMd:text-center customMd:rounded-xl customMd:px-15 customMd:text-xs customMd:leading-[8px]"
                  >
                     {detail?.doctors_count}+ پزشک
                  </p>
               </div>
            </div>
         </div>
      </Link>
   );
}

export default MedicalAdviceCart;
