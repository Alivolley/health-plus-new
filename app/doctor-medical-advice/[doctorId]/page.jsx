import Image from 'next/image';
import Link from 'next/link';

// MUI
import { Breadcrumbs, Button, Grid, IconButton } from '@mui/material';

// Icons
import { IoLocation } from 'react-icons/io5';
import { FaUserDoctor } from 'react-icons/fa6';
import { FiPhoneCall } from 'react-icons/fi';
import { Edit } from 'iconsax-react';
import { BiHomeAlt } from 'react-icons/bi';
import { PiPaperPlaneTiltLight } from 'react-icons/pi';
import { MdOutlineWatchLater } from 'react-icons/md';
import { AiFillCheckCircle } from 'react-icons/ai';
import { HiShieldCheck } from 'react-icons/hi2';
import { LiaComment } from 'react-icons/lia';

// Assets
import noProfilePic from '@/assets/images/noProfile.png';

// Components
import PhoneConsultation from '@/components/pages/doctor-medical-advice/phone-consultation/phone-consultation';
import TextConsultation from '@/components/pages/doctor-medical-advice/text-consultation/text-consultation';
import ConsultationMobileButtons from '@/components/pages/doctor-medical-advice/consultation-mobile-buttons/consultation-mobile-buttons';
import DoctorComments from '@/components/template/doctor-comments/doctor-comments';

async function DoctorMedicalAdvice({ params }) {
   const doctorDetailRequest = await fetch(
      `${process?.env?.NEXT_PUBLIC_API_BASE_URL}doctor/doctorDetail?dr_id=${params?.doctorId}`,
      { cache: 'no-store' }
   );
   const doctorDetailData = await doctorDetailRequest?.json();
   const consultationArray = Object.entries(doctorDetailData?.data?.counselation_hours);

   const pricesArray = [];
   Object.keys(doctorDetailData?.data?.counseling_prices)?.forEach((key, index) =>
      pricesArray?.push({
         id: index + 1,
         time: Number(key),
         price: Number(doctorDetailData?.data?.counseling_prices?.[key]),
      })
   );

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
                  {doctorDetailData?.data?.full_name} / {doctorDetailData?.data?.specialty} / شماره نظام پزشکی{' '}
                  <span className="font-DanaFaNum font-bold tracking-[1px]">
                     {doctorDetailData?.data?.medical_number}
                  </span>
               </p>
               <p className="mt-15 text-15 leading-7 text-textColor2 max-customMd:hidden">
                  با هلث پلاس می‌توانید ۲۴ ساعته و از همه جای دنیا مشاوره پزشکی و مشاوره روانشناسی بگیرید. هلث پلاس به
                  صورت تخصصی و با حفظ حریم خصوصی، اقدام به ارایه مشاوره آنلاین و مشاوره تلفنی و مشاوره ویدئویی در
                  زمینه‌ی بهترین متخصص کودک و نوزاد کرده است.
               </p>
            </div>

            <div className="mt-5 flex gap-[30px] customMd:mt-[120px]">
               <aside className="h-fit w-[277px] shrink-0 space-y-[-30px] rounded-10 border border-solid border-borderColor max-customLg:hidden">
                  {doctorDetailData?.data?.services_type?.['مشاوره تلفنی'] && (
                     <PhoneConsultation prices={pricesArray} />
                  )}

                  {doctorDetailData?.data?.services_type?.['مشاوره متنی'] && (
                     <TextConsultation price={doctorDetailData?.data?.text_counseling_price} />
                  )}

                  {!doctorDetailData?.data?.services_type?.['مشاوره تلفنی'] &&
                     !doctorDetailData?.data?.services_type?.['مشاوره متنی'] && (
                        <p className="py-10 text-center">مشاوره آنلاین ارائه نمیشود</p>
                     )}
               </aside>
               <div className="grow">
                  <p className="rounded-10 border border-solid border-borderColor p-4 text-center text-15 leading-3 text-textColor2 customMd:hidden">
                     شماره نظام پزشکی{' '}
                     <span className="font-DanaFaNum font-bold tracking-[1px]">
                        {doctorDetailData?.data?.medical_number}
                     </span>
                  </p>

                  <div className="mt-15 flex items-center gap-5 customLg:hidden">
                     <ConsultationMobileButtons
                        prices={pricesArray}
                        price={doctorDetailData?.data?.text_counseling_price}
                        showPhoneCounseling={doctorDetailData?.data?.services_type?.['مشاوره تلفنی']}
                        showTextCounseling={doctorDetailData?.data?.services_type?.['مشاوره متنی']}
                     />
                  </div>

                  <div className="rounded-10 border border-solid border-secondaryBlue p-15 max-customMd:mt-15 customMd:p-5">
                     <div className="flex flex-col customMd:flex-row customMd:items-center customMd:justify-between">
                        <div className="flex flex-col items-center gap-[10px] customMd:flex-row customMd:gap-5">
                           <div className="relative size-[60px]">
                              <Image
                                 src={doctorDetailData?.data?.profile || noProfilePic}
                                 alt="user profile"
                                 fill
                                 className="rounded-full object-cover"
                              />
                              <div className="absolute right-[4px] top-[3px] size-3 rounded-full border-2 border-solid border-white bg-[#63FEAA]" />
                           </div>
                           <div className="text-15 leading-[22px] customMd:text-xl customMd:leading-[30px]">
                              <p className="text-textColor1 max-customMd:text-center">
                                 {doctorDetailData?.data?.full_name}
                              </p>
                              <p className="text-textColor2 max-customMd:text-center">
                                 {doctorDetailData?.data?.specialty}
                              </p>
                           </div>
                        </div>
                        <div className="flex items-center gap-[13px] max-customMd:mt-15 customMd:gap-5">
                           <div
                              className="space-y-[7px] rounded-[3px] bg-[#2ED7FE0D] py-[7px] font-kalamehSemiBold600 max-customMd:flex-1
               customMd:space-y-4 customMd:rounded-[5px] customMd:px-eighteen customMd:py-[10px]"
                           >
                              <p className="text-center font-DanaFaNum text-10 font-bold leading-[8px] text-[#4EE292] customMd:text-15 customMd:leading-[10px]">
                                 {doctorDetailData?.data?.visit_count}+ نوبت
                              </p>
                              <p className="text-center text-10 leading-[8px] text-primaryBlue customMd:text-15 customMd:leading-[10px]">
                                 در هلث پلاس
                              </p>
                           </div>
                           <div
                              className="space-y-[7px] rounded-[3px] bg-[#2ED7FE0D] py-[7px] font-kalamehSemiBold600 max-customMd:flex-1
               customMd:space-y-4 customMd:rounded-[5px] customMd:px-eighteen customMd:py-[10px]"
                           >
                              <p className="text-center font-DanaFaNum text-10 font-bold leading-[8px] text-[#4EE292] customMd:text-15 customMd:leading-[10px]">
                                 {doctorDetailData?.data?.counseling_count}+
                              </p>
                              <p className="text-center text-10 leading-[8px] text-primaryBlue customMd:text-15 customMd:leading-[10px]">
                                 مشاوره موفق
                              </p>
                           </div>
                           <div
                              className="space-y-[7px] rounded-[3px] bg-[#2ED7FE0D] py-[7px] font-kalamehSemiBold600 max-customMd:flex-1
               customMd:space-y-4 customMd:rounded-[5px] customMd:px-eighteen customMd:py-[10px]"
                           >
                              <p className="text-center font-DanaFaNum text-10 font-bold leading-[8px] text-[#FFAF03] customMd:text-15 customMd:leading-[10px]">
                                 امتیاز {doctorDetailData?.data?.score}
                              </p>
                              <p className="text-center font-DanaFaNum text-10 font-bold leading-[8px] text-primaryBlue customMd:text-15 customMd:leading-[10px]">
                                 از {doctorDetailData?.data?.score_count} نظر
                              </p>
                           </div>
                        </div>
                     </div>

                     <div
                        className="mt-15 flex flex-col border-t-2 border-solid border-[#4040401A]
          pt-15 customMd:mt-[25px] customMd:flex-row customMd:items-end customMd:justify-between customMd:pt-5"
                     >
                        <div>
                           <div className="flex gap-2 customMd:items-center">
                              <IoLocation color="#2ED7FE" size="22px" />
                              <p className="text-15 leading-[22px] text-textColor3 customMd:text-xl">
                                 {doctorDetailData?.data?.address}
                              </p>
                           </div>

                           <div className="mt-5 flex items-center gap-4 text-10 text-textColor2 customMd:mt-6 customMd:gap-[30px] customMd:text-15">
                              {doctorDetailData?.data?.services_type?.['مشاوره تلفنی'] && (
                                 <div className="flex items-center gap-[5px] customMd:gap-[10px]">
                                    <FiPhoneCall className="customMd:text-xl" />
                                    <p>مشاوره تلفنی</p>
                                 </div>
                              )}
                              {doctorDetailData?.data?.services_type?.['مشاوره متنی'] && (
                                 <div className="flex items-center gap-[5px] customMd:gap-[10px]">
                                    <Edit className="w-[10px] customMd:w-5" />
                                    <p>مشاوره متنی</p>
                                 </div>
                              )}
                              {doctorDetailData?.data?.services_type?.['نوبت دهی مطب'] && (
                                 <div className="flex items-center gap-[5px] customMd:gap-[10px]">
                                    <BiHomeAlt className="customMd:text-xl" />
                                    <p>نوبت دهی مطب</p>
                                 </div>
                              )}
                           </div>

                           <div className="mt-5 customMd:mt-[30px]">
                              <div className="flex gap-2 customMd:items-center">
                                 <FaUserDoctor color="#2ED7FE" size="22px" />
                                 <p className="text-15 leading-[22px] text-textColor3 customMd:text-xl">درباره پزشک</p>
                              </div>

                              <div className="mt-[10px] flex items-center gap-1 text-10 leading-[15px] text-textColor2 customMd:mt-15 customMd:text-15 customMd:leading-[22px]">
                                 <p>شماره نظام پزشکی : </p>
                                 <p className="font-DanaFaNum font-bold">{doctorDetailData?.data?.medical_number}</p>
                              </div>
                              <p className="max-w-[450px] text-10 leading-[15px] text-textColor2 customMd:text-15 customMd:leading-[22px]">
                                 {doctorDetailData?.data?.about}
                              </p>
                           </div>
                        </div>

                        {doctorDetailData?.data?.services_type?.['نوبت دهی مطب'] && (
                           <Link href={`/doctor-appointment/${params?.doctorId}`} className="max-customMd:mt-[30px]">
                              <Button
                                 variant="contained"
                                 className="max-customMd:w-full customMd:w-[135px]"
                                 sx={{
                                    height: '40px',
                                    borderRadius: '5px',
                                    fontFamily: 'kalamehSemiBold600',
                                    fontSize: '15px',
                                    color: '#fff',
                                 }}
                              >
                                 نوبت دهی
                              </Button>
                           </Link>
                        )}
                     </div>
                  </div>

                  <div
                     className="mt-15 flex items-center justify-between rounded-10 border border-solid border-secondaryBlue
                  px-15 py-[10px] customMd:mt-5 customMd:p-5"
                  >
                     <p className="text-10 leading-[15px] text-borderColor customMd:text-xl">
                        ارسال پیام و مدارک پزشکی برای پزشک
                     </p>
                     <Button
                        variant="contained"
                        className="max-customMd:!hidden"
                        sx={{ color: 'white', paddingX: '22px', height: '40px', borderRadius: '5px' }}
                        startIcon={<PiPaperPlaneTiltLight />}
                     >
                        ارسال پیام
                     </Button>
                     <IconButton className="customMd:!hidden">
                        <PiPaperPlaneTiltLight color="#2ED7FE" size="15px" />
                     </IconButton>
                  </div>

                  {doctorDetailData?.data?.services_type?.['مشاوره تلفنی'] && (
                     <div className="mt-[30px]">
                        <div className="mb-[17px] flex items-center gap-[10px] customMd:mb-5">
                           <MdOutlineWatchLater color="#2ED7FE" size="22px" />
                           <p className="font-kalamehSemiBold600 text-15 leading-4 text-textColor1 customMd:text-xl">
                              ساعات پاسخگویی به مشاوره تلفنی
                           </p>
                        </div>

                        <Grid
                           container
                           columnSpacing={{ xs: '5px', md: '73px' }}
                           rowSpacing={{ xs: '10px', md: '20px' }}
                        >
                           {consultationArray?.map(item => (
                              <Grid item xs={6} key={item}>
                                 <div
                                    className="flex items-center justify-between rounded bg-[#2ED7FE0D] p-[10px] font-DanaFaNum
                                 text-10 font-bold leading-[6px] text-textColor3 customMd:rounded-10 customMd:p-[30px] customMd:text-xl customMd:leading-3"
                                 >
                                    <p>{item?.[0]}</p>
                                    <p>{item?.[1]}</p>
                                 </div>
                              </Grid>
                           ))}
                        </Grid>
                     </div>
                  )}

                  <div className="mt-[30px] flex items-center gap-[6px] customMd:mt-[60px] customMd:gap-[30px]">
                     <div
                        className="flex flex-1 flex-col items-center gap-[10px] rounded-10 border border-solid
                      border-secondaryBlue py-[10px] customMd:flex-row customMd:justify-center customMd:py-[30px]"
                     >
                        <AiFillCheckCircle color="#2ED7FE" className="text-sm customMd:text-2xl" />
                        <p className="text-center text-10 leading-3 text-textColor3 max-customMd:px-5 customMd:text-xl">
                           تضمین هلث پلاس
                        </p>
                     </div>
                     <div
                        className="flex flex-1 flex-col items-center gap-[10px] rounded-10 border border-solid
                      border-secondaryBlue py-[10px] customMd:flex-row customMd:justify-center customMd:py-[30px]"
                     >
                        <HiShieldCheck color="#2ED7FE" className="text-sm customMd:text-2xl" />
                        <p className="text-center text-10 leading-3 text-textColor3 max-customMd:px-5 customMd:text-xl">
                           ۱۰۰٪ حفظ حریم شخصی
                        </p>
                     </div>
                     <div
                        className="flex flex-1 flex-col items-center gap-[10px] rounded-10 border border-solid
                      border-secondaryBlue py-[10px] customMd:flex-row customMd:justify-center customMd:py-[30px]"
                     >
                        <AiFillCheckCircle color="#2ED7FE" className="text-sm customMd:text-2xl" />
                        <p className="text-center text-10 leading-3 text-textColor3 max-customMd:px-5 customMd:text-xl">
                           مشاوران تایید شده
                        </p>
                     </div>
                  </div>

                  <div className="mt-[30px] customMd:mt-[60px]">
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

export default DoctorMedicalAdvice;
