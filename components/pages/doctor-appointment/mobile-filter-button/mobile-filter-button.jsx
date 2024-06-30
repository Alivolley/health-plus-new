'use client';

import { useState } from 'react';

// MUI
import { Button, Dialog } from '@mui/material';

// Components
import MedicalAdviceAside from '../../filter-medical-advice/medical-advice-aside/medical-advice-aside';

const filterBtnStyle = {
   backgroundColor: '#2ED7FE0D',
   height: '45px',
   border: 'solid 1px #2ED7FE',
   borderRadius: '10px',
   color: '#404040',
   fontSize: '15px',
   lineHeight: '12px',
};

function MobileFilterButton({ specialtyList, searchParams }) {
   const [showFilterMobile, setShowFilterMobile] = useState(false);

   return (
      <>
         <Button
            className="!mt-15 customLg:!hidden"
            fullWidth
            sx={filterBtnStyle}
            onClick={() => setShowFilterMobile(true)}
         >
            فیلتر ها
         </Button>

         <Dialog open={showFilterMobile} onClose={() => setShowFilterMobile(false)} top>
            <div className="rounded-10">
               <MedicalAdviceAside
                  onClose={() => setShowFilterMobile(false)}
                  specialtyList={specialtyList}
                  searchParams={searchParams}
                  basePath="/filter-medical-advice"
               />
            </div>
         </Dialog>
      </>
   );
}

export default MobileFilterButton;
