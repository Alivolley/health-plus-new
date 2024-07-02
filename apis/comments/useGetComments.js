import useSWRInfinite from 'swr/infinite';
import axiosInstance from '@/configs/axiosInstance';

const getKey = pageIndex => {
   if (pageIndex === 0) {
      return `doctor/doctorComments`;
   }

   return `doctor/doctorComments?page=${pageIndex + 1}`;
};

const useGetComments = doctorId =>
   useSWRInfinite(getKey, url =>
      axiosInstance(url, {
         params: {
            dr_id: doctorId,
         },
      }).then(res => res.data)
   );

export default useGetComments;
