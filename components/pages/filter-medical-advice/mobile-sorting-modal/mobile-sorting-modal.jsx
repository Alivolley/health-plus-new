import { useEffect, useState, useTransition } from 'react';

// MUI
import { Button, IconButton } from '@mui/material';

// Icons
import { GrFormClose } from 'react-icons/gr';
import { usePathname, useRouter } from 'next/navigation';

// Components
import BackdropLoading from '@/components/template/backdrop-loading/backdrop-loading';

const filterBtnSx = { backgroundColor: '#4040400D', height: '40px', paddingX: '10px', borderRadius: '5px' };

function MobileSortingModal({ setShowSortingMobile, searchParams }) {
   const [sortingType, setSortingType] = useState('');
   const [isPending, startTransition] = useTransition();

   const { push } = useRouter();
   const pathName = usePathname();

   useEffect(() => {
      setSortingType(searchParams?.ordering || 'default');
   }, [searchParams]);

   const changeSortingHandler = () => {
      startTransition(() => {
         const newSearchParams = { ...searchParams, ordering: sortingType };
         const params = new URLSearchParams(newSearchParams).toString();
         push(`${pathName}?${params}`, { scroll: false });
         setShowSortingMobile(false);
      });
   };

   return (
      <div className="p-[30px]">
         <div className="flex items-center justify-between">
            <p className="font-kalamehSemiBold600 text-xl leading-4 text-textColor1">ترتیب نمایش</p>

            <IconButton
               sx={{ width: '25px', height: '25px', backgroundColor: '#2ED7FE80', padding: 0 }}
               onClick={() => setShowSortingMobile(false)}
            >
               <GrFormClose size="20px" color="#000" />
            </IconButton>
         </div>

         <div className="mt-[35px] space-y-[10px]">
            <Button fullWidth sx={filterBtnSx} onClick={() => setSortingType('default')}>
               <div className="flex w-full items-center justify-between text-textColor2">
                  <p className="text-15">پیش فرض</p>
                  <span
                     className={`size-[15px] rounded-full transition-all duration-200 ${sortingType === 'default' ? 'bg-primaryBlue' : 'bg-[#40404033]'}`}
                  />
               </div>
            </Button>
            <Button fullWidth sx={filterBtnSx} onClick={() => setSortingType('most score')}>
               <div className="flex w-full items-center justify-between text-textColor2">
                  <p className="text-15">بیشترین امتیاز</p>
                  <span
                     className={`size-[15px] rounded-full transition-all duration-200 ${sortingType === 'most score' ? 'bg-primaryBlue' : 'bg-[#40404033]'}`}
                  />
               </div>
            </Button>
            <Button fullWidth sx={filterBtnSx} onClick={() => setSortingType('first visit')}>
               <div className="flex w-full items-center justify-between text-textColor2">
                  <p className="text-15">نزدیک ترین نوبت</p>
                  <span
                     className={`size-[15px] rounded-full transition-all duration-200 ${sortingType === 'first visit' ? 'bg-primaryBlue' : 'bg-[#40404033]'}`}
                  />
               </div>
            </Button>
            <Button fullWidth sx={filterBtnSx} onClick={() => setSortingType('most visit')}>
               <div className="flex w-full items-center justify-between text-textColor2">
                  <p className="text-15">بیشترین نوبت موفق</p>
                  <span
                     className={`size-[15px] rounded-full transition-all duration-200 ${sortingType === 'most visit' ? 'bg-primaryBlue' : 'bg-[#40404033]'}`}
                  />
               </div>
            </Button>
         </div>

         <div className="mt-[60px]">
            <Button
               fullWidth
               variant="contained"
               sx={{
                  borderRadius: '5px',
                  height: '40px',
                  color: 'white',
                  fontSize: '15px',
                  fontFamily: 'kalamehSemiBold600',
               }}
               onClick={changeSortingHandler}
            >
               تایید
            </Button>
         </div>

         <BackdropLoading open={isPending} />
      </div>
   );
}

export default MobileSortingModal;
