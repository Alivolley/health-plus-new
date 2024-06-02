import Link from 'next/link';
import Image from 'next/image';

// MUI
import { Avatar, AvatarGroup } from '@mui/material';

// Assets
import medicalAdviceCartSample from '@/assets/images/medicalAdviceCartSample.png';
import doctorProfileSample from '@/assets/images/doctorProfileSample.png';

function MedicalAdviceCart() {
   return (
      <Link
         href="/filter-medical-advice"
         className="flex flex-col gap-[14px] rounded-10 bg-white px-[10px] pb-[10px] pt-15
          customMd:flex-row customMd:items-center customMd:gap-[19px] customMd:rounded-[25px] customMd:p-[30px]"
         style={{ boxShadow: '0px 0px 15px 0px #0000000D' }}
      >
         <div className="max-customMd:mx-auto max-customMd:h-[50px] customMd:w-[78px] customMd:shrink-0">
            <Image src={medicalAdviceCartSample} alt="pic" className="size-full" />
         </div>
         <div className="customMd:grow">
            <p className="line-clamp-2 text-[13px] leading-4 text-textColor1 max-customMd:h-8 max-customMd:text-center  customMd:line-clamp-1 customMd:text-xl">
               متخصص زنان و زایمان
            </p>
            <div className="customMd:mt-[10px]">
               <p className="line-clamp-2 h-10 text-15 leading-5 text-textColor2 max-customMd:hidden">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
               </p>
               <div className="mt-15 items-center justify-between customMd:mt-[23px] customMd:flex">
                  <div className="max-customMd:hidden">
                     <AvatarGroup>
                        <Avatar
                           alt="doctor"
                           src={doctorProfileSample.src}
                           sx={{ width: '34px', height: '34px', boxShadow: '0px 0px 5px 0px #0000001A' }}
                        />
                        <Avatar
                           alt="doctor"
                           src={doctorProfileSample.src}
                           sx={{ width: '34px', height: '34px', boxShadow: '0px 0px 5px 0px #0000001A' }}
                        />
                        <Avatar
                           alt="doctor"
                           src={doctorProfileSample.src}
                           sx={{ width: '34px', height: '34px', boxShadow: '0px 0px 5px 0px #0000001A' }}
                        />
                        <Avatar
                           alt="doctor"
                           src={doctorProfileSample.src}
                           sx={{ width: '34px', height: '34px', boxShadow: '0px 0px 5px 0px #0000001A' }}
                        />
                     </AvatarGroup>
                  </div>
                  <p
                     className="rounded-[5px] bg-[#E5FAFF] py-3 text-15 leading-[8px] text-primaryBlue max-customMd:text-center
                   customMd:rounded-xl customMd:px-15 customMd:text-xs customMd:leading-[8px]"
                  >
                     ۱۰۰۰+ پزشک
                  </p>
               </div>
            </div>
         </div>
      </Link>
   );
}

export default MedicalAdviceCart;
