import Link from 'next/link';

// Icons
import { ArrowDown2 } from 'iconsax-react';

// Components
import MobileHeaderCategories from '../mobile-header-categories/mobile-header-categories';

function DropDownCategories({ detail }) {
   return (
      <div className="relative mt-4 customMd:mt-30">
         <MobileHeaderCategories blogCategoriesData={detail} />

         <div className="hidden grid-cols-4 gap-x-5 customMd:grid customMd:gap-x-30">
            <div className="group h-[62px] rounded-[5px] bg-primaryBlue/5 transition-all duration-400 hover:bg-primaryBlue customMd:h-[61px] customMd:rounded-10">
               <div className="flex size-full cursor-pointer items-center justify-center gap-x-[5px] text-center">
                  <p className="text-xs text-primaryBlue transition-all duration-400 group-hover:text-white customMd:text-xl">
                     سلامت و پزشکی
                  </p>
                  <div
                     className="hidden items-center justify-center text-primaryBlue transition-all duration-200
                     group-hover:rotate-180 group-hover:text-white customMd:flex"
                  >
                     <ArrowDown2 />
                  </div>
               </div>

               <div
                  className="invisible absolute inset-x-0 top-[61px] z-[2] hidden pt-30 opacity-0
                  transition-all duration-400 group-hover:visible group-hover:opacity-100 customMd:block"
               >
                  <div
                     className="grid grid-cols-3 gap-x-9 gap-y-10 rounded-20 border
                     border-solid border-primaryBlue/50 bg-white px-[56px] py-30"
                     style={{ boxShadow: '0px 0px 10px 0px #00000033' }}
                  >
                     {detail?.['سلامت و پزشکی']?.map(item => (
                        <div key={item?.name} className="flex border-b-2 border-solid border-borderColor">
                           <Link
                              href={`/blogs/categoryDetail/${item?.name}`}
                              className="-mb-0.5 border-b-2 border-solid border-borderColor/0 pb-2.5
                              text-xl text-textColor1 transition-all duration-200 hover:border-primaryBlue hover:text-primaryBlue"
                           >
                              {item?.name}
                           </Link>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            <div
               className="group relative h-[62px] rounded-[5px] bg-primaryBlue/5 transition-all duration-400
               hover:bg-primaryBlue customMd:h-[61px] customMd:rounded-10"
            >
               <div className="flex size-full cursor-pointer items-center justify-center gap-x-[5px] text-center">
                  <p className="text-xs text-primaryBlue transition-all duration-400 group-hover:text-white customMd:text-xl">
                     مهارت های زندگی
                  </p>
                  <div
                     className="hidden items-center justify-center text-primaryBlue transition-all duration-200
                     group-hover:rotate-180 group-hover:text-white customMd:flex"
                  >
                     <ArrowDown2 />
                  </div>
               </div>

               <div
                  className="invisible absolute inset-x-0 top-[61px] hidden max-w-[205px] pt-30 opacity-0
                  transition-all duration-400 group-hover:visible group-hover:opacity-100 customMd:block"
               >
                  <div
                     style={{ boxShadow: '0px 0px 10px 0px #00000033' }}
                     className="space-y-5 rounded-20 border border-solid border-primaryBlue/50 bg-white p-5 customLg:left-1/3"
                  >
                     {detail?.['مهارت های زندگی']?.map(item => (
                        <Link
                           href="/"
                           className="flex items-center gap-x-[5px] text-textColor1/50 transition-all hover:text-textColor1"
                           key={item?.name}
                        >
                           <div className="size-[5px] justify-start rounded-full bg-primaryBlue" />
                           <p className="font-kalamehRegular400 text-15">{item?.name}</p>
                        </Link>
                     ))}
                  </div>
               </div>
            </div>

            <Link
               href="/"
               className="flex h-[62px] items-center justify-center rounded-[5px] bg-primaryBlue/5 text-center align-middle text-xs
               text-primaryBlue transition-all duration-300 hover:bg-primaryBlue hover:text-white customMd:h-[61px] customMd:rounded-10 customMd:text-xl"
            >
               مقالات ویروس کرونا
            </Link>

            <div
               className="group relative h-[62px] rounded-[5px] bg-primaryBlue/5 transition-all duration-400
            hover:bg-primaryBlue customMd:h-[61px] customMd:rounded-10"
            >
               <div className="flex size-full cursor-pointer items-center justify-center gap-x-[5px] text-center">
                  <p className="text-xs text-primaryBlue transition-all duration-400 group-hover:text-white customMd:text-xl">
                     هلث پلاس
                  </p>
                  <div
                     className="hidden items-center justify-center text-primaryBlue transition-all duration-200
                     group-hover:rotate-180 group-hover:text-white customMd:flex"
                  >
                     <ArrowDown2 />
                  </div>
               </div>

               <div
                  className="invisible absolute inset-x-0 top-[61px] hidden max-w-[205px] pt-30 opacity-0
                  transition-all duration-400 group-hover:visible group-hover:opacity-100 customMd:block"
               >
                  <div
                     style={{ boxShadow: '0px 0px 10px 0px #00000033' }}
                     className="space-y-5 rounded-20 border border-solid border-primaryBlue/50 bg-white p-5 customLg:left-1/3"
                  >
                     <Link
                        href="/"
                        className="flex items-center gap-x-[5px] text-textColor1/50 transition-all hover:text-textColor1"
                     >
                        <div className="size-[5px] justify-start rounded-full bg-primaryBlue" />
                        <p className="font-kalamehRegular400 text-15">بازگشت به سایت</p>
                     </Link>
                     <Link
                        href="/"
                        className="flex items-center gap-x-[5px] text-textColor1/50 transition-all hover:text-textColor1"
                     >
                        <div className="size-[5px] justify-start rounded-full bg-primaryBlue" />
                        <p className="font-kalamehRegular400 text-15">درباره هلث پلاس</p>
                     </Link>
                     <Link
                        href="/"
                        className="flex items-center gap-x-[5px] text-textColor1/50 transition-all hover:text-textColor1"
                     >
                        <div className="size-[5px] justify-start rounded-full bg-primaryBlue" />
                        <p className="font-kalamehRegular400 text-15">تماس با هلث پلاس</p>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default DropDownCategories;
