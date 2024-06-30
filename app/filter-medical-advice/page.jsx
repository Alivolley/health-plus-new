import Link from 'next/link';

// MUI
import { Breadcrumbs } from '@mui/material';

// Components
import DoctorCard from '@/components/template/doctor-card/doctor-card';
import MedicalAdviceAside from '@/components/pages/filter-medical-advice/medical-advice-aside/medical-advice-aside';
import SortingTabs from '@/components/pages/filter-medical-advice/sorting-tabs/sorting-tabs';
import MobileFilterMenus from '@/components/pages/filter-medical-advice/mobile-filter-menus/mobile-filter-menus';
import PaginationComponent from '@/components/template/pagination-component/pagination-component';

async function FilterMedicalAdvice({ searchParams }) {
   const params = new URLSearchParams(searchParams).toString();
   const doctorsRequest = await fetch(`${process?.env?.NEXT_PUBLIC_API_BASE_URL}doctor/doctorsList?${params}`, {
      next: { revalidate: 60 },
   });
   const doctorsData = await doctorsRequest?.json();

   const specialtyRequest = await fetch(`${process?.env?.NEXT_PUBLIC_API_BASE_URL}doctor/allSpecialtyList`, {
      next: { revalidate: 60 },
   });
   const specialtyData = await specialtyRequest?.json();
   const specialtyList = specialtyData?.data?.map(item => ({ label: item?.name, id: item?.id }));

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
                     href="/filter-medical-advice"
                     key={2}
                     className="text-15 text-textColor2 transition-all duration-200 hover:text-black hover:underline"
                  >
                     مشاوره آنلاین
                  </Link>,
               ]}
            </Breadcrumbs>
            <div
               className="max-customMd:rounded-lg max-customMd:py-[10px] customMd:mt-15 customMd:!shadow-none"
               style={{
                  boxShadow: '0px 0px 15px 0px #0000000D',
               }}
            >
               <p className="text-[20px] leading-8 text-primaryBlue max-customMd:text-center">مشاوره پزشکی و آنلاین</p>
               <p className="mt-15 text-15 leading-7 text-textColor2 max-customMd:hidden">
                  با هلث پلاس می‌توانید ۲۴ ساعته و از همه جای دنیا مشاوره پزشکی و مشاوره روانشناسی بگیرید. هلث پلاس به
                  صورت تخصصی و با حفظ حریم خصوصی، اقدام به ارایه مشاوره آنلاین و مشاوره تلفنی و مشاوره ویدئویی در
                  زمینه‌ی بهترین متخصص کودک و نوزاد کرده است.
               </p>
            </div>

            <div className="mt-5 flex gap-[30px] customMd:mt-[120px]">
               <aside className="h-fit w-[277px] shrink-0 rounded-10 border border-solid border-borderColor max-customLg:hidden">
                  <MedicalAdviceAside specialtyList={specialtyList} searchParams={searchParams} />
               </aside>
               <div className="grow">
                  <p
                     className="rounded-10 border border-solid border-borderColor p-4 text-15 leading-3
                   text-textColor2 max-customMd:text-center customMd:p-5 customMd:text-xl customMd:leading-4"
                  >
                     لیست بهترین متخصصان
                  </p>

                  <MobileFilterMenus specialtyList={specialtyList} searchParams={searchParams} />
                  <div
                     className="mt-5 hidden items-center gap-[60px] rounded-10 border border-solid
                   border-borderColor px-5 customMd:flex"
                  >
                     <p className="whitespace-nowrap text-xl leading-4 text-secondaryBlue">ترتیب نمایش</p>
                     <SortingTabs searchParams={searchParams} />
                  </div>
                  <div className="mt-15 space-y-[15px] customMd:mt-[30px] customMd:space-y-[30px]">
                     {doctorsData?.data?.map(item => (
                        <DoctorCard buttonsType={1} detail={item} key={item?.id} />
                     ))}
                  </div>

                  <div className="mt-[30px] flex justify-center customMd:mt-[60px] customMd:justify-end">
                     <PaginationComponent searchParams={searchParams} totalPage={doctorsData?.total_pages} />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default FilterMedicalAdvice;
