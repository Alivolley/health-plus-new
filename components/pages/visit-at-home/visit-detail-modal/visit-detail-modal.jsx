import Image from 'next/image';

// MUI
import { Button, Dialog, IconButton } from '@mui/material';

// Icons
import { GrFormClose } from 'react-icons/gr';

// Assets
import visitHomePic from '@/assets/images/visitHomePic.png';

function VisitDetailModal({ showDetailModal, setShowDetailModal }) {
   return (
      <Dialog
         open={showDetailModal}
         onClose={() => setShowDetailModal(false)}
         dir="rtl"
         fullWidth
         maxWidth="md"
         sx={{ '& > div': { '& > div': { backgroundColor: 'transparent', boxShadow: 'none' } } }}
      >
         <div className="mb-15 rounded-10 bg-white p-[10px] customMd:mb-[30px] customMd:p-[30px]">
            <div className="flex items-center justify-between">
               <p className="font-kalamehSemiBold600 text-xs text-textColor1 customMd:text-xl customMd:leading-4">
                  جزییات
               </p>
               <IconButton
                  sx={{ width: '25px', height: '25px', backgroundColor: '#2ED7FE80', padding: 0 }}
                  onClick={() => setShowDetailModal(false)}
               >
                  <GrFormClose size="20px" color="#000" />
               </IconButton>
            </div>

            <div className="mt-2 flex flex-col gap-[10px] customMd:mt-[30px] customMd:flex-row customMd:gap-[30px]">
               <div
                  className="relative size-[56px] shrink-0 overflow-hidden rounded border border-solid border-primaryBlue
                   bg-[#ecfcf0] customMd:size-[145px] customMd:rounded-10"
               >
                  <Image src={visitHomePic} alt="pic" fill className="object-cover" />
               </div>
               <div>
                  <p className="text-[11px] leading-[9px] text-textColor1 customMd:text-xl">
                     رادیولوژی (کلیشه دوم به بعد)
                  </p>
                  <p className="mt-[10px] text-xs text-textColor2 customMd:mt-5 customMd:text-xl">
                     توضیحات: توجه داشته باشید هزینه ای که در این مرحله پرداخت می شود، هزینه پایه بوده و چنانچه پس از
                     هماهنگی مراکز درمانی نیاز به خدمات، تجهیزات و یا دارو های دیگر باشد، هزینه آن توسط مراکز درمانی
                     دریافت می گردد
                  </p>
               </div>
            </div>

            <div className="mt-[14px] flex flex-col items-center gap-5 customMd:flex-row customMd:justify-end customMd:gap-[60px]">
               <p className="font-DanaFaNum text-15 font-bold text-primaryBlue max-customMd:text-center customMd:text-xl">
                  ۵۲۰ هزار تومان
               </p>
               <Button
                  variant="contained"
                  sx={{ color: '#fff', fontSize: '10px', borderRadius: '4px', paddingX: '32px' }}
                  className="h-[29px] customMd:h-[61px] customMd:!rounded-10 customMd:!px-[46px] customMd:!text-xl"
               >
                  + افزودن
               </Button>
            </div>
         </div>

         <Button
            sx={{
               height: '61px',
               borderRadius: '10px',
               backgroundColor: 'white',
               color: '#40404080',
               fontSize: '15px',
               ':hover': { backgroundColor: '#2ED7FE', color: 'white' },
            }}
            fullWidth
            className="customMd:!text-xl"
         >
            مشاهده و ثبت سفارش
         </Button>
      </Dialog>
   );
}

export default VisitDetailModal;
