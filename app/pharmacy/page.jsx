/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

// MUI
import { Breadcrumbs, Button, TextField } from '@mui/material';

// Icons
import { FiPlus } from 'react-icons/fi';

// Assets
import Image from 'next/image';
import pharmacyBanner1 from '@/assets/images/pharmacy-banner1.png';
import pharmacyBanner1Mobile from '@/assets/images/pharmacy-banner1-mobile.png';
import pharmacyIcon1 from '@/assets/images/pharmacy-icon1.png';
import pharmacyIcon2 from '@/assets/images/pharmacy-icon2.png';

function Pharmacy() {
   return (
      <div className="px-eighteen pb-[200px] customMd:px-[90px]">
         <div className="mx-auto max-w-[1260px]">
            <Breadcrumbs separator=">" className="max-customMd:hidden">
               {[
                  <Link
                     href="/"
                     key={1}
                     className="text-15 text-textColor2 transition-all duration-200 hover:text-black hover:underline"
                  >
                     صفحه اصلی
                  </Link>,
                  <Link
                     href="/pharmacy"
                     key={2}
                     className="text-15 text-textColor2 transition-all duration-200 hover:text-black hover:underline"
                  >
                     داروخانه
                  </Link>,
               ]}
            </Breadcrumbs>
            <div
               className="max-customMd:rounded-lg max-customMd:py-[10px] customMd:mt-15 customMd:!shadow-none"
               style={{
                  boxShadow: '0px 0px 15px 0px #0000000D',
               }}
            >
               <p className="text-[20px] leading-8 text-primaryBlue max-customMd:text-center">داروخانه آنلاین</p>
               <p className="mt-15 text-15 leading-7 text-textColor2 max-customMd:hidden">داروخانه آنلاین هلث پلاس</p>
            </div>

            <div className="mt-5 flex flex-col items-stretch gap-5 customMd:mt-[30px] customMd:flex-row customMd:gap-[30px]">
               <div className="customMd:grow">
                  <TextField
                     fullWidth
                     sx={{
                        '& > div': { borderRadius: '10px' },
                        input: { color: '#40404080' },
                     }}
                     inputProps={{ className: 'customMd:!text-xl' }}
                     placeholder="آدرس محل تحویل را وارد کنید"
                  />
               </div>
               <Button
                  startIcon={<FiPlus />}
                  variant="contained"
                  sx={{ paddingX: '37px', color: '#fff', borderRadius: '10px', fontSize: '15px' }}
                  className="max-customMd:h-[50px] customMd:!text-xl"
               >
                  آدرس جدید
               </Button>
            </div>

            <div className="mt-5 max-customMd:rounded-[6px] max-customMd:bg-[#2ED7FE0D] max-customMd:px-8 customMd:mt-[30px]">
               <img src={pharmacyBanner1.src} alt="banner" className="w-full max-customMd:hidden" />
               <img src={pharmacyBanner1Mobile.src} alt="banner" className="w-full customMd:hidden" />
            </div>

            <div className="mt-5 flex gap-[5px] customMd:mt-[143px] customMd:gap-6">
               <div className="flex-1 rounded-[5px] bg-[#2ED7FE0D] pb-15 customMd:rounded-[20px] customMd:pb-[35px]">
                  <div className="mx-auto size-[101px] customMd:mt-[-85px] customMd:size-[500px]">
                     <Image src={pharmacyIcon2} alt="icon" className="size-full" />
                  </div>

                  <div className="text-center customMd:mt-[54px]">
                     <p className="text-xs leading-[10px] text-textColor1 customMd:text-[30px] customMd:leading-[25px]">
                        سفارش دارو
                     </p>
                     <p className="mt-[9px] text-10 leading-[8px] text-textColor2 customMd:mt-5 customMd:text-[30px] customMd:leading-[25px]">
                        تصویر نسخه یا نام دارو
                     </p>
                  </div>
               </div>
               <div className="flex-1 rounded-[5px] bg-[#2ED7FE0D] pb-15 customMd:rounded-[20px] customMd:pb-[35px]">
                  <div className="mx-auto size-[101px] customMd:mt-[-85px] customMd:size-[500px]">
                     <Image src={pharmacyIcon1} alt="icon" className="size-full" />
                  </div>

                  <div className="text-center customMd:mt-[54px]">
                     <p className="text-xs leading-[10px] text-textColor1 customMd:text-[30px] customMd:leading-[25px]">
                        فروشگاه
                     </p>
                     <p className="mt-[9px] text-10 leading-[8px] text-textColor2 customMd:mt-5 customMd:text-[30px] customMd:leading-[25px]">
                        لوازم آرایشی بهداشتی
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Pharmacy;
