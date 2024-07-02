'use client';

// MUI
import { CircularProgress } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Icons
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

// Components
import CommentItem from '@/components/template/comment-item/comment-item';

// Apis
import useGetComments from '@/apis/comments/useGetComments';

function DoctorComments({ doctorId }) {
   const {
      //   mutate: commentsMutate,
      data: commentsData,
      isLoading: commentsIsLoading,
      size: commentsSize,
      setSize: commentsSetSize,
      isValidating: commentsIsValidating,
   } = useGetComments(doctorId);

   return (
      <div className="mt-15 customMd:mt-[30px]">
         {commentsIsLoading ? (
            <div className="flex items-center justify-center">
               <CircularProgress />
            </div>
         ) : (
            <div className="flex flex-col gap-[15px] customMd:gap-[30px]">
               {commentsData?.map(item =>
                  item?.data?.map(innerItem => <CommentItem key={item?.id} detail={innerItem} />)
               )}

               {commentsData?.[Number(commentsData?.length) - 1]?.has_next_page && (
                  <div className="flex justify-end">
                     <LoadingButton
                        className="customMd:!text-15"
                        sx={{ fontSize: '10px' }}
                        endIcon={<MdOutlineKeyboardArrowDown />}
                        onClick={() => commentsSetSize(commentsSize + 1)}
                        loading={commentsIsValidating}
                     >
                        نمایش نظرات بیشتر به کاربران
                     </LoadingButton>
                  </div>
               )}
            </div>
         )}
      </div>
   );
}

export default DoctorComments;
