import Link from 'next/link';

// MUI
import { Button } from '@mui/material';

// Icons
import { MdKeyboardArrowLeft } from 'react-icons/md';
import Image from 'next/image';

// Components

function HomeCounseling({ detail }) {
   return (
      <div className="px-eighteen pb-[27px] pt-eighteen customMd:px-[90px] customMd:pb-[68px] customMd:pt-[45px]">
         <div className="mx-auto max-w-[1260px]">
            <div className="max-customMd:hidden">
               <p className="text-center text-[19px] text-textColor1">مشاوره با روانشناس</p>
               <p className="mt-[11px] text-center font-kalamehRegular400 text-[19px] text-textColor2">
                  ارائه خدمات مشاوره تلفنی و متنی
               </p>
            </div>
            <div className="flex items-center justify-between customMd:mt-[26px] customMd:justify-end">
               <p className="font-kalamehSemiBold600 text-sm text-textColor1 customMd:hidden">مشاوره با روانشناس</p>
               <Link href="/online-medical-advice">
                  <Button
                     endIcon={<MdKeyboardArrowLeft className="!text-[11px] customMd:!text-eighteen" />}
                     sx={{ span: { marginInlineStart: 0 } }}
                     className="!text-[11px] customMd:!text-eighteen"
                  >
                     نمایش همه تخصص ها
                  </Button>
               </Link>
            </div>
            <div
               className={`mt-[9px] flex items-center overflow-auto py-2 max-customMd:gap-[9px] customMd:mt-[23px] ${
                  detail?.data?.length >= 5 ? 'customMd:justify-between' : 'customMd:justify-center customMd:gap-7'
               }`}
            >
               {detail?.data?.map(item => (
                  <Link
                     href={`filter-medical-advice?specialty=${item?.id}`}
                     className="flex flex-1 flex-col items-center gap-[9px] customMd:gap-[22px]"
                     key={item?.id}
                  >
                     <div className="flex size-16 items-center justify-center rounded-15 bg-[#E5FAFF] customMd:size-[98px] customMd:rounded-[38px]">
                        <div className="relative size-9 customMd:size-[56px]">
                           <Image src={item?.logo} alt="icon" fill />
                        </div>
                     </div>
                     <p className="text-center text-[11px] text-textColor3 customMd:text-[19px] customMd:text-textColor1">
                        {item?.name}
                     </p>
                  </Link>
               ))}
            </div>
         </div>
      </div>
   );
}

export default HomeCounseling;
