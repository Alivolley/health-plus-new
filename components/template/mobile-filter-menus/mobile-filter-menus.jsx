'use client';

import { useState } from 'react';

// MUI
import { Button, Dialog } from '@mui/material';

// Components
import MobileSortingModal from '@/components/pages/filter-medical-advice/mobile-sorting-modal/mobile-sorting-modal';
import MedicalAdviceAside from '@/components/pages/filter-medical-advice/medical-advice-aside/medical-advice-aside';

const filterBtnStyle = {
   backgroundColor: '#2ED7FE0D',
   height: '45px',
   border: 'solid 1px #2ED7FE',
   borderRadius: '10px',
   color: '#404040',
   fontSize: '15px',
   lineHeight: '12px',
};

function MobileFilterMenus() {
   const [showFilterMobile, setShowFilterMobile] = useState(false);
   const [showSortingMobile, setShowSortingMobile] = useState(false);

   return (
      <>
         <div className="mt-15 flex items-center gap-5 customLg:hidden">
            <Button className="flex-1" sx={filterBtnStyle} onClick={() => setShowFilterMobile(true)}>
               فیلتر ها
            </Button>
            <Button className="flex-1" sx={filterBtnStyle} onClick={() => setShowSortingMobile(true)}>
               ترتیب نمایش
            </Button>
         </div>

         <Dialog open={showFilterMobile} onClose={() => setShowFilterMobile(false)} top>
            <div className="rounded-10">
               <MedicalAdviceAside onClose={() => setShowFilterMobile(false)} />
            </div>
         </Dialog>

         <Dialog open={showSortingMobile} onClose={() => setShowSortingMobile(false)} top>
            <MobileSortingModal setShowSortingMobile={setShowSortingMobile} />
         </Dialog>
      </>
   );
}

export default MobileFilterMenus;
