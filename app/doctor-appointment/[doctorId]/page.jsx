import Link from 'next/link';

// MUI
import { Breadcrumbs } from '@mui/material';

// Icons
import { LiaComment } from 'react-icons/lia';

// Components
import MedicalAdviceAside from '@/components/pages/filter-medical-advice/medical-advice-aside/medical-advice-aside';
import WeekDays from '@/components/pages/doctor-appointment/week-days/week-days';
import MobileFilterButton from '@/components/pages/doctor-appointment/mobile-filter-button/mobile-filter-button';
import DoctorComments from '@/components/template/doctor-comments/doctor-comments';

async function DoctorAppointment({ params, searchParams }) {
   const doctorDetailRequest = await fetch(
      `${process?.env?.NEXT_PUBLIC_API_BASE_URL}doctor/doctorDetail?dr_id=${params?.doctorId}`,
      { cache: 'no-store' }
   );
   const doctorDetailData = await doctorDetailRequest?.json();

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
                     href="/appointment-list?services_type=نوبت%20دهی%20مطب"
                     key={2}
                     className="text-15 text-textColor2 transition-all duration-200 hover:text-black hover:underline"
                  >
                     نوبت دهی
                  </Link>,
                  <Link
                     href={`/filter-medical-advice?specialty=${doctorDetailData?.data?.specialty_id}`}
                     key={2}
                     className="text-15 text-textColor2 transition-all duration-200 hover:text-black hover:underline"
                  >
                     {doctorDetailData?.data?.specialty}
                  </Link>,
                  <p key={2} className="text-15 text-textColor2">
                     {doctorDetailData?.data?.full_name}
                  </p>,
               ]}
            </Breadcrumbs>

            <div
               className="max-customMd:rounded-lg max-customMd:py-[10px] customMd:mt-15 customMd:!shadow-none"
               style={{ boxShadow: '0px 0px 15px 0px #0000000D' }}
            >
               <p className="text-[20px] leading-8 text-primaryBlue max-customMd:text-center">
                  نوبت دهی آنلاین در هلث پلاس
               </p>
               <p className="mt-15 text-15 leading-7 text-textColor2 max-customMd:hidden">
                  درخواست نوبت آنلاین از بهترین متخصصین در وبسایت هلث پلاس
               </p>
            </div>

            <div className="mt-5 gap-[30px] customMd:mt-[120px] customMd:flex">
               <aside className="h-fit w-[277px] shrink-0 rounded-10 border border-solid border-borderColor max-customLg:hidden">
                  <MedicalAdviceAside
                     searchParams={searchParams}
                     specialtyList={specialtyList}
                     basePath="/filter-medical-advice"
                  />
               </aside>
               <div className="customMd:grow">
                  <p className="rounded-10 border border-solid border-borderColor p-4 text-center text-15 leading-3 text-textColor2 customMd:hidden">
                     شماره نظام پزشکی{' '}
                     <span className="font-DanaFaNum font-bold">{doctorDetailData?.data?.medical_number}</span>
                  </p>

                  <MobileFilterButton specialtyList={specialtyList} searchParams={searchParams} />

                  <WeekDays doctorDetailData={doctorDetailData} />

                  <div className="mt-[30px] customMd:mt-[90px]">
                     <div className="mb-15 flex items-center gap-[10px] customMd:mb-[22px]">
                        <LiaComment color="#2ED7FE" size="22px" />
                        <p className="font-kalamehSemiBold600 text-15 leading-4 text-textColor1 customMd:text-xl">
                           امتیاز و نظرات کاربران
                        </p>
                     </div>

                     <div className="rounded-10 bg-[#2ED7FE0D] p-15 customMd:px-5 customMd:py-[30px]">
                        <div className="mt-[10px] text-center font-DanaFaNum text-15 font-bold leading-3 customMd:mt-5 customMd:text-xl customMd:leading-4">
                           <p className="text-[#FFAF03]">امتیاز {doctorDetailData?.data?.score}</p>
                           <p className="mt-[10px] text-[#4EE292] customMd:mt-5">
                              از {doctorDetailData?.data?.score_count} نظر
                           </p>
                        </div>

                        <DoctorComments doctorId={params?.doctorId} />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default DoctorAppointment;
