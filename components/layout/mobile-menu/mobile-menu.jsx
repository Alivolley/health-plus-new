import Link from 'next/link';
import Image from 'next/image';

// MUI
import { Drawer } from '@mui/material';

// Icons
import { BiBookmarkAltPlus } from 'react-icons/bi';
import { GiMedicines } from 'react-icons/gi';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { FaUserDoctor } from 'react-icons/fa6';
import { IoIosArrowDown } from 'react-icons/io';

// Assets
import logoPic from '@/assets/images/logo.png';

// Components
import MobileMenuAccordion from '@/components/template/mobile-menu-accordion/mobile-menu-accordion';

// Apis
import useGetSpecialty from '@/apis/specialty/useGetSpecialty';

function MobileMenu({ open, onClose }) {
   const { data: specialtyData, isLoading: specialtyIsLoading } = useGetSpecialty();

   return (
      <Drawer
         anchor="left"
         open={open}
         onClose={onClose}
         sx={{
            '.MuiPaper-root': {
               borderTopRightRadius: '20px',
               borderBottomRightRadius: '20px',
            },
         }}
      >
         <div className="w-[206px] px-eighteen py-[30px]">
            <div className="flex justify-center">
               <Image src={logoPic} alt="logo" width="140" />
            </div>

            <div className="mt-[30px] flex flex-col gap-5">
               <MobileMenuAccordion
                  title={
                     <div className="flex items-center gap-[5px] text-xs">
                        <FaUserDoctor color="#2ED7FE80" />
                        <p>مشاوره آنلاین</p>
                        <IoIosArrowDown color="#2ED7FE" id="icon" className="transition-all duration-200" />
                     </div>
                  }
               >
                  <div className="mt-2 flex flex-col gap-4">
                     <Link href="/online-medical-advice" className="text-xs text-textColor2">
                        مشاهده تمام تخصص ها
                     </Link>

                     {specialtyIsLoading ? (
                        <>
                           <div className="h-4 w-full animate-pulse rounded-md bg-borderColor" />
                           <div className="h-4 w-full animate-pulse rounded-md bg-borderColor" />
                           <div className="h-4 w-full animate-pulse rounded-md bg-borderColor" />
                           <div className="h-4 w-full animate-pulse rounded-md bg-borderColor" />
                           <div className="h-4 w-full animate-pulse rounded-md bg-borderColor" />
                        </>
                     ) : (
                        specialtyData?.data?.map(item => (
                           <Link
                              href={`/filter-medical-advice?specialty=${item?.id}`}
                              className="text-xs text-textColor2"
                              key={item?.id}
                           >
                              {item?.name}
                           </Link>
                        ))
                     )}
                  </div>
               </MobileMenuAccordion>
               <Link
                  href="/appointment-list?services_type=نوبت%20دهی%20مطب&"
                  className="flex items-center gap-[5px] text-xs text-textColor1"
               >
                  <BiBookmarkAltPlus className="text-base" color="#2ED7FE80" />
                  نوبت دهی
               </Link>
               <Link href="/pharmacy" className="flex items-center gap-[5px] text-xs text-textColor1">
                  <GiMedicines className="text-base" color="#2ED7FE80" />
                  داروخانه
               </Link>
               <MobileMenuAccordion
                  title={
                     <div className="flex items-center gap-[5px] text-xs">
                        <FaUserDoctor color="#2ED7FE80" />
                        <p>پزشک در منزل</p>
                        <IoIosArrowDown color="#2ED7FE" id="icon" className="transition-all duration-200" />
                     </div>
                  }
               >
                  <div className="mt-2 flex flex-col gap-4">
                     <Link href="/visit-at-home" className="text-xs text-textColor2">
                        ویزیت پزشک در منزل
                     </Link>
                     <Link href="/visit-at-home" className="text-xs text-textColor2">
                        آزمایش در منزل
                     </Link>
                     <Link href="/visit-at-home" className="text-xs text-textColor2">
                        پرستاری در منزل
                     </Link>
                  </div>
               </MobileMenuAccordion>
               <Link href="/blogs" className="flex items-center gap-[5px] text-xs text-textColor1">
                  <IoDocumentTextOutline className="text-base" color="#2ED7FE80" />
                  مجله سلامت
               </Link>
            </div>
         </div>
      </Drawer>
   );
}

export default MobileMenu;
