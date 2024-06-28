'use client';

import { usePathname, useRouter } from 'next/navigation';

// MUI
import { Pagination } from '@mui/material';

function PaginationComponent({ searchParams, totalPage }) {
   const { push } = useRouter();
   const pathName = usePathname();

   const changePageHandler = (e, newValue) => {
      const newSearchParams = { ...searchParams, page: newValue };
      const params = new URLSearchParams(newSearchParams).toString();
      push(`${pathName}?${params}`);
   };

   return (
      <Pagination
         variant="outlined"
         shape="rounded"
         count={totalPage}
         onChange={changePageHandler}
         page={Number(searchParams?.page) || 1}
      />
   );
}

export default PaginationComponent;
