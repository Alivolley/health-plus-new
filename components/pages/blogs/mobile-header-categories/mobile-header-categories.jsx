'use client';

import Link from 'next/link';
import { useState } from 'react';

// MUI
import { Button, Dialog, IconButton } from '@mui/material';

// Icons
import { GrFormClose } from 'react-icons/gr';

const buttonSx = { height: '61px', backgroundColor: '#2ED7FE0D', borderRadius: '10px' };

function MobileHeaderCategories({ blogCategoriesData }) {
   const [showHealthPlusModal, setShowHealthPlusModal] = useState(false);
   const [showLifeSkillModal, setShowLifeSkillModal] = useState(false);
   const [showMedicalModal, setShowMedicalModal] = useState(false);

   return (
      <div className="grid grid-cols-2 gap-3 customMd:hidden">
         <div>
            <Button fullWidth sx={buttonSx} onClick={() => setShowMedicalModal(true)}>
               سلامت و پزشکی
            </Button>
         </div>
         <div>
            <Button fullWidth sx={buttonSx} onClick={() => setShowLifeSkillModal(true)}>
               مهارت های زندگی
            </Button>
         </div>
         <Link href="/">
            <Button fullWidth sx={buttonSx}>
               مقالات ویروس کرونا
            </Button>
         </Link>
         <div>
            <Button fullWidth sx={buttonSx} onClick={() => setShowHealthPlusModal(true)}>
               هلث پلاس
            </Button>
         </div>

         <Dialog open={showHealthPlusModal} onClose={() => setShowHealthPlusModal(false)} top>
            <div className="min-w-[284px]">
               <div className="p-6">
                  <div className="flex items-center justify-between">
                     <p className="font-kalamehSemiBold600 text-xl leading-4 text-textColor1">هلث پلاس</p>
                     <IconButton
                        sx={{ width: '25px', height: '25px', backgroundColor: '#2ED7FE80', padding: 0 }}
                        onClick={() => setShowHealthPlusModal(false)}
                     >
                        <GrFormClose size="20px" color="#000" />
                     </IconButton>
                  </div>

                  <div className="mt-30 flex flex-col gap-2.5 text-15 leading-6 text-textColor1">
                     <Link href="/" className="border-b-2 border-solid border-borderColor pb-2.5">
                        بازگشت به صفحه اصلی
                     </Link>
                     <Link href="/" className="border-b-2 border-solid border-borderColor pb-2.5">
                        درباره هلث پلاس
                     </Link>
                     <Link href="/" className="border-b-2 border-solid border-borderColor pb-2.5">
                        تماس با هلث پلاس
                     </Link>
                  </div>
               </div>
            </div>
         </Dialog>

         <Dialog open={showLifeSkillModal} onClose={() => setShowLifeSkillModal(false)} top>
            <div className="min-w-[300px]">
               <div className="p-6">
                  <div className="flex items-center justify-between">
                     <p className="font-kalamehSemiBold600 text-xl leading-4 text-textColor1">مهارت های زندگی</p>
                     <IconButton
                        sx={{ width: '25px', height: '25px', backgroundColor: '#2ED7FE80', padding: 0 }}
                        onClick={() => setShowLifeSkillModal(false)}
                     >
                        <GrFormClose size="20px" color="#000" />
                     </IconButton>
                  </div>

                  <div className="mt-30 flex flex-col gap-2.5 text-15 leading-6 text-textColor1">
                     {blogCategoriesData?.['مهارت های زندگی']?.map(item => (
                        <Link href="/" className="border-b-2 border-solid border-borderColor pb-2.5" key={item?.name}>
                           {item?.name}
                        </Link>
                     ))}
                  </div>
               </div>
            </div>
         </Dialog>

         <Dialog open={showMedicalModal} onClose={() => setShowMedicalModal(false)} top>
            <div className="min-w-[280px]">
               <div className="p-6">
                  <div className="flex items-center justify-between">
                     <p className="font-kalamehSemiBold600 text-xl leading-4 text-textColor1">سلامت و پزشکی</p>
                     <IconButton
                        sx={{ width: '25px', height: '25px', backgroundColor: '#2ED7FE80', padding: 0 }}
                        onClick={() => setShowMedicalModal(false)}
                     >
                        <GrFormClose size="20px" color="#000" />
                     </IconButton>
                  </div>

                  <div className="mt-30 flex flex-col gap-2.5 text-15 leading-6 text-textColor1">
                     {blogCategoriesData?.['سلامت و پزشکی']?.map(item => (
                        <Link href="/" className="border-b-2 border-solid border-borderColor pb-2.5" key={item?.name}>
                           {item?.name}
                        </Link>
                     ))}
                  </div>
               </div>
            </div>
         </Dialog>
      </div>
   );
}

export default MobileHeaderCategories;
