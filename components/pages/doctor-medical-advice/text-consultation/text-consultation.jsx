// MUI
import { Button, IconButton } from '@mui/material';

// Icons
import { GrFormClose } from 'react-icons/gr';
import { Edit } from 'iconsax-react';

function TextConsultation({ onClose }) {
   return (
      <div className="p-[30px]">
         <div className="flex items-center justify-between">
            <div className="flex items-center gap-[10px]">
               <Edit color="#2ED7FE" size="22px" />
               <p className="font-kalamehSemiBold600 text-xl leading-4 text-textColor1">مشاوره متنی</p>
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
               <p className="text-15 leading-[19px] text-textColor2">قابلیت ارسال فایل و عکس برای هر دو طرف</p>
            </div>
            <div className="flex items-center gap-[15px]">
               <span className="size-[10px] shrink-0 rounded-full bg-secondaryBlue" />
               <p className="text-15 leading-[19px] text-textColor2">حداکثر زمان انتظار تا پاسخگویی ۱ ساعت</p>
            </div>
            <div className="flex items-center gap-[15px]">
               <span className="size-[10px] shrink-0 rounded-full bg-secondaryBlue" />
               <p className="text-15 leading-[19px] text-textColor2">پایان روند مشاوره به صورت توافقی</p>
            </div>
         </div>

         <p
            className="mt-15 flex h-10 items-center justify-center rounded-[5px] bg-[#4040400D]
          text-center font-DanaFaNum text-sm font-bold text-textColor2"
         >
            110 هزار تومان
         </p>

         <div className="mt-5">
            <Button
               fullWidth
               variant="contained"
               sx={{
                  borderRadius: '5px',
                  height: '40px',
                  color: 'white',
                  fontSize: '15px',
               }}
            >
               رزرو مشاوره متنی
            </Button>
         </div>
      </div>
   );
}

export default TextConsultation;
