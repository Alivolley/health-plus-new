import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// MUI
import { Button, Fab, IconButton } from '@mui/material';

// Icons
import { CiSearch } from 'react-icons/ci';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Category, User } from 'iconsax-react';
import { RiUserLine } from 'react-icons/ri';

// Redux
import { useSelector } from 'react-redux';

// Assets
import logoPic from '@/assets/images/logo.png';

// Styles
import HeaderStyle from './header.style';

// Components
import MobileMenu from '../mobile-menu/mobile-menu';
import LoginModal from '@/components/template/login-modal/login-modal';

function Header() {
   const [showMobileMenu, setShowMobileMenu] = useState(false);
   const [showLoginModal, setShowLoginModal] = useState(false);
   const [isUserLogin, setIsUserLogin] = useState(false);

   const isLogin = useSelector(state => state?.loginStatusSlice);

   useEffect(() => {
      setIsUserLogin(isLogin);
   }, [isLogin]);

   const pathname = usePathname();

   const formSubmitHandler = e => {
      e.preventDefault();
   };

   return (
      <HeaderStyle className="fixed inset-x-0 top-0 z-10 bg-white px-eighteen pb-2 pt-eighteen customMd:px-[90px] customMd:py-[21px]">
         <div className="mx-auto max-w-[1260px]">
            <div className="flex items-center justify-between">
               <div className="hidden items-center gap-3 customLg:flex xl:gap-[37.5px]">
                  <Link href="/" className="relative block w-[106px]">
                     <Image src={logoPic} alt="logo" className="size-full" />
                  </Link>
                  <div className="flex items-center gap-3 xl:gap-[37.5px]">
                     <div id="dropdownWrapper">
                        <Link
                           href="/filter-medical-advice"
                           className={`flex items-center gap-1 text-15 transition-all duration-200 ${
                              pathname.startsWith('/filter-medical-advice') ? 'text-primaryBlue' : 'text-textColor2'
                           }`}
                           id="dropdownText"
                        >
                           مشاوره آنلاین
                           <MdOutlineKeyboardArrowDown id="dropdownArrow" className="transition-all duration-200" />
                        </Link>
                        <div
                           id="dropdownBox"
                           className="flex flex-col gap-5 rounded-10 border border-solid border-secondaryBlue bg-white p-5"
                        >
                           <Link
                              href="/filter-medical-advice"
                              className="flex items-center gap-[5px] whitespace-nowrap text-textColor2 transition-all duration-200 hover:text-primaryBlue"
                           >
                              <span className="mt-1 size-[5px] rounded-full bg-secondaryBlue" />
                              متخصص زنان و زایمان
                           </Link>
                           <Link
                              href="/filter-medical-advice"
                              className="flex items-center gap-[5px] whitespace-nowrap text-textColor2 transition-all duration-200 hover:text-primaryBlue"
                           >
                              <span className="mt-1 size-[5px] rounded-full bg-secondaryBlue" />
                              متخصص داخلی
                           </Link>
                           <Link
                              href="/filter-medical-advice"
                              className="flex items-center gap-[5px] whitespace-nowrap text-textColor2 transition-all duration-200 hover:text-primaryBlue"
                           >
                              <span className="mt-1 size-[5px] rounded-full bg-secondaryBlue" />
                              متخصص قلب و عروق
                           </Link>
                           <Link
                              href="/filter-medical-advice"
                              className="flex items-center gap-[5px] whitespace-nowrap text-textColor2 transition-all duration-200 hover:text-primaryBlue"
                           >
                              <span className="mt-1 size-[5px] rounded-full bg-secondaryBlue" />
                              متخصص پوست و مو
                           </Link>
                           <Link
                              href="/filter-medical-advice"
                              className="flex items-center gap-[5px] whitespace-nowrap text-textColor2 transition-all duration-200 hover:text-primaryBlue"
                           >
                              <span className="mt-1 size-[5px] rounded-full bg-secondaryBlue" />
                              متخصص روانپزشک
                           </Link>
                           <Link
                              href="/filter-medical-advice"
                              className="flex items-center gap-[5px] whitespace-nowrap text-textColor2 transition-all duration-200 hover:text-primaryBlue"
                           >
                              <span className="mt-1 size-[5px] rounded-full bg-secondaryBlue" />
                              متخصص جراج
                           </Link>
                           <Link
                              href="/filter-medical-advice"
                              className="flex items-center gap-[5px] whitespace-nowrap text-textColor2 transition-all duration-200 hover:text-primaryBlue"
                           >
                              <span className="mt-1 size-[5px] rounded-full bg-secondaryBlue" />
                              متخصص دندانپزشک
                           </Link>
                           <Link
                              href="/filter-medical-advice"
                              className="flex items-center gap-[5px] whitespace-nowrap text-textColor2 transition-all duration-200 hover:text-primaryBlue"
                           >
                              <span className="mt-1 size-[5px] rounded-full bg-secondaryBlue" />
                              متخصص مغز و اعصاب
                           </Link>
                           <Link
                              href="/filter-medical-advice"
                              className="flex items-center gap-[5px] whitespace-nowrap text-textColor2 transition-all duration-200 hover:text-primaryBlue"
                           >
                              <span className="mt-1 size-[5px] rounded-full bg-secondaryBlue" />
                              متخصص تغذیه
                           </Link>
                           <Link
                              href="/online-medical-advice"
                              className="flex items-center gap-[5px] whitespace-nowrap text-textColor2 transition-all duration-200 hover:text-primaryBlue"
                           >
                              <span className="mt-1 size-[5px] rounded-full bg-secondaryBlue" />
                              مشاهده تمام تخصص ها
                           </Link>
                        </div>
                     </div>
                     <Link
                        href="/appointment-list"
                        className={`text-15 transition-all duration-200 hover:text-primaryBlue ${
                           pathname.startsWith('/appointment-list') ? 'text-primaryBlue' : 'text-textColor2'
                        }`}
                     >
                        نوبت دهی
                     </Link>
                     <Link
                        href="/pharmacy"
                        className={`text-15 transition-all duration-200 hover:text-primaryBlue ${
                           pathname.startsWith('/pharmacy') ? 'text-primaryBlue' : 'text-textColor2'
                        }`}
                     >
                        داروخانه
                     </Link>
                     <div id="dropdownWrapper">
                        <Link
                           href="/visit-at-home"
                           className={`flex items-center gap-1 text-15 transition-all duration-200  ${
                              pathname.startsWith('/visit-at-home') ? 'text-primaryBlue' : 'text-textColor2'
                           }`}
                           id="dropdownText"
                        >
                           پزشک در منزل
                           <MdOutlineKeyboardArrowDown id="dropdownArrow" className="transition-all duration-200" />
                        </Link>
                        <div
                           id="dropdownBox"
                           className="flex flex-col gap-5 rounded-10 border border-solid border-secondaryBlue bg-white p-5"
                        >
                           <Link
                              href="/"
                              className="flex items-center gap-[5px] whitespace-nowrap text-textColor2 transition-all duration-200 hover:text-primaryBlue"
                           >
                              <span className="mt-1 size-[5px] rounded-full bg-secondaryBlue" />
                              ویزیت پزشک در منزل
                           </Link>
                           <Link
                              href="/"
                              className="flex items-center gap-[5px] whitespace-nowrap text-textColor2 transition-all duration-200 hover:text-primaryBlue"
                           >
                              <span className="mt-1 size-[5px] rounded-full bg-secondaryBlue" />
                              آزمایش در منزل
                           </Link>
                           <Link
                              href="/"
                              className="flex items-center gap-[5px] whitespace-nowrap text-textColor2 transition-all duration-200 hover:text-primaryBlue"
                           >
                              <span className="mt-1 size-[5px] rounded-full bg-secondaryBlue" />
                              پرستاری در منزل
                           </Link>
                        </div>
                     </div>
                     <Link
                        href="/"
                        className="text-15 text-textColor2 transition-all duration-200 hover:text-primaryBlue"
                     >
                        مجله سلامت
                     </Link>
                  </div>
               </div>

               <div className="customLg:hidden">
                  <Fab
                     color="primary"
                     sx={{ width: '21px', height: '21px', borderRadius: '6px' }}
                     onClick={() => setShowMobileMenu(true)}
                  >
                     <Category size="15" color="#FFf" />
                  </Fab>
               </div>
               <div className="customLg:hidden">
                  <Link href="/" className="relative block w-[138px]">
                     <Image src={logoPic} alt="logo" className="size-full" />
                  </Link>
               </div>
               <div className="customMd:hidden">
                  <Fab
                     color="primary"
                     sx={{ width: '21px', height: '21px', borderRadius: '6px' }}
                     onClick={() => setShowLoginModal(true)}
                  >
                     <User size="15" color="#FFf" />
                  </Fab>
               </div>

               <div className="hidden items-center gap-[22.5px] customMd:flex">
                  <form
                     className="flex h-[34px] min-w-[285px] items-center rounded-2xl bg-[#70707026] px-1"
                     onSubmit={formSubmitHandler}
                  >
                     <IconButton type="submit">
                        <CiSearch color="#70707080" />
                     </IconButton>
                     <input
                        type="text"
                        placeholder="جستجو پزشک یا خدمات پزشکی"
                        className="size-full border-none bg-transparent font-kalamehMedium500 outline-none placeholder:text-[#70707080]"
                     />
                  </form>

                  {isUserLogin ? (
                     <Link href="/">
                        <Button
                           variant="contained"
                           sx={{
                              color: 'white',
                              paddingX: '16px',
                              height: '34px',
                              borderRadius: '16px',
                              fontSize: '12px',
                           }}
                           startIcon={<RiUserLine className="!text-eighteen" />}
                        >
                           حساب کاربری من
                        </Button>
                     </Link>
                  ) : (
                     <Button
                        variant="contained"
                        sx={{
                           color: 'white',
                           paddingX: '16px',
                           height: '34px',
                           borderRadius: '16px',
                           fontSize: '12px',
                           gap: '7.5px',
                        }}
                        onClick={() => setShowLoginModal(true)}
                     >
                        ورود
                        <p>|</p>
                        ثبت نام
                     </Button>
                  )}
               </div>
            </div>
            <form
               className="mt-6 flex h-[43px] items-center rounded-lg bg-[#70707026] customMd:hidden"
               onSubmit={formSubmitHandler}
            >
               <IconButton type="submit">
                  <CiSearch color="#70707080" />
               </IconButton>
               <input
                  type="text"
                  placeholder="جستجو پزشک یا خدمات پزشکی"
                  className="size-full border-none bg-transparent font-kalamehMedium500 text-xs outline-none placeholder:text-[#70707080]"
               />
            </form>
         </div>
         <MobileMenu open={showMobileMenu} onClose={() => setShowMobileMenu(false)} />
         <LoginModal open={showLoginModal} onClose={() => setShowLoginModal(false)} />
      </HeaderStyle>
   );
}

export default Header;
