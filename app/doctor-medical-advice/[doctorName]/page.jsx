'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
// import { useRouter } from 'next/router';

// MUI
import { Breadcrumbs, Button, Dialog, Grid, IconButton } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Icons
import { IoLocation } from 'react-icons/io5';
import { FaUserDoctor } from 'react-icons/fa6';
import { FiPhoneCall } from 'react-icons/fi';
import { Edit } from 'iconsax-react';
import { BiHomeAlt } from 'react-icons/bi';
import { PiPaperPlaneTiltLight } from 'react-icons/pi';
import { MdOutlineWatchLater, MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { AiFillCheckCircle } from 'react-icons/ai';
import { HiShieldCheck } from 'react-icons/hi2';
import { LiaComment } from 'react-icons/lia';

// Assets
import doctorProfileSample from '@/assets/images/doctorProfileSample.png';

// Components
import PhoneConsultation from '@/components/pages/doctor-medical-advice/phone-consultation/phone-consultation';
import TextConsultation from '@/components/pages/doctor-medical-advice/text-consultation/text-consultation';
import CommentItem from '@/components/template/comment-item/comment-item';

const filterBtnStyle = {
   backgroundColor: '#2ED7FE0D',
   height: '45px',
   border: 'solid 1px #2ED7FE',
   borderRadius: '10px',
   color: '#404040',
   fontSize: '15px',
   lineHeight: '12px',
};

function DoctorMedicalAdvice() {
   const [showPhoneConsultationModal, setShowPhoneConsultationModal] = useState(false);
   const [showTextConsultationModal, setShowTextConsultationModal] = useState(false);

   // const { query } = useRouter();

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
                     href="/online-medical-advice"
                     key={2}
                     className="text-15 text-textColor2 transition-all duration-200 hover:text-black hover:underline"
                  >
                     مشاوره آنلاین
                  </Link>,
                  <Link
                     href="/filter-medical-advice"
                     key={2}
                     className="text-15 text-textColor2 transition-all duration-200 hover:text-black hover:underline"
                  >
                     متخصص کودکان
                  </Link>,
                  <p key={2} className="text-15 text-textColor2">
                     دکتر الهام ماهودی
                  </p>,
               ]}
            </Breadcrumbs>

            <div
               className="max-customMd:rounded-lg max-customMd:py-[10px] customMd:mt-15 customMd:!shadow-none"
               style={{
                  boxShadow: '0px 0px 15px 0px #0000000D',
               }}
            >
               <p className="text-[20px] leading-8 text-primaryBlue max-customMd:text-center">
                  دکتر الهام ماهودی / متخصص کودکان / شماره نظام پزشکی ۱۲۳۴۵۶
               </p>
               <p className="mt-15 text-15 leading-7 text-textColor2 max-customMd:hidden">
                  با هلث پلاس می‌توانید ۲۴ ساعته و از همه جای دنیا مشاوره پزشکی و مشاوره روانشناسی بگیرید. هلث پلاس به
                  صورت تخصصی و با حفظ حریم خصوصی، اقدام به ارایه مشاوره آنلاین و مشاوره تلفنی و مشاوره ویدئویی در
                  زمینه‌ی بهترین متخصص کودک و نوزاد کرده است.
               </p>
            </div>

            <div className="mt-5 flex gap-[30px] customMd:mt-[120px]">
               <aside className="h-fit w-[277px] shrink-0 space-y-[-30px] rounded-10 border border-solid border-borderColor max-customLg:hidden">
                  <PhoneConsultation />
                  <TextConsultation />
               </aside>
               <div className="grow">
                  <p className="rounded-10 border border-solid border-borderColor p-4 text-center text-15 leading-3 text-textColor2 customMd:hidden">
                     شماره نظام پزشکی ۱۲۳۴۵۶
                  </p>

                  <div className="mt-15 flex items-center gap-5 customLg:hidden">
                     <Button className="flex-1" sx={filterBtnStyle} onClick={() => setShowTextConsultationModal(true)}>
                        مشاوره متنی
                     </Button>
                     <Button className="flex-1" sx={filterBtnStyle} onClick={() => setShowPhoneConsultationModal(true)}>
                        مشاوره تلفنی
                     </Button>
                  </div>

                  <div className="rounded-10 border border-solid border-secondaryBlue p-15 max-customMd:mt-15 customMd:p-5">
                     <div className="flex flex-col customMd:flex-row customMd:items-center customMd:justify-between">
                        <div className="flex flex-col items-center gap-[10px] customMd:flex-row customMd:gap-5">
                           <div className="relative size-[60px]">
                              <Image
                                 src={doctorProfileSample}
                                 alt="user profile"
                                 fill
                                 className="rounded-full object-cover"
                              />
                              <div className="absolute right-[4px] top-[3px] size-3 rounded-full border-2 border-solid border-white bg-[#63FEAA]" />
                           </div>
                           <div className="text-15 leading-[22px] customMd:text-xl customMd:leading-[30px]">
                              <p className="text-textColor1 max-customMd:text-center">دکتر الهام ماهودی</p>
                              <p className="text-textColor2 max-customMd:text-center">متخصص کودکان</p>
                           </div>
                        </div>
                        <div className="flex items-center gap-[13px] max-customMd:mt-15 customMd:gap-5">
                           <div
                              className="space-y-[7px] rounded-[3px] bg-[#2ED7FE0D] py-[7px] font-kalamehSemiBold600 max-customMd:flex-1
               customMd:space-y-4 customMd:rounded-[5px] customMd:px-eighteen customMd:py-[10px]"
                           >
                              <p className="text-center text-10 leading-[8px] text-[#4EE292] customMd:text-15 customMd:leading-[10px]">
                                 ۵۰۰۰+ نوبت
                              </p>
                              <p className="text-center text-10 leading-[8px] text-primaryBlue customMd:text-15 customMd:leading-[10px]">
                                 در هلث پلاس
                              </p>
                           </div>
                           <div
                              className="space-y-[7px] rounded-[3px] bg-[#2ED7FE0D] py-[7px] font-kalamehSemiBold600 max-customMd:flex-1
               customMd:space-y-4 customMd:rounded-[5px] customMd:px-eighteen customMd:py-[10px]"
                           >
                              <p className="text-center text-10 leading-[8px] text-[#4EE292] customMd:text-15 customMd:leading-[10px]">
                                 ۵۰۰۰+
                              </p>
                              <p className="text-center text-10 leading-[8px] text-primaryBlue customMd:text-15 customMd:leading-[10px]">
                                 مشاوره موفق
                              </p>
                           </div>
                           <div
                              className="space-y-[7px] rounded-[3px] bg-[#2ED7FE0D] py-[7px] font-kalamehSemiBold600 max-customMd:flex-1
               customMd:space-y-4 customMd:rounded-[5px] customMd:px-eighteen customMd:py-[10px]"
                           >
                              <p className="text-center text-10 leading-[8px] text-[#FFAF03] customMd:text-15 customMd:leading-[10px]">
                                 امتیاز ۴.۴
                              </p>
                              <p className="text-center text-10 leading-[8px] text-primaryBlue customMd:text-15 customMd:leading-[10px]">
                                 از ۲۰۷ نظر
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
                                 تهران . نیاوران . بیمارستان مسیح دانشوری
                              </p>
                           </div>

                           <div className="mt-5 flex items-center gap-4 text-10 text-textColor2 customMd:mt-6 customMd:gap-[30px] customMd:text-15">
                              <div className="flex items-center gap-[5px] customMd:gap-[10px]">
                                 <FiPhoneCall className="customMd:text-xl" />
                                 <p>مشاوره تلفنی</p>
                              </div>
                              <div className="flex items-center gap-[5px] customMd:gap-[10px]">
                                 <Edit className="w-[10px] customMd:w-5" />
                                 <p>مشاوره متنی</p>
                              </div>
                              <div className="flex items-center gap-[5px] customMd:gap-[10px]">
                                 <BiHomeAlt className="customMd:text-xl" />
                                 <p>نوبت دهی مطب</p>
                              </div>
                           </div>

                           <div className="mt-5 customMd:mt-[30px]">
                              <div className="flex gap-2 customMd:items-center">
                                 <FaUserDoctor color="#2ED7FE" size="22px" />
                                 <p className="text-15 leading-[22px] text-textColor3 customMd:text-xl">درباره پزشک</p>
                              </div>

                              <div className="mt-[10px] flex items-center gap-1 text-10 leading-[15px] text-textColor2 customMd:mt-15 customMd:text-15 customMd:leading-[22px]">
                                 <p>شماره نظام پزشکی : </p>
                                 <p className="font-DanaFaNum font-bold">123456</p>
                              </div>
                              <p className="max-w-[450px] text-10 leading-[15px] text-textColor2 customMd:text-15 customMd:leading-[22px]">
                                 متخصص کودکان و نوزادان دارای بورد تخصصی از دانشگاه شهید بهشتی و ... مشاوره در زمینه های
                                 زردی نوزادان ،تغذیه،ریفلاکس و کولیک وآلرژی... درمان بیماری‌های تنفسی ،گوارشی ،عفونی ...
                              </p>
                           </div>
                        </div>

                        <Link href="/doctor-appointment/mansoori" className="max-customMd:mt-[30px]">
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

                  <div className="mt-[30px]">
                     <div className="mb-[17px] flex items-center gap-[10px] customMd:mb-5">
                        <MdOutlineWatchLater color="#2ED7FE" size="22px" />
                        <p className="font-kalamehSemiBold600 text-15 leading-4 text-textColor1 customMd:text-xl">
                           ساعات پاسخگویی به مشاوره تلفنی
                        </p>
                     </div>

                     <Grid container columnSpacing={{ xs: '5px', md: '73px' }} rowSpacing={{ xs: '10px', md: '20px' }}>
                        <Grid item xs={6}>
                           <div
                              className="flex items-center justify-between rounded bg-[#2ED7FE0D] p-[10px] font-DanaFaNum
                            text-10 font-bold leading-[6px] text-textColor3 customMd:rounded-10 customMd:p-[30px] customMd:text-xl customMd:leading-3"
                           >
                              <p>شنبه</p>
                              <p>8:30 الی 23:30</p>
                           </div>
                        </Grid>
                        <Grid item xs={6}>
                           <div
                              className="flex items-center justify-between rounded bg-[#2ED7FE0D] p-[10px] font-DanaFaNum
                            text-10 font-bold leading-[6px] text-textColor3 customMd:rounded-10 customMd:p-[30px] customMd:text-xl customMd:leading-3"
                           >
                              <p>یکشنبه</p>
                              <p>8:30 الی 23:30</p>
                           </div>
                        </Grid>
                        <Grid item xs={6}>
                           <div
                              className="flex items-center justify-between rounded bg-[#2ED7FE0D] p-[10px] font-DanaFaNum
                            text-10 font-bold leading-[6px] text-textColor3 customMd:rounded-10 customMd:p-[30px] customMd:text-xl customMd:leading-3"
                           >
                              <p>دوشنبه</p>
                              <p>8:30 الی 23:30</p>
                           </div>
                        </Grid>
                        <Grid item xs={6}>
                           <div
                              className="flex items-center justify-between rounded bg-[#2ED7FE0D] p-[10px] font-DanaFaNum
                            text-10 font-bold leading-[6px] text-textColor3 customMd:rounded-10 customMd:p-[30px] customMd:text-xl customMd:leading-3"
                           >
                              <p>سه شنبه</p>
                              <p>8:30 الی 23:30</p>
                           </div>
                        </Grid>
                        <Grid item xs={6}>
                           <div
                              className="flex items-center justify-between rounded bg-[#2ED7FE0D] p-[10px] font-DanaFaNum
                            text-10 font-bold leading-[6px] text-textColor3 customMd:rounded-10 customMd:p-[30px] customMd:text-xl customMd:leading-3"
                           >
                              <p>چهارشنبه</p>
                              <p>8:30 الی 23:30</p>
                           </div>
                        </Grid>
                        <Grid item xs={6}>
                           <div
                              className="flex items-center justify-between rounded bg-[#2ED7FE0D] p-[10px] font-DanaFaNum
                            text-10 font-bold leading-[6px] text-textColor3 customMd:rounded-10 customMd:p-[30px] customMd:text-xl customMd:leading-3"
                           >
                              <p>پنجشنبه</p>
                              <p>8:30 الی 23:30</p>
                           </div>
                        </Grid>
                     </Grid>
                  </div>

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

         <Dialog open={showPhoneConsultationModal} onClose={() => setShowPhoneConsultationModal(false)} top>
            <PhoneConsultation onClose={() => setShowPhoneConsultationModal(false)} />
         </Dialog>

         <Dialog open={showTextConsultationModal} onClose={() => setShowTextConsultationModal(false)} top>
            <TextConsultation onClose={() => setShowTextConsultationModal(false)} />
         </Dialog>
      </div>
   );
}

export default DoctorMedicalAdvice;
