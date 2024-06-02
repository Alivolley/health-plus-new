import { useState } from 'react';

// MUI
import { Button, IconButton } from '@mui/material';

// Icons
import { GrFormClose } from 'react-icons/gr';
import { FiPhoneCall } from 'react-icons/fi';

const filterBtnSx = { backgroundColor: '#4040400D', height: '40px', paddingX: '10px', borderRadius: '5px' };

function PhoneConsultation({ onClose }) {
   const [chosenPeriod, setChosenPeriod] = useState(10);
   return (
      <div className="p-[30px]">
         <div className="flex items-center justify-between">
            <div className="flex items-center gap-[10px]">
               <FiPhoneCall color="#2ED7FE" size="22px" />
               <p className="font-kalamehSemiBold600 text-xl leading-4 text-textColor1">مشاوره تلفنی</p>
            </div>
            {onClose && (
               <IconButton
                  sx={{ width: '25px', height: '25px', backgroundColor: '#2ED7FE80', padding: 0 }}
                  onClick={onClose}
               >
                  <GrFormClose size="20px" color="#000" />
               </IconButton>
            )}
         </div>

         <div className="mt-15 space-y-[10px]">
            <div className="flex items-center gap-[15px]">
               <span className="size-[10px] shrink-0 rounded-full bg-secondaryBlue" />
               <p className="text-15 leading-[19px] text-textColor2">
                  قابلیت ارسال پیام و فایل تا ۲۴ ساعت بعد از مشاوره
               </p>
            </div>
            <div className="flex items-center gap-[15px]">
               <span className="size-[10px] shrink-0 rounded-full bg-secondaryBlue" />
               <p className="text-15 leading-[19px] text-textColor2">شروع تماس بلافاصله بعد از ثبت درخواست</p>
            </div>
         </div>

         <div className="mt-15 space-y-[10px]">
            <Button fullWidth sx={filterBtnSx} onClick={() => setChosenPeriod(10)}>
               <div className="flex w-full items-center justify-between text-textColor2">
                  <p className="font-DanaFaNum text-sm font-bold" id="some">
                     10 دقیقه . 145 هزار تومان
                  </p>
                  <span
                     className={`size-[15px] rounded-full transition-all duration-200 ${chosenPeriod === 10 ? 'bg-primaryBlue' : 'bg-[#40404033]'}`}
                  />
               </div>
            </Button>
            <Button fullWidth sx={filterBtnSx} onClick={() => setChosenPeriod(15)}>
               <div className="flex w-full items-center justify-between text-textColor2">
                  <p className="font-DanaFaNum text-sm font-bold">15 دقیقه . 200 هزار تومان</p>
                  <span
                     className={`size-[15px] rounded-full transition-all duration-200 ${chosenPeriod === 15 ? 'bg-primaryBlue' : 'bg-[#40404033]'}`}
                  />
               </div>
            </Button>
            <Button fullWidth sx={filterBtnSx} onClick={() => setChosenPeriod(20)}>
               <div className="flex w-full items-center justify-between text-textColor2">
                  <p className="font-DanaFaNum text-sm font-bold">20 دقیقه . 290 هزار تومان</p>
                  <span
                     className={`size-[15px] rounded-full transition-all duration-200 ${chosenPeriod === 20 ? 'bg-primaryBlue' : 'bg-[#40404033]'}`}
                  />
               </div>
            </Button>
         </div>

         <div className="mt-5">
            <Button
               fullWidth
               variant="contained"
               sx={{
                  borderRadius: '5px',
                  height: '40px',
                  color: 'white',
                  fontSize: '14px',
                  fontFamily: 'DanaFaNum',
                  fontWeight: '700',
               }}
            >
               رزرو مشاوره تلفنی {chosenPeriod} دقیقه
            </Button>
         </div>
      </div>
   );
}

export default PhoneConsultation;
