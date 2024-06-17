// MUI
import { Backdrop, LinearProgress } from '@mui/material';

function BackdropLoading({ open }) {
   return (
      <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={open}>
         <div className="rounded-10 bg-[#000000a2] p-5">
            <div className="mt-1 w-20">
               <LinearProgress sx={{ height: '6px' }} />
            </div>
         </div>
      </Backdrop>
   );
}

export default BackdropLoading;
