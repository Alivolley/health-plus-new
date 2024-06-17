'use client';

import { useEffect, useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';

// MUI
import { Tabs, Tab } from '@mui/material';

// Components
import BackdropLoading from '../backdrop-loading/backdrop-loading';

function SortingTabs({ searchParams }) {
   const [sortingValue, setSortingValue] = useState(0);
   const [isPending, startTransition] = useTransition();

   const { push } = useRouter();

   useEffect(() => {
      setSortingValue(Number(searchParams?.order) || 0);
   }, [searchParams]);

   const changeTabHandler = (e, newValue) => {
      startTransition(() => {
         setSortingValue(newValue);

         const newSearchParams = { ...searchParams, order: newValue };
         const params = new URLSearchParams(newSearchParams).toString();
         push(`?${params}`, { scroll: false });
      });
   };

   return (
      <div>
         <Tabs value={sortingValue} onChange={changeTabHandler} variant="scrollable">
            <Tab label="پیش فرض" value={0} sx={{ fontSize: '20px', paddingY: '20px', lineHeight: '16px' }} />
            <Tab label="بیشترین امتیاز" value={1} sx={{ fontSize: '20px', paddingY: '20px', lineHeight: '16px' }} />
            <Tab label="نزدیک ترین نوبت" value={2} sx={{ fontSize: '20px', paddingY: '20px', lineHeight: '16px' }} />
            <Tab label="بیشترین نوبت موفق" value={3} sx={{ fontSize: '20px', paddingY: '20px', lineHeight: '16px' }} />
         </Tabs>

         <BackdropLoading open={isPending} />
      </div>
   );
}

export default SortingTabs;
