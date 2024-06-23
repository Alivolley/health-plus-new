import Link from 'next/link';

// MUI
import { Button } from '@mui/material';

// Icons
import { MdKeyboardArrowLeft } from 'react-icons/md';
import Image from 'next/image';

// Assets
import homeCounselingPic1 from '@/assets/images/homeCounselingPic1.png';
import homeCounselingPic2 from '@/assets/images/homeCounselingPic2.png';
import homeCounselingPic3 from '@/assets/images/homeCounselingPic3.png';
import homeCounselingPic4 from '@/assets/images/homeCounselingPic4.png';
import homeCounselingPic5 from '@/assets/images/homeCounselingPic5.png';
import homeCounselingPic6 from '@/assets/images/homeCounselingPic6.png';
import homeCounselingPic7 from '@/assets/images/homeCounselingPic7.png';
import homeCounselingPic8 from '@/assets/images/homeCounselingPic8.png';

// Components

function HomeCounseling() {
   const array = [
      { id: 1, title: 'افسردگی', pic: homeCounselingPic1 },
      { id: 2, title: 'ازدواج', pic: homeCounselingPic2 },
      { id: 3, title: 'تربیت فرزندان', pic: homeCounselingPic3 },
      { id: 4, title: 'جنسی', pic: homeCounselingPic4 },
      { id: 5, title: 'توانبخشی', pic: homeCounselingPic5 },
      { id: 6, title: 'اعتیاد', pic: homeCounselingPic6 },
      { id: 7, title: 'نوجوانی و بلوغ', pic: homeCounselingPic7 },
      { id: 8, title: 'کاری و تحصیلی', pic: homeCounselingPic8 },
   ];

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
            <div className="mt-[9px] flex items-center overflow-auto py-2 max-customMd:gap-[9px] customMd:mt-[23px] customMd:justify-between">
               {array?.map(item => (
                  <Link href="/" className="flex flex-col items-center gap-[9px] customMd:gap-[22px]" key={item?.id}>
                     <div className="flex size-16 items-center justify-center rounded-15 bg-[#E5FAFF] customMd:size-[98px] customMd:rounded-[38px]">
                        <div className="size-9 customMd:size-[56px]">
                           <Image src={item?.pic} alt="icon" className="size-full" />
                        </div>
                     </div>
                     <p className="text-center text-[11px] text-textColor3 customMd:text-[19px] customMd:text-textColor1">
                        {item?.title}
                     </p>
                  </Link>
               ))}
            </div>
         </div>
      </div>
   );
}

export default HomeCounseling;
