import Image from 'next/image';
import Link from 'next/link';

// MUI
import { Button } from '@mui/material';

// Icons
import { IoLocation } from 'react-icons/io5';
import { BsFillCalendarWeekFill } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import { Edit } from 'iconsax-react';
import { BiHomeAlt } from 'react-icons/bi';

// Assets
import doctorProfileSample from '@/assets/images/doctorProfileSample.png';

function DoctorCard({ buttonsType }) {
   return (
      <div className="rounded-10 border border-solid border-secondaryBlue p-15 customMd:p-5">
         <div className="flex flex-col customMd:flex-row customMd:items-center customMd:justify-between">
            <div className="flex flex-col items-center gap-[10px] customMd:flex-row customMd:gap-5">
               <div className="relative size-[60px]">
                  <Image src={doctorProfileSample} alt="user profile" fill className="rounded-full object-cover" />
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
            {buttonsType === 1 ? (
               <div className="flex items-center gap-[14px] max-customMd:mt-[30px]">
                  <Link href="/doctor-appointment/mansoori" className="block max-customMd:flex-1 customMd:w-[135px]">
                     <Button
                        variant="outlined"
                        fullWidth
                        sx={{ height: '40px', borderRadius: '5px', fontFamily: 'kalamehSemiBold600', fontSize: '15px' }}
                     >
                        نوبت دهی
                     </Button>
                  </Link>
                  <Link href="/doctor-medical-advice/mansoori" className="block max-customMd:flex-1 customMd:w-[135px]">
                     <Button
                        variant="contained"
                        fullWidth
                        sx={{
                           height: '40px',
                           borderRadius: '5px',
                           fontFamily: 'kalamehSemiBold600',
                           fontSize: '15px',
                           color: '#fff',
                        }}
                     >
                        رزرو مشاوره
                     </Button>
                  </Link>
               </div>
            ) : buttonsType === 2 ? (
               <Link href="/doctor-appointment/mansoori" className="block max-customMd:mt-[30px]">
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
                     نوبت بگیرید
                  </Button>
               </Link>
            ) : null}
         </div>
      </div>
   );
}

export default DoctorCard;
