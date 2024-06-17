'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// MUI
import { Breadcrumbs, Button, Dialog, Pagination, Tab, Tabs } from '@mui/material';

// Components
import MedicalAdviceAside from '@/components/pages/filter-medical-advice/medical-advice-aside/medical-advice-aside';
import MobileSortingModal from '@/components/pages/filter-medical-advice/mobile-sorting-modal/mobile-sorting-modal';
import DoctorCard from '@/components/template/doctor-card/doctor-card';

const filterBtnStyle = {
   backgroundColor: '#2ED7FE0D',
   height: '45px',
   border: 'solid 1px #2ED7FE',
   borderRadius: '10px',
   color: '#404040',
   fontSize: '15px',
   lineHeight: '12px',
};

function AppointmentList({ searchParams }) {
   const [sortingValue, setSortingValue] = useState('');
   const [showFilterMobile, setShowFilterMobile] = useState(false);
   const [showSortingMobile, setShowSortingMobile] = useState(false);

   const { push } = useRouter();

   useEffect(() => {
      setSortingValue(searchParams?.ordering || '');
   }, [searchParams]);

   const changeTabHandler = (e, newValue) => {
      setSortingValue(newValue);

      const newSearchParams = { ...searchParams, ordering: newValue };
      const params = new URLSearchParams(newSearchParams).toString();
      push(`?${params}`, { scroll: false });
   };

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
                     href="/appointment-list"
                     key={2}
                     className="text-15 text-textColor2 transition-all duration-200 hover:text-black hover:underline"
                  >
                     نوبت دهی
                  </Link>,
               ]}
            </Breadcrumbs>
            <div
               className="max-customMd:rounded-lg max-customMd:py-[10px] customMd:mt-15 customMd:!shadow-none"
               style={{
                  boxShadow: '0px 0px 15px 0px #0000000D',
               }}
            >
               <p className="text-[20px] leading-8 text-primaryBlue max-customMd:text-center">
                  نوبت دهی آنلاین در هلث پلاس
               </p>
               <p className="mt-15 text-15 leading-7 text-textColor2 max-customMd:hidden">
                  درخواست نوبت آنلاین از بهترین متخصصین در وبسایت هلث پلاس
               </p>
            </div>

            <div className="mt-5 flex gap-[30px] customMd:mt-[120px]">
               <aside className="h-fit w-[277px] shrink-0 rounded-10 border border-solid border-borderColor max-customLg:hidden">
                  <MedicalAdviceAside />
               </aside>
               <div className="grow">
                  <p
                     className="rounded-10 border border-solid border-borderColor p-4 text-15 leading-3
              text-textColor2 max-customMd:text-center customMd:p-5 customMd:text-xl customMd:leading-4"
                  >
                     درخواست نوبت دهی آنلاین‌
                  </p>

                  <div className="mt-15 flex items-center gap-5 customLg:hidden">
                     <Button className="flex-1" sx={filterBtnStyle} onClick={() => setShowFilterMobile(true)}>
                        فیلتر ها
                     </Button>
                     <Button className="flex-1" sx={filterBtnStyle} onClick={() => setShowSortingMobile(true)}>
                        ترتیب نمایش
                     </Button>
                  </div>
                  <div
                     className="mt-5 hidden items-center gap-[60px] rounded-10 border border-solid
              border-borderColor px-5 customMd:flex"
                  >
                     <p className="whitespace-nowrap text-xl leading-4 text-secondaryBlue">ترتیب نمایش</p>
                     <div>
                        <Tabs value={sortingValue} onChange={changeTabHandler} variant="scrollable">
                           <Tab
                              label="پیش فرض"
                              value=""
                              sx={{ fontSize: '20px', paddingY: '20px', lineHeight: '16px' }}
                           />
                           <Tab
                              label="بیشترین امتیاز"
                              value="mostScore"
                              sx={{ fontSize: '20px', paddingY: '20px', lineHeight: '16px' }}
                           />
                           <Tab
                              label="نزدیک ترین نوبت"
                              value="closestTurn"
                              sx={{ fontSize: '20px', paddingY: '20px', lineHeight: '16px' }}
                           />
                           <Tab
                              label="بیشترین نوبت موفق"
                              value="mostSuccessfulTurn"
                              sx={{ fontSize: '20px', paddingY: '20px', lineHeight: '16px' }}
                           />
                        </Tabs>
                     </div>
                  </div>
                  <div className="mt-15 space-y-[15px] customMd:mt-[30px] customMd:space-y-[30px]">
                     <DoctorCard buttonsType={2} />
                     <DoctorCard buttonsType={2} />
                     <DoctorCard buttonsType={2} />
                     <DoctorCard buttonsType={2} />
                     <DoctorCard buttonsType={2} />
                     <DoctorCard buttonsType={2} />
                     <DoctorCard buttonsType={2} />
                  </div>

                  <div className="mt-[30px] flex  justify-center customMd:mt-[60px] customMd:justify-end">
                     <Pagination count={3} variant="outlined" shape="rounded" />
                  </div>
               </div>
            </div>
         </div>

         <Dialog open={showFilterMobile} onClose={() => setShowFilterMobile(false)} top>
            <div className="rounded-10">
               <MedicalAdviceAside onClose={() => setShowFilterMobile(false)} />{' '}
            </div>
         </Dialog>

         <Dialog open={showSortingMobile} onClose={() => setShowSortingMobile(false)} top>
            <MobileSortingModal setShowSortingMobile={setShowSortingMobile} />
         </Dialog>
      </div>
   );
}

export default AppointmentList;
