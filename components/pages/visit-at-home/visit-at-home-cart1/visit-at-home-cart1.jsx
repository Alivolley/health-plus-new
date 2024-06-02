'use client';

import { useState } from 'react';
import Image from 'next/image';

// MUI
import { Button } from '@mui/material';

// Assets
import visitHomePic from '@/assets/images/visitHomePic.png';

// Components
import VisitDetailModal from '../visit-detail-modal/visit-detail-modal';

function VisitAtHomeCart1() {
   const [showDetailModal, setShowDetailModal] = useState(false);

   return (
      <div
         className="rounded px-2 py-[11px] customMd:rounded-10 customMd:px-5 customMd:py-[30px]"
         style={{ boxShadow: '0px 0px 7.37px 0px #0000001A' }}
      >
         <div
            className="relative mx-auto size-[55px] overflow-hidden rounded border border-solid border-primaryBlue 
         bg-[#ecfcf0] customMd:size-[150px] customMd:rounded-10"
         >
            <Image src={visitHomePic} alt="pic" fill className="object-cover" />
         </div>
         <p
            className="mx-auto mt-2 line-clamp-2 h-[30px] max-w-[80px] text-center text-10 leading-[15px]
         text-textColor1 customMd:mt-5 customMd:h-[56px] customMd:max-w-[180px] customMd:text-xl"
         >
            خدمات فیزیوتراپی (قیمت پایه است)
         </p>
         <p className="mt-2 text-center font-DanaFaNum text-[8px] font-bold text-primaryBlue customMd:mt-5 customMd:text-xl">
            520 هزار تومان
         </p>

         <div className="mt-[10px] flex items-center gap-[7px] customMd:mt-[30px] customMd:gap-5">
            <Button
               variant="outlined"
               sx={{ fontSize: '8px', borderRadius: '4px' }}
               className="h-[23px] customMd:h-[61px] customMd:!rounded-10 customMd:!text-xl"
               fullWidth
               onClick={() => setShowDetailModal(true)}
            >
               جزییات
            </Button>
            <Button
               variant="contained"
               sx={{ color: '#fff', fontSize: '8px', borderRadius: '4px' }}
               className="h-[23px] customMd:h-[61px] customMd:!rounded-10 customMd:!text-xl"
               fullWidth
            >
               + افزودن
            </Button>
         </div>

         <VisitDetailModal showDetailModal={showDetailModal} setShowDetailModal={setShowDetailModal} />
      </div>
   );
}

export default VisitAtHomeCart1;
