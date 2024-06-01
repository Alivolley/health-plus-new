import Link from 'next/link';

// MUI
import { Button } from '@mui/material';

// Icons
import { MdKeyboardArrowLeft } from 'react-icons/md';

// Components
import SuggestDoctorCard from '@/components/template/suggest-doctor-card/suggest-doctor-card';

function SuggestedPsychologists() {
   return (
      <div className="bg-[#2ED7FE0D] px-eighteen pb-[27px] pt-eighteen customMd:px-[90px] customMd:py-[45px]">
         <div className="mx-auto max-w-[1260px]">
            <div className="max-customMd:hidden">
               <p className="text-center text-[19px] text-textColor1">روانشناسان پیشنهادی ما</p>
               <p className="mt-[11px] text-center font-kalamehRegular400 text-[19px] text-textColor2">
                  ارائه خدمات مشاوره تلفنی و متنی
               </p>
            </div>
            <div className="flex items-center justify-between customMd:mt-[26px] customMd:justify-end">
               <p className="font-kalamehSemiBold600 text-sm text-textColor1 customMd:hidden">روانشناسان پیشنهادی ما</p>
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

            <div className="mt-[9px] flex items-center gap-[9px] overflow-auto customMd:mt-[23px] customMd:justify-center customMd:gap-[23px]">
               <SuggestDoctorCard />
               <SuggestDoctorCard />
               <SuggestDoctorCard />
               <SuggestDoctorCard />
               <SuggestDoctorCard />
               <SuggestDoctorCard />
            </div>
         </div>
      </div>
   );
}

export default SuggestedPsychologists;
