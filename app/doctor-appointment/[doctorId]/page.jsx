import Link from 'next/link';

// MUI
import { Breadcrumbs, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Icons
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { LiaComment } from 'react-icons/lia';

// Components
import MedicalAdviceAside from '@/components/pages/filter-medical-advice/medical-advice-aside/medical-advice-aside';
import CommentItem from '@/components/template/comment-item/comment-item';
import WeekDays from '@/components/pages/doctor-appointment/week-days/week-days';
import MobileFilterButton from '@/components/pages/doctor-appointment/mobile-filter-button/mobile-filter-button';

async function DoctorAppointment({ params, searchParams }) {
   const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

   const doctorDetailRequest = await fetch(
      `${process?.env?.NEXT_PUBLIC_API_BASE_URL}doctor/doctorDetail?dr_id=${params?.doctorId}`,
      { cache: 'no-store' }
   );
   const doctorDetailData = await doctorDetailRequest?.json();

   console.log(doctorDetailData);

   const specialtyRequest = await fetch(`${process?.env?.NEXT_PUBLIC_API_BASE_URL}doctor/allSpecialtyList`, {
      next: { revalidate: 60 },
   });
   const specialtyData = await specialtyRequest?.json();
   const specialtyList = specialtyData?.data?.map(item => ({ label: item?.name, id: item?.id }));

   function isEven(n) {
      return n % 2 === 0;
   }

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

                  <div className="mt-15 flex flex-wrap gap-[5px] customMd:mt-[30px] customMd:gap-5">
                     {array?.map(item => (
                        <Button
                           key={item}
                           sx={{
                              border: isEven(item) ? '1px solid #40404080' : '1px solid #40404033',
                              borderRadius: '5px',
                              color: isEven(item) ? '#40404080' : '#40404033',
                              fontFamily: 'DanaFaNum',
                              fontWeight: '700',
                              fontSize: '15px',
                           }}
                           className="h-[30px] w-[67px] customMd:h-[50px] customMd:w-[98px] customMd:!rounded-10 customMd:!text-xl"
                        >
                           10:30
                        </Button>
                     ))}
                  </div>

                  <div className="mt-[30px] customMd:mt-[90px]">
                     <div className="mb-15 flex items-center gap-[10px] customMd:mb-[22px]">
                        <LiaComment color="#2ED7FE" size="22px" />
                        <p className="font-kalamehSemiBold600 text-15 leading-4 text-textColor1 customMd:text-xl">
                           امتیاز و نظرات کاربران
                        </p>
                     </div>

                     <div className="rounded-10 bg-[#2ED7FE0D] p-15 customMd:px-5 customMd:py-[30px]">
                        <div className="mt-[10px] text-center font-DanaFaNum text-15 font-bold leading-3 customMd:mt-5 customMd:text-xl customMd:leading-4">
                           <p className="text-[#FFAF03]">امتیاز 4.4</p>
                           <p className="mt-[10px] text-[#4EE292] customMd:mt-5">از ۲۰۷ امتیاز</p>
                        </div>
                        <div className="mt-15 flex flex-col gap-[15px] customMd:mt-[30px] customMd:gap-[30px]">
                           <CommentItem />
                           <CommentItem />
                           <CommentItem />
                           <CommentItem />
                           <CommentItem />
                           <CommentItem />
                           <CommentItem />

                           <div className="flex justify-end">
                              <LoadingButton
                                 className="customMd:!text-15"
                                 sx={{ fontSize: '10px' }}
                                 endIcon={<MdOutlineKeyboardArrowDown />}
                              >
                                 نمایش نظرات بیشتر به کاربران
                              </LoadingButton>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default DoctorAppointment;
