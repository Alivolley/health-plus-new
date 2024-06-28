'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';

// MUI
import { Pagination } from '@mui/material';

// Components
import BackdropLoading from '../backdrop-loading/backdrop-loading';

function PaginationComponent({ searchParams, totalPage }) {
   const { push } = useRouter();
   const pathName = usePathname();
   const [isPending, startTransition] = useTransition();

   const changePageHandler = (e, newValue) => {
      startTransition(() => {
         const newSearchParams = { ...searchParams, page: newValue };
         const params = new URLSearchParams(newSearchParams).toString();
         push(`${pathName}?${params}`);
      });
   };

   return (
      <>
         <Pagination
            variant="outlined"
            shape="rounded"
            count={totalPage}
            onChange={changePageHandler}
            page={Number(searchParams?.page) || 1}
         />

         <BackdropLoading open={isPending} />
      </>
   );
}

export default PaginationComponent;
