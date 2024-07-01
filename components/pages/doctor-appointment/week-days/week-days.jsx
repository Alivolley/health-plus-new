'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// MUI
import { Button } from '@mui/material';

// Icons
import { IoMdArrowForward, IoMdArrowBack } from 'react-icons/io';
import { IoLocation, IoArrowBackSharp } from 'react-icons/io5';
import { BsFillCalendarWeekFill } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import { Edit } from 'iconsax-react';
import { BiHomeAlt } from 'react-icons/bi';
import { FaUserDoctor } from 'react-icons/fa6';
import { PiHandHeartBold } from 'react-icons/pi';

// Assets
import noProfilePic from '@/assets/images/noProfile.png';

// Components
import StatusButtons from '@/components/pages/doctor-appointment/status-buttons/status-buttons';

const dayBtnSx = {
   flexDirection: 'column',
   gap: '15px',
   fontSize: '10px',
   lineHeight: '8px',
   backgroundColor: '#2ED7FE0D',
   borderRadius: '10px',
};

function WeekDays({ doctorDetailData }) {
   const [selectedDate, setSelectedDate] = useState();
   const [boxSize, setBoxSize] = useState('150');

   const dateWrapperRef = useRef();
   const boxRef = useRef(null);

   const scrollLeftHandler = () => {
      if (dateWrapperRef.current) {
         const newScrollLeft = dateWrapperRef.current.scrollLeft - 350;
         dateWrapperRef.current.scrollTo({ left: newScrollLeft });
      }
   };

   const scrollRightHandler = () => {
      if (dateWrapperRef.current) {
         const newScrollLeft = dateWrapperRef.current.scrollLeft + 350;
         dateWrapperRef.current.scrollTo({ left: newScrollLeft });
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

   useEffect(() => {
      if (Object.keys(doctorDetailData?.data?.has_visits).length) {
         const firstItem = Object.keys(doctorDetailData?.data?.has_visits)[0];
         setSelectedDate({ key: firstItem, index: 0 });
      }
   }, [doctorDetailData]);

   const findDateHandler = () => {
      const some = Object.keys(doctorDetailData?.data?.visits);
      if (some?.length) {
         const shit = some.find((item, index) => index === (selectedDate ? selectedDate?.index : 0));
         const fuck = doctorDetailData?.data?.visits?.[shit];
         return fuck;
      }
      return {};
   };

   const goToFirstTurn = () => {
      const firstItem = Object.keys(doctorDetailData?.data?.has_visits)[0];
      setSelectedDate({ key: firstItem, index: 0 });
      if (dateWrapperRef.current) {
         dateWrapperRef.current.scrollTo({ left: 0 });
      }
   };

   return (
      <>
         <div
            className="rounded-10 border border-solid border-secondaryBlue p-15 max-customMd:mt-15 customMd:p-5"
            ref={boxRef}
         >
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
                     <p className="text-textColor1 max-customMd:text-center">{doctorDetailData?.data?.full_name}</p>
                     <p className="text-textColor2 max-customMd:text-center">{doctorDetailData?.data?.specialty}</p>
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
                  <div className="mt-5 flex gap-2 customMd:items-center">
                     <BsFillCalendarWeekFill color="#2ED7FE" size="20px" />
                     <p className="text-15 leading-[22px] text-textColor3 customMd:text-xl">
                        اولین نوبت خالی :{' '}
                        <span className="font-DanaFaNum font-bold">{doctorDetailData?.data?.first_visit}</span>
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
                  <p className="font-DanaFaNum font-bold">{doctorDetailData?.data?.medical_number}</p>
               </div>
               <p className="max-w-[450px] text-10 leading-[15px] text-textColor2 customMd:text-15 customMd:leading-[22px]">
                  {doctorDetailData?.data?.about}
               </p>
            </div>

            <div className="flex-1">
               <div className="flex gap-2 customMd:items-center">
                  <PiHandHeartBold color="#2ED7FE" size="20px" />
                  <p className="text-15 leading-[22px] text-textColor3 customMd:text-xl">ملاحضات مطب</p>
               </div>
               <p className="mt-[10px] max-w-[450px] text-10 leading-[15px] text-textColor2 customMd:mt-15 customMd:text-15 customMd:leading-[22px]">
                  {doctorDetailData?.data?.office_hints}
               </p>
            </div>
         </div>

         <StatusButtons
            aboutDetail={doctorDetailData?.data?.about}
            officeHints={doctorDetailData?.data?.office_hints}
            medicalNumber={doctorDetailData?.data?.medical_number}
         />

         {selectedDate && (
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
                  {Object.keys(doctorDetailData?.data?.has_visits).map((key, index) => (
                     <Button
                        key={crypto.randomUUID()}
                        sx={{
                           ...dayBtnSx,
                           border: selectedDate?.key === key && '1px solid #2ED7FE',
                        }}
                        className="shrink-0 max-customMd:size-[67px] customMd:size-[103px] customMd:!text-15 customMd:!leading-3"
                        onClick={() => setSelectedDate({ key, index })}
                     >
                        <p>{key.match(/^\D+/)[0]}</p>
                        <p className="font-DanaFaNum">{key.match(/\d+.*/)[0]}</p>
                        {!doctorDetailData?.data?.has_visits?.[key] && <p>-</p>}
                     </Button>
                  ))}
               </div>
            </div>
         )}

         <div className="mt-15 flex flex-wrap gap-[5px] customMd:mt-[30px] customMd:gap-5">
            {Object.entries(findDateHandler())?.length ? (
               Object.entries(findDateHandler())?.map(item => (
                  <Button
                     key={crypto.randomUUID()}
                     sx={{
                        border: item?.[1] ? '1px solid #40404033' : '1px solid #40404080',
                        borderRadius: '5px',
                        color: item?.[1] ? '#40404033 !important' : '#40404080',
                        fontFamily: 'DanaFaNum',
                        fontWeight: '700',
                        fontSize: '15px',
                     }}
                     disabled={item?.[1]}
                     className="h-[30px] w-[67px] customMd:h-[50px] customMd:w-[98px] customMd:!rounded-10 customMd:!text-xl"
                  >
                     {item?.[0]}
                  </Button>
               ))
            ) : (
               <div className="mx-auto mt-10 flex flex-col items-center justify-center gap-[30px] text-center">
                  <p className="text-15 leading-6 text-textColor3 customMd:text-xl">
                     در حال حاضر برای این روز نوبتی تعریف نشده است
                  </p>

                  {selectedDate && (
                     <Button
                        variant="contained"
                        sx={{
                           height: '40px',
                           borderRadius: '5px',
                           fontFamily: 'kalamehSemiBold600',
                           fontSize: '15px',
                           color: '#fff',
                           width: '190px',
                        }}
                        endIcon={<IoArrowBackSharp />}
                        onClick={goToFirstTurn}
                     >
                        برو به اولین نوبت آزاد
                     </Button>
                  )}
               </div>
            )}
         </div>
      </>
   );
}

export default WeekDays;
