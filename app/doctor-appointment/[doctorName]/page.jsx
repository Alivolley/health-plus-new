'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// MUI
import { Breadcrumbs, Button, Dialog, IconButton } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Icons
import { IoLocation } from 'react-icons/io5';
import { BsFillCalendarWeekFill } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import { Edit } from 'iconsax-react';
import { BiHomeAlt } from 'react-icons/bi';
import { FaUserDoctor } from 'react-icons/fa6';
import { PiHandHeartBold } from 'react-icons/pi';
import { IoMdArrowForward, IoMdArrowBack } from 'react-icons/io';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { LiaComment } from 'react-icons/lia';
import { GrFormClose } from 'react-icons/gr';

// Assets
import doctorProfileSample from '@/assets/images/doctorProfileSample.png';

// Components
import MedicalAdviceAside from '@/components/pages/filter-medical-advice/medical-advice-aside/medical-advice-aside';
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

function DoctorAppointment() {
   const [boxSize, setBoxSize] = useState('150');
   const [showFilterMobile, setShowFilterMobile] = useState(false);
   const [selectedDate, setSelectedDate] = useState(1);
   const [showAboutDoctorModal, setShowAboutDoctorModal] = useState(false);
   const [showOfficeStuffModal, setShowOfficeStuffModal] = useState(false);
   const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

   const boxRef = useRef(null);
   const dateWrapperRef = useRef();

   const scrollLeftHandler = () => {
      if (dateWrapperRef.current) {
         const newScrollLeft = dateWrapperRef.current.scrollLeft - 250;
         dateWrapperRef.current.scrollTo({
            left: newScrollLeft,
         });
      }
   };

   const scrollRightHandler = () => {
      if (dateWrapperRef.current) {
         const newScrollLeft = dateWrapperRef.current.scrollLeft + 250;
         dateWrapperRef.current.scrollTo({
            left: newScrollLeft,
         });
      }
   };

   useEffect(() => {
      const resizeObserver = new ResizeObserver(entries => {
         if (!Array.isArray(entries)) return;
         if (!entries.length) return;

         const { width } = entries[0].contentRect;

         if (boxRef?.current) {
            setBoxSize(width - 10);
         }
      });

      if (boxRef.current) {
         resizeObserver.observe(boxRef.current);
      }

      return () => {
         if (boxRef.current) {
            resizeObserver.unobserve(boxRef.current);
         }
      };
   }, []);

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
                     href="/online-medical-advice"
                     key={2}
                     className="text-15 text-textColor2 transition-all duration-200 hover:text-black hover:underline"
                  >
                     نوبت دهی
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
                  نوبت دهی آنلاین در هلث پلاس
               </p>
               <p className="mt-15 text-15 leading-7 text-textColor2 max-customMd:hidden">
                  درخواست نوبت آنلاین از بهترین متخصصین در وبسایت هلث پلاس
               </p>
            </div>

            <div className="mt-5 gap-[30px] customMd:mt-[120px] customMd:flex">
               <aside className="h-fit w-[277px] shrink-0 rounded-10 border border-solid border-borderColor max-customLg:hidden">
                  <MedicalAdviceAside />
               </aside>
               <div className="customMd:grow">
                  <p className="rounded-10 border border-solid border-borderColor p-4 text-center text-15 leading-3 text-textColor2 customMd:hidden">
                     شماره نظام پزشکی ۱۲۳۴۵۶
                  </p>

                  <Button
                     className="!mt-15 customLg:!hidden"
                     fullWidth
                     sx={filterBtnStyle}
                     onClick={() => setShowFilterMobile(true)}
                  >
                     فیلتر ها
                  </Button>

                  <div
                     className="rounded-10 border border-solid border-secondaryBlue p-15 max-customMd:mt-15 customMd:p-5"
                     ref={boxRef}
                  >
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
                           <div className="mt-5 flex gap-2 customMd:items-center">
                              <BsFillCalendarWeekFill color="#2ED7FE" size="20px" />
                              <p className="text-15 leading-[22px] text-textColor3 customMd:text-xl">
                                 اولین نوبت خالی : ۱۵ اردیبهشت / ساعت ۱۷:۰۰
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
                        </div>

                        <div className="max-customMd:mt-[30px]">
                           <Button
                              variant="contained"
                              className="max-customMd:w-full customMd:w-[190px]"
                              sx={{
                                 height: '40px',
                                 borderRadius: '5px',
                                 fontFamily: 'kalamehSemiBold600',
                                 fontSize: '15px',
                                 color: '#fff',
                              }}
                           >
                              نمایش مطب روی نقشه
                           </Button>
                        </div>
                     </div>
                  </div>

                  <div className="mt-5 hidden gap-8 customMd:flex">
                     <div className="flex-1">
                        <div className="flex gap-2 customMd:items-center">
                           <FaUserDoctor color="#2ED7FE" size="20px" />
                           <p className="text-15 leading-[22px] text-textColor3 customMd:text-xl">درباره پزشک</p>
                        </div>
                        <div className="mt-[10px] flex items-center gap-1 text-10 leading-[15px] text-textColor2 customMd:mt-15 customMd:text-15 customMd:leading-[22px]">
                           <p>شماره نظام پزشکی : </p>
                           <p className="font-DanaFaNum font-bold">123456</p>
                        </div>
                        <p className="max-w-[450px] text-10 leading-[15px] text-textColor2 customMd:text-15 customMd:leading-[22px]">
                           متخصص کودکان و نوزادان دارای بورد تخصصی از دانشگاه شهید بهشتی و ... مشاوره در زمینه های زردی
                           نوزادان ،تغذیه،ریفلاکس و کولیک وآلرژی... درمان بیماری‌های تنفسی ،گوارشی ،عفونی ...
                        </p>
                     </div>

                     <div className="flex-1">
                        <div className="flex gap-2 customMd:items-center">
                           <PiHandHeartBold color="#2ED7FE" size="20px" />
                           <p className="text-15 leading-[22px] text-textColor3 customMd:text-xl">ملاحضات مطب</p>
                        </div>
                        <p className="mt-[10px] max-w-[450px] text-10 leading-[15px] text-textColor2 customMd:mt-15 customMd:text-15 customMd:leading-[22px]">
                           متخصص کودکان و نوزادان دارای بورد تخصصی از دانشگاه شهید بهشتی و ... مشاوره در زمینه های زردی
                           نوزادان ،تغذیه،ریفلاکس و کولیک وآلرژی... درمان بیماری‌های تنفسی ،گوارشی ،عفونی ... نوزادان
                           ،تغذیه،ریفلاکس و کولیک وآلرژی... درمان بیماری‌های تنفسی ،گوارشی ،عفونی ...
                        </p>
                     </div>
                  </div>

                  <div className="mt-15 flex items-center gap-[5px] customLg:hidden">
                     <Button
                        className="flex-1"
                        sx={filterBtnStyle}
                        startIcon={<FaUserDoctor color="#2ED7FE" size="15px" />}
                        onClick={() => setShowAboutDoctorModal(true)}
                     >
                        درباره پزشک
                     </Button>
                     <Button
                        className="flex-1"
                        sx={filterBtnStyle}
                        startIcon={<PiHandHeartBold color="#2ED7FE" size="15px" />}
                        onClick={() => setShowOfficeStuffModal(true)}
                     >
                        ملاحضات مطب
                     </Button>
                  </div>

                  <div className="relative flex justify-center">
                     <Button
                        sx={{ borderRadius: '100%' }}
                        className="!absolute left-0 top-1/2 max-customMd:!hidden"
                        onClick={scrollLeftHandler}
                     >
                        <IoMdArrowBack color="#2ED7FE" size="24px" />
                     </Button>
                     <Button
                        sx={{ borderRadius: '100%' }}
                        className="!absolute right-0 top-1/2 max-customMd:!hidden"
                        onClick={scrollRightHandler}
                     >
                        <IoMdArrowForward color="#2ED7FE" size="24px" />
                     </Button>

                     <div
                        className="mt-15 flex items-center gap-[5px] overflow-auto scroll-smooth max-customMd:!w-full customMd:mt-[30px] customMd:gap-5 customMd:overflow-hidden"
                        style={{ width: `${boxSize}px` }}
                        ref={dateWrapperRef}
                     >
                        <Button
                           sx={{
                              flexDirection: 'column',
                              gap: '15px',
                              fontSize: '10px',
                              lineHeight: '8px',
                              backgroundColor: '#2ED7FE0D',
                              borderRadius: '10px',
                              border: selectedDate === 1 && '1px solid #2ED7FE',
                           }}
                           className="shrink-0 max-customMd:size-[67px] customMd:size-[103px] customMd:!text-15 customMd:!leading-3"
                           onClick={() => setSelectedDate(1)}
                        >
                           <p>شنبه</p>
                           <p>1 اردیبهشت</p>
                        </Button>
                        <Button
                           sx={{
                              flexDirection: 'column',
                              gap: '15px',
                              fontSize: '10px',
                              lineHeight: '8px',
                              backgroundColor: '#2ED7FE0D',
                              borderRadius: '10px',
                              border: selectedDate === 2 && '1px solid #2ED7FE',
                           }}
                           className="shrink-0 max-customMd:size-[67px] customMd:size-[103px] customMd:!text-15 customMd:!leading-3"
                           onClick={() => setSelectedDate(2)}
                        >
                           <p>یکشنبه</p>
                           <p>2 اردیبهشت</p>
                        </Button>
                        <Button
                           sx={{
                              flexDirection: 'column',
                              gap: '15px',
                              fontSize: '10px',
                              lineHeight: '8px',
                              backgroundColor: '#2ED7FE0D',
                              borderRadius: '10px',
                              border: selectedDate === 3 && '1px solid #2ED7FE',
                           }}
                           className="shrink-0 max-customMd:size-[67px] customMd:size-[103px] customMd:!text-15 customMd:!leading-3"
                           onClick={() => setSelectedDate(3)}
                        >
                           <p>دوشنبه</p>
                           <p>3 اردیبهشت</p>
                           <p>-</p>
                        </Button>
                        <Button
                           sx={{
                              flexDirection: 'column',
                              gap: '15px',
                              fontSize: '10px',
                              lineHeight: '8px',
                              backgroundColor: '#2ED7FE0D',
                              borderRadius: '10px',
                              border: selectedDate === 4 && '1px solid #2ED7FE',
                           }}
                           className="shrink-0 max-customMd:size-[67px] customMd:size-[103px] customMd:!text-15 customMd:!leading-3"
                           onClick={() => setSelectedDate(4)}
                        >
                           <p>سه شنبه</p>
                           <p>4 اردیبهشت</p>
                        </Button>
                        <Button
                           sx={{
                              flexDirection: 'column',
                              gap: '15px',
                              fontSize: '10px',
                              lineHeight: '8px',
                              backgroundColor: '#2ED7FE0D',
                              borderRadius: '10px',
                              border: selectedDate === 5 && '1px solid #2ED7FE',
                           }}
                           className="shrink-0 max-customMd:size-[67px] customMd:size-[103px] customMd:!text-15 customMd:!leading-3"
                           onClick={() => setSelectedDate(5)}
                        >
                           <p>چهارشنبه</p>
                           <p>5 اردیبهشت</p>
                        </Button>
                        <Button
                           sx={{
                              flexDirection: 'column',
                              gap: '15px',
                              fontSize: '10px',
                              lineHeight: '8px',
                              backgroundColor: '#2ED7FE0D',
                              borderRadius: '10px',
                              border: selectedDate === 6 && '1px solid #2ED7FE',
                           }}
                           className="shrink-0 max-customMd:size-[67px] customMd:size-[103px] customMd:!text-15 customMd:!leading-3"
                           onClick={() => setSelectedDate(6)}
                        >
                           <p>پنجشنبه</p>
                           <p>6 اردیبهشت</p>
                           <p>-</p>
                        </Button>
                        <Button
                           sx={{
                              flexDirection: 'column',
                              gap: '15px',
                              fontSize: '10px',
                              lineHeight: '8px',
                              backgroundColor: '#2ED7FE0D',
                              borderRadius: '10px',
                              border: selectedDate === 7 && '1px solid #2ED7FE',
                           }}
                           className="shrink-0 max-customMd:size-[67px] customMd:size-[103px] customMd:!text-15 customMd:!leading-3"
                           onClick={() => setSelectedDate(7)}
                        >
                           <p>جمعه</p>
                           <p>7 اردیبهشت</p>
                        </Button>

                        <Button
                           sx={{
                              flexDirection: 'column',
                              gap: '15px',
                              fontSize: '10px',
                              lineHeight: '8px',
                              backgroundColor: '#2ED7FE0D',
                              borderRadius: '10px',
                              border: selectedDate === 8 && '1px solid #2ED7FE',
                           }}
                           className="shrink-0 max-customMd:size-[67px] customMd:size-[103px] customMd:!text-15 customMd:!leading-3"
                           onClick={() => setSelectedDate(8)}
                        >
                           <p>چهارشنبه</p>
                           <p>12 اردیبهشت</p>
                        </Button>
                        <Button
                           sx={{
                              flexDirection: 'column',
                              gap: '15px',
                              fontSize: '10px',
                              lineHeight: '8px',
                              backgroundColor: '#2ED7FE0D',
                              borderRadius: '10px',
                              border: selectedDate === 9 && '1px solid #2ED7FE',
                           }}
                           className="shrink-0 max-customMd:size-[67px] customMd:size-[103px] customMd:!text-15 customMd:!leading-3"
                           onClick={() => setSelectedDate(9)}
                        >
                           <p>چهارشنبه</p>
                           <p>12 اردیبهشت</p>
                        </Button>
                        <Button
                           sx={{
                              flexDirection: 'column',
                              gap: '15px',
                              fontSize: '10px',
                              lineHeight: '8px',
                              backgroundColor: '#2ED7FE0D',
                              borderRadius: '10px',
                              border: selectedDate === 10 && '1px solid #2ED7FE',
                           }}
                           className="shrink-0 max-customMd:size-[67px] customMd:size-[103px] customMd:!text-15 customMd:!leading-3"
                           onClick={() => setSelectedDate(10)}
                        >
                           <p>چهارشنبه</p>
                           <p>12 اردیبهشت</p>
                        </Button>
                        <Button
                           sx={{
                              flexDirection: 'column',
                              gap: '15px',
                              fontSize: '10px',
                              lineHeight: '8px',
                              backgroundColor: '#2ED7FE0D',
                              borderRadius: '10px',
                              border: selectedDate === 11 && '1px solid #2ED7FE',
                           }}
                           className="shrink-0 max-customMd:size-[67px] customMd:size-[103px] customMd:!text-15 customMd:!leading-3"
                           onClick={() => setSelectedDate(11)}
                        >
                           <p>چهارشنبه</p>
                           <p>12 اردیبهشت</p>
                        </Button>
                        <Button
                           sx={{
                              flexDirection: 'column',
                              gap: '15px',
                              fontSize: '10px',
                              lineHeight: '8px',
                              backgroundColor: '#2ED7FE0D',
                              borderRadius: '10px',
                              border: selectedDate === 12 && '1px solid #2ED7FE',
                           }}
                           className="shrink-0 max-customMd:size-[67px] customMd:size-[103px] customMd:!text-15 customMd:!leading-3"
                           onClick={() => setSelectedDate(12)}
                        >
                           <p>چهارشنبه</p>
                           <p>12 اردیبهشت</p>
                        </Button>
                        <Button
                           sx={{
                              flexDirection: 'column',
                              gap: '15px',
                              fontSize: '10px',
                              lineHeight: '8px',
                              backgroundColor: '#2ED7FE0D',
                              borderRadius: '10px',
                              border: selectedDate === 13 && '1px solid #2ED7FE',
                           }}
                           className="shrink-0 max-customMd:size-[67px] customMd:size-[103px] customMd:!text-15 customMd:!leading-3"
                           onClick={() => setSelectedDate(13)}
                        >
                           <p>چهارشنبه</p>
                           <p>12 اردیبهشت</p>
                        </Button>
                        <Button
                           sx={{
                              flexDirection: 'column',
                              gap: '15px',
                              fontSize: '10px',
                              lineHeight: '8px',
                              backgroundColor: '#2ED7FE0D',
                              borderRadius: '10px',
                              border: selectedDate === 14 && '1px solid #2ED7FE',
                           }}
                           className="shrink-0 max-customMd:size-[67px] customMd:size-[103px] customMd:!text-15 customMd:!leading-3"
                           onClick={() => setSelectedDate(14)}
                        >
                           <p>چهارشنبه</p>
                           <p>12 اردیبهشت</p>
                        </Button>
                        <Button
                           sx={{
                              flexDirection: 'column',
                              gap: '15px',
                              fontSize: '10px',
                              lineHeight: '8px',
                              backgroundColor: '#2ED7FE0D',
                              borderRadius: '10px',
                              border: selectedDate === 15 && '1px solid #2ED7FE',
                           }}
                           className="shrink-0 max-customMd:size-[67px] customMd:size-[103px] customMd:!text-15 customMd:!leading-3"
                           onClick={() => setSelectedDate(15)}
                        >
                           <p>چهارشنبه</p>
                           <p>12 اردیبهشت</p>
                        </Button>
                        <Button
                           sx={{
                              flexDirection: 'column',
                              gap: '15px',
                              fontSize: '10px',
                              lineHeight: '8px',
                              backgroundColor: '#2ED7FE0D',
                              borderRadius: '10px',
                              border: selectedDate === 16 && '1px solid #2ED7FE',
                           }}
                           className="shrink-0 max-customMd:size-[67px] customMd:size-[103px] customMd:!text-15 customMd:!leading-3"
                           onClick={() => setSelectedDate(16)}
                        >
                           <p>چهارشنبه</p>
                           <p>12 اردیبهشت</p>
                        </Button>
                        <Button
                           sx={{
                              flexDirection: 'column',
                              gap: '15px',
                              fontSize: '10px',
                              lineHeight: '8px',
                              backgroundColor: '#2ED7FE0D',
                              borderRadius: '10px',
                              border: selectedDate === 17 && '1px solid #2ED7FE',
                           }}
                           className="shrink-0 max-customMd:size-[67px] customMd:size-[103px] customMd:!text-15 customMd:!leading-3"
                           onClick={() => setSelectedDate(17)}
                        >
                           <p>چهارشنبه</p>
                           <p>12 اردیبهشت</p>
                        </Button>
                     </div>
                  </div>

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

         <Dialog open={showFilterMobile} onClose={() => setShowFilterMobile(false)} top>
            <div className="rounded-10">
               <MedicalAdviceAside onClose={() => setShowFilterMobile(false)} />
            </div>
         </Dialog>

         <Dialog open={showAboutDoctorModal} onClose={() => setShowAboutDoctorModal(false)} top>
            <div className="rounded-10 p-[30px]">
               <div className="flex justify-end">
                  <IconButton
                     sx={{ width: '25px', height: '25px', backgroundColor: '#2ED7FE80', padding: 0 }}
                     onClick={() => setShowAboutDoctorModal(false)}
                  >
                     <GrFormClose size="20px" color="#000" />
                  </IconButton>
               </div>

               <div className="mt-[10]">
                  <div className="flex gap-2">
                     <FaUserDoctor color="#2ED7FE" size="20px" />
                     <p className="text-lg text-textColor3">درباره پزشک</p>
                  </div>
                  <div className="mt-15 flex items-center gap-1 text-sm text-textColor2">
                     <p>شماره نظام پزشکی : </p>
                     <p className="font-DanaFaNum font-bold">123456</p>
                  </div>
                  <p className="mt-[10px] max-w-[450px] text-sm text-textColor2">
                     متخصص کودکان و نوزادان دارای بورد تخصصی از دانشگاه شهید بهشتی و ... مشاوره در زمینه های زردی
                     نوزادان ،تغذیه،ریفلاکس و کولیک وآلرژی... درمان بیماری‌های تنفسی ،گوارشی ،عفونی ...
                  </p>
               </div>
            </div>
         </Dialog>

         <Dialog open={showOfficeStuffModal} onClose={() => setShowOfficeStuffModal(false)} top>
            <div className="rounded-10 p-[30px]">
               <div className="flex justify-end">
                  <IconButton
                     sx={{ width: '25px', height: '25px', backgroundColor: '#2ED7FE80', padding: 0 }}
                     onClick={() => setShowOfficeStuffModal(false)}
                  >
                     <GrFormClose size="20px" color="#000" />
                  </IconButton>
               </div>

               <div className="mt-[10]">
                  <div className="flex gap-2">
                     <PiHandHeartBold color="#2ED7FE" size="20px" />
                     <p className="text-lg text-textColor3">ملاحضات مطب</p>
                  </div>
                  <p className="mt-15 max-w-[450px] text-sm text-textColor2">
                     متخصص کودکان و نوزادان دارای بورد تخصصی از دانشگاه شهید بهشتی و ... مشاوره در زمینه های زردی
                     نوزادان ،تغذیه،ریفلاکس و کولیک وآلرژی... درمان بیماری‌های تنفسی ،گوارشی ،عفونی ... نوزادان
                     ،تغذیه،ریفلاکس و کولیک وآلرژی... درمان بیماری‌های تنفسی ،گوارشی ،عفونی ...
                  </p>
               </div>
            </div>
         </Dialog>
      </div>
   );
}

export default DoctorAppointment;
