/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Image from 'next/image';

// Assets
import banner1Desktop from '@/assets/images/banner1Desktop.png';
import banner1Mobile from '@/assets/images/banner1Mobile.png';
import homeBannerVisit from '@/assets/images/homeBannerVisit.png';
import homeBannerTurn from '@/assets/images/homeBannerTurn.png';
import homeBannerPharmacy from '@/assets/images/homeBannerPharmacy.png';
import homeBannerCounseling from '@/assets/images/homeBannerCounseling.png';

function HomeBanner1() {
   return (
      <div className="px-eighteen customMd:px-[90px]">
         <div className="mx-auto max-w-[1260px]">
            <img src={banner1Desktop.src} alt="banner" className="w-full max-customMd:hidden" />
            <img src={banner1Mobile.src} alt="banner" className="w-full customMd:hidden" />

            <div className="mt-eighteen customMd:mt-[45px]">
               <div>
                  <p className="text-center text-[19px] text-textColor1 max-customMd:hidden">مشاوره با پزشک متخصص</p>
                  <p className="mt-[11px] text-center font-kalamehRegular400 text-[19px] text-textColor2 max-customMd:hidden">
                     مشاوره فنی و تلفنی
                  </p>
                  <p className="font-kalamehSemiBold600 text-sm text-textColor1 customMd:hidden">دسته بندی ها</p>
               </div>
               <div className="mt-[9px] flex items-center justify-center gap-[9px] customMd:mt-[45px] customMd:gap-[120px]">
                  <Link
                     href="/online-medical-advice"
                     className="flex flex-col items-center gap-[9px] customMd:gap-[22px]"
                  >
                     <div
                        style={{ background: 'linear-gradient(360deg, #CF63FE 0%, #FAD1FE 100%)' }}
                        className="flex size-16 items-center justify-center rounded-15 customMd:size-[101px] customMd:rounded-[38px]"
                     >
                        <div className="size-9 customMd:size-[56px]">
                           <Image src={homeBannerCounseling} alt="icon" className="size-full" />
                        </div>
                     </div>
                     <p className="text-center text-[11px] text-textColor3 customMd:text-[19px] customMd:text-textColor1">
                        مشاوره آنلاین
                     </p>
                  </Link>
                  <Link
                     href="/appointment-list?services_type=نوبت%20دهی%20مطب&"
                     className="flex flex-col items-center gap-[9px] customMd:gap-[22px]"
                  >
                     <div
                        style={{ background: 'linear-gradient(360deg, #FE639B 0%, #FED1E1 100%)' }}
                        className="flex size-16 items-center justify-center rounded-15 customMd:size-[101px] customMd:rounded-[38px]"
                     >
                        <div className="size-9 customMd:size-[56px]">
                           <Image src={homeBannerTurn} alt="icon" className="size-full" />
                        </div>
                     </div>
                     <p className="text-center text-[11px] text-textColor3 customMd:text-[19px] customMd:text-textColor1">
                        نوبت دهی
                     </p>
                  </Link>
                  <Link href="/pharmacy" className="flex flex-col items-center gap-[9px] customMd:gap-[22px]">
                     <div
                        style={{ background: 'linear-gradient(360deg, #63D9FE 0%, #D1EEFE 100%)' }}
                        className="flex size-16 items-center justify-center rounded-15 customMd:size-[101px] customMd:rounded-[38px]"
                     >
                        <div className="size-9 customMd:size-[56px]">
                           <Image src={homeBannerPharmacy} alt="icon" className="size-full" />
                        </div>
                     </div>
                     <p className="text-center text-[11px] text-textColor3 customMd:text-[19px] customMd:text-textColor1">
                        داروخانه
                     </p>
                  </Link>
                  <Link href="/visit-at-home" className="flex flex-col items-center gap-[9px] customMd:gap-[22px]">
                     <div
                        style={{ background: 'linear-gradient(360deg, #FEB763 0%, #FEF7D1 100%)' }}
                        className="flex size-16 items-center justify-center rounded-15 customMd:size-[101px] customMd:rounded-[38px]"
                     >
                        <div className="size-9 customMd:size-[56px]">
                           <Image src={homeBannerVisit} alt="icon" className="size-full" />
                        </div>
                     </div>
                     <p className="text-center text-[11px] text-textColor3 customMd:text-[19px] customMd:text-textColor1">
                        ویزیت در منزل
                     </p>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}

export default HomeBanner1;
