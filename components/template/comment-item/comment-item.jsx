// Icons
import { FaUser, FaStar } from 'react-icons/fa6';
import { BsFillCalendarWeekFill } from 'react-icons/bs';
import { HiOutlineEmojiHappy, HiOutlineEmojiSad } from 'react-icons/hi';

function CommentItem({ detail }) {
   return (
      <div className="rounded-10 border border-solid border-primaryBlue bg-white p-15 customMd:p-[30px]">
         <div className="flex justify-between">
            <div>
               <div className="flex items-center gap-[10px]">
                  <FaUser color="#2ED7FE" size="20px" />
                  <p className="text-15 text-textColor3 customMd:text-xl">{detail?.writer}</p>
               </div>
               <div className="mt-[10px] flex items-center gap-[10px] customMd:mt-5">
                  <BsFillCalendarWeekFill color="#2ED7FE" size="20px" />
                  <p className="font-DanaFaNum text-sm font-bold text-textColor2 customMd:text-xl">
                     {detail?.created_at}
                  </p>
               </div>
            </div>
            <div className="flex flex-col items-center gap-[10px] customMd:flex-row-reverse customMd:items-start customMd:gap-5">
               <p
                  className="flex h-5 items-center gap-[10px] rounded-[3px] bg-[#FFAF031A] px-[17px] font-DanaFaNum text-10
                  font-bold text-[#FFAF03] customMd:h-10 customMd:rounded-[5px] customMd:px-[37px] customMd:text-lg"
               >
                  {detail?.score} <FaStar className="pb-1" />
               </p>
               <p className="flex h-5 items-center rounded-[5px] text-10 text-primaryBlue customMd:h-10 customMd:bg-[#2ED7FE0D] customMd:px-[17px] customMd:text-15">
                  {detail?.service}
               </p>
            </div>
         </div>
         <div
            className={`mt-[10px] flex items-center gap-[10px] text-15 customMd:mt-[19px] customMd:text-xl ${
               detail?.is_suggest ? 'text-[#4EE292]' : 'text-[#FE639B]'
            }`}
         >
            {detail?.is_suggest ? <HiOutlineEmojiHappy /> : <HiOutlineEmojiSad />}
            <p>{detail?.is_suggest ? 'این پزشک را پیشنهاد میکنم' : 'این پزشک را پیشنهاد نمیکنم'}</p>
         </div>
         <p className="mt-[10px] text-15 leading-5 text-textColor3 customMd:mt-[36px] customMd:text-xl">
            {detail?.text}
         </p>
      </div>
   );
}

export default CommentItem;
