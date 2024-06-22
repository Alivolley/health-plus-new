'use client';

import { useState } from 'react';

// MUI
import { Button, Dialog } from '@mui/material';

// Components
import PhoneConsultation from '../phone-consultation/phone-consultation';
import TextConsultation from '../text-consultation/text-consultation';

const filterBtnStyle = {
   backgroundColor: '#2ED7FE0D',
   height: '45px',
   border: 'solid 1px #2ED7FE',
   borderRadius: '10px',
   color: '#404040',
   fontSize: '15px',
   lineHeight: '12px',
};

function ConsultationMobileButtons() {
   const [showPhoneConsultationModal, setShowPhoneConsultationModal] = useState(false);
   const [showTextConsultationModal, setShowTextConsultationModal] = useState(false);

   return (
      <>
         <Button className="flex-1" sx={filterBtnStyle} onClick={() => setShowTextConsultationModal(true)}>
            مشاوره متنی
         </Button>
         <Button className="flex-1" sx={filterBtnStyle} onClick={() => setShowPhoneConsultationModal(true)}>
            مشاوره تلفنی
         </Button>

         <Dialog open={showPhoneConsultationModal} onClose={() => setShowPhoneConsultationModal(false)} top>
            <PhoneConsultation onClose={() => setShowPhoneConsultationModal(false)} />
         </Dialog>

         <Dialog open={showTextConsultationModal} onClose={() => setShowTextConsultationModal(false)} top>
            <TextConsultation onClose={() => setShowTextConsultationModal(false)} />
         </Dialog>
      </>
   );
}

export default ConsultationMobileButtons;
