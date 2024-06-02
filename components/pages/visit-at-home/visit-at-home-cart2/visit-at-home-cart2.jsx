'use client';

import { useState } from 'react';
import Image from 'next/image';

// MUI
import { Button } from '@mui/material';

// Assets
import visitHomePic from '@/assets/images/visitHomePic.png';

// Components
import VisitDetailModal from '../visit-detail-modal/visit-detail-modal';

function VisitAtHomeCart2() {
   const [showDetailModal, setShowDetailModal] = useState(false);

   return (
      <div
         className="rounded p-[10px] customMd:rounded-10 customMd:p-[30px]"
         style={{ boxShadow: '0px 0px 7.37px 0px #0000001A' }}
      >
         <div className="flex gap-[10px] customMd:gap-[30px]">
            <div
               className="relative size-[55px] shrink-0 overflow-hidden rounded border border-solid border-primaryBlue 
            bg-[#ecfcf0] customMd:size-[145px] customMd:rounded-10"
            >
               <Image src={visitHomePic} alt="pic" fill className="object-cover" />
            </div>
            <div className="grow">
               <p className="text-15 text-textColor1 customMd:text-xl">پزشک عمومی</p>
               <p className="mt-[10px] text-15 text-textColor2 customMd:mt-5 customMd:text-xl">
                  ویزیت پزشک عمومی در منزل
               </p>

               <div className="mt-2 hidden items-end justify-between customMd:flex">
                  <p className="font-DanaFaNum text-xl font-bold text-primaryBlue">520 هزار تومان</p>
                  <div className="flex items-center gap-[10px]">
                     <Button
                        variant="outlined"
                        sx={{ fontSize: '20px', borderRadius: '10px' }}
                        className="h-[61px] w-[160px]"
                        onClick={() => setShowDetailModal(true)}
                     >
                        جزییات
                     </Button>
                     <Button
                        variant="contained"
                        sx={{ color: '#fff', fontSize: '20px', borderRadius: '10px' }}
                        className="h-[61px] w-[160px]"
                     >
                        + افزودن
                     </Button>
                  </div>
               </div>
            </div>
         </div>

         <div className="mt-5 flex items-end justify-between customMd:hidden">
            <p className="font-DanaFaNum text-15 font-bold text-primaryBlue">520 هزار تومان</p>
            <div className="flex items-center gap-[7px]">
               <Button
                  variant="outlined"
                  sx={{ fontSize: '8px', borderRadius: '4px' }}
                  className="h-[23px] w-[58px]"
                  onClick={() => setShowDetailModal(true)}
               >
                  جزییات
               </Button>
               <Button
                  variant="contained"
                  sx={{ color: '#fff', fontSize: '8px', borderRadius: '4px' }}
                  className="h-[23px] w-[58px]"
               >
                  + افزودن
               </Button>
            </div>
         </div>

         <VisitDetailModal showDetailModal={showDetailModal} setShowDetailModal={setShowDetailModal} />
      </div>
   );
}

export default VisitAtHomeCart2;
