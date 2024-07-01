'use client';

import { useState } from 'react';

// MUI
import { Button, Dialog, IconButton } from '@mui/material';

// Icons
import { GrFormClose } from 'react-icons/gr';
import { PiHandHeartBold } from 'react-icons/pi';
import { FaUserDoctor } from 'react-icons/fa6';

const filterBtnStyle = {
   backgroundColor: '#2ED7FE0D',
   height: '45px',
   border: 'solid 1px #2ED7FE',
   borderRadius: '10px',
   color: '#404040',
   fontSize: '15px',
   lineHeight: '12px',
};

function StatusButtons({ aboutDetail, officeHints, medicalNumber }) {
   const [showOfficeStuffModal, setShowOfficeStuffModal] = useState(false);
   const [showAboutDoctorModal, setShowAboutDoctorModal] = useState(false);

   return (
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
                  <p className="mt-15 max-w-[450px] text-sm text-textColor2">{officeHints}</p>
               </div>
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
                     <p className="font-DanaFaNum font-bold">{medicalNumber}</p>
                  </div>
                  <p className="mt-[10px] max-w-[450px] text-sm text-textColor2">{aboutDetail}</p>
               </div>
            </div>
         </Dialog>
      </div>
   );
}

export default StatusButtons;
