'use client';

import toast, { ToastBar, Toaster } from 'react-hot-toast';

// MUI
import { IconButton } from '@mui/material';

// Icons
import { IoCloseOutline } from 'react-icons/io5';

function ToastComponent() {
   return (
      <Toaster
         position="top-right"
         toastOptions={{
            style: { fontFamily: 'kalamehMedium500', fontSize: '14px', direction: 'rtl' },
            duration: 4000,
         }}
      >
         {t => (
            <ToastBar toast={t}>
               {({ icon, message }) => (
                  <div className="flex items-center">
                     {icon}
                     {message}
                     {t.type !== 'loading' && (
                        <IconButton
                           onClick={() => toast.dismiss(t.id)}
                           className="!transition-all !duration-150 hover:!text-red-500"
                           size="small"
                        >
                           <IoCloseOutline />
                        </IconButton>
                     )}
                  </div>
               )}
            </ToastBar>
         )}
      </Toaster>
   );
}

export default ToastComponent;
