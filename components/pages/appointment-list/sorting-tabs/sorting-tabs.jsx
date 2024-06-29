'use client';

import { useEffect, useState, useTransition } from 'react';
import { usePathname, useRouter } from 'next/navigation';

// MUI
import { Tab, Tabs } from '@mui/material';

// Components
import BackdropLoading from '@/components/template/backdrop-loading/backdrop-loading';

function SortingTabs({ searchParams }) {
   const [sortingValue, setSortingValue] = useState('default');
   const [isPending, startTransition] = useTransition();

   const { push } = useRouter();
   const pathName = usePathname();

   useEffect(() => {
      setSortingValue(searchParams?.ordering || 'default');
   }, [searchParams]);

   const changeTabHandler = (e, newValue) => {
      startTransition(() => {
         setSortingValue(newValue);

         const newSearchParams = { ...searchParams, ordering: newValue };
         const params = new URLSearchParams(newSearchParams).toString();
         push(`${pathName}?${params}`, { scroll: false });
      });
   };

   return (
      <div>
         <Tabs value={sortingValue} onChange={changeTabHandler} variant="scrollable">
            <Tab label="پیش فرض" value="default" sx={{ fontSize: '20px', paddingY: '20px', lineHeight: '16px' }} />
            <Tab
               label="بیشترین امتیاز"
               value="most score"
               sx={{ fontSize: '20px', paddingY: '20px', lineHeight: '16px' }}
            />
            <Tab
               label="نزدیک ترین نوبت"
               value="first visit"
               sx={{ fontSize: '20px', paddingY: '20px', lineHeight: '16px' }}
            />
            <Tab
               label="بیشترین نوبت موفق"
               value="most visit"
               sx={{ fontSize: '20px', paddingY: '20px', lineHeight: '16px' }}
            />
         </Tabs>

         <BackdropLoading open={isPending} />
      </div>
   );
}

export default SortingTabs;
