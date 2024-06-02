import Link from 'next/link';

// MUI
import { Accordion, AccordionDetails, AccordionSummary, Breadcrumbs, Button, Grid, TextField } from '@mui/material';

// Icons
import { FiPlus } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';

// Components
import ChangeCategoryBox from '@/components/pages/visit-at-home/changeCategoryBox/changeCategoryBox';
import VisitAtHomeCart1 from '@/components/pages/visit-at-home/visit-at-home-cart1/visit-at-home-cart1';
import VisitAtHomeCart2 from '@/components/pages/visit-at-home/visit-at-home-cart2/visit-at-home-cart2';

function VisitAtHome({ searchParams }) {
   return (
      <div className="px-eighteen pb-[200px] customMd:px-[90px]">
         <div className="mx-auto max-w-[1260px]">
            <Breadcrumbs separator=">" className="max-customMd:hidden">
               {[
                  <Link
                     href="/"
                     key={1}
                     className="text-15 text-textColor2 transition-all duration-200 hover:text-black hover:underline"
                  >
                     صفحه اصلی
                  </Link>,
                  <Link
                     href="/visit-at-home"
                     key={2}
                     className="text-15 text-textColor2 transition-all duration-200 hover:text-black hover:underline"
                  >
                     ویزیت در منزل
                  </Link>,
               ]}
            </Breadcrumbs>
            <div
               className="max-customMd:rounded-lg max-customMd:py-[10px] customMd:mt-15 customMd:!shadow-none"
               style={{
                  boxShadow: '0px 0px 15px 0px #0000000D',
               }}
            >
               <p className="text-[20px] leading-8 text-primaryBlue max-customMd:text-center">ویزیت در منزل</p>
               <p className="mt-15 text-15 leading-7 text-textColor2 max-customMd:hidden">
                  حضور پزشکان امن و مطمئن زیر نظر هلث پلاس
               </p>
            </div>

            <div className="mt-5 flex flex-col items-stretch gap-5 customMd:mt-[30px] customMd:flex-row customMd:gap-[30px]">
               <p className="hidden w-[175px] items-center justify-center rounded-10 bg-[#2ED7FE0D] text-xl text-primaryBlue customMd:flex">
                  آدرس
               </p>
               <div className="customMd:grow">
                  <TextField
                     fullWidth
                     sx={{
                        '& > div': { borderRadius: '10px' },
                        input: { color: '#40404080' },
                     }}
                     inputProps={{ className: 'customMd:!text-xl' }}
                     placeholder="آدرس محل تحویل را وارد کنید"
                  />
               </div>
               <Button
                  startIcon={<FiPlus />}
                  variant="contained"
                  sx={{ paddingX: '37px', color: '#fff', borderRadius: '10px', fontSize: '15px' }}
                  className="max-customMd:h-[50px] customMd:!text-xl"
               >
                  آدرس جدید
               </Button>
            </div>

            <div className="mt-15 customMd:hidden">
               <Accordion
                  sx={{
                     boxShadow: 'none',
                     margin: '0 !important',
                     '.MuiButtonBase-root': {
                        minHeight: '0 !important',
                     },
                     '.MuiAccordionSummary-content': {
                        margin: '0 !important',
                     },
                     ':before': {
                        display: 'none !important',
                     },
                  }}
               >
                  <AccordionSummary
                     sx={{ backgroundColor: '#2ED7FE0D', borderRadius: '10px' }}
                     expandIcon={<IoIosArrowDown color="#2ED7FE" />}
                  >
                     <p className="py-5 font-kalamehSemiBold600 text-15 text-primaryBlue">پزشک عمومی</p>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div className="mt-5">
                        <ChangeCategoryBox searchParams={searchParams} />
                     </div>
                  </AccordionDetails>
               </Accordion>
            </div>

            <p
               className="mt-15 rounded-10 bg-[#2ED7FE0D] p-[10px] text-10 leading-[17px]
             text-textColor2 customMd:mt-[30px] customMd:p-5 customMd:text-[25px] customMd:leading-[42px]"
            >
               این سرویس برای موارد اورژانسی در نظر گرفته نشده است. لطفا در موارد اورژانسی با شماره تلفن (۱۱۵) تماس
               بگیرید. تزریق پنی سیلین، ترکیبات آهن و فاکتورهای انعقادی در منزل امکان‌پذیر نیست.
            </p>

            <div className="mt-15 customMd:mt-[60px] customMd:flex customMd:gap-[30px]">
               <aside className="h-fit w-[380px] shrink-0 max-customLg:hidden">
                  <div className="mb-[30px] rounded-10 bg-[#2ED7FE0D] p-[30px]">
                     <ChangeCategoryBox searchParams={searchParams} />
                  </div>

                  <Button
                     sx={{
                        height: '61px',
                        borderRadius: '10px',
                        backgroundColor: '#2ED7FE0D',
                        color: '#40404080',
                        fontSize: '20px',
                     }}
                     fullWidth
                  >
                     مشاهده و ثبت سفارش
                  </Button>
               </aside>
               <div className="customMd:grow">
                  <div className="mb-15 customMd:mb-[30px]">
                     {searchParams?.category === 'generalPractitioner' ? (
                        <div className="space-y-[5px] customMd:space-y-[30px]">
                           <VisitAtHomeCart2 />
                           <VisitAtHomeCart2 />
                           <VisitAtHomeCart2 />
                           <VisitAtHomeCart2 />
                        </div>
                     ) : (
                        <Grid container spacing={{ xs: '5px', md: '30px' }}>
                           <Grid item xs={6}>
                              <VisitAtHomeCart1 />
                           </Grid>
                           <Grid item xs={6}>
                              <VisitAtHomeCart1 />
                           </Grid>
                           <Grid item xs={6}>
                              <VisitAtHomeCart1 />
                           </Grid>
                           <Grid item xs={6}>
                              <VisitAtHomeCart1 />
                           </Grid>
                           <Grid item xs={6}>
                              <VisitAtHomeCart1 />
                           </Grid>
                           <Grid item xs={6}>
                              <VisitAtHomeCart1 />
                           </Grid>
                           <Grid item xs={6}>
                              <VisitAtHomeCart1 />
                           </Grid>
                        </Grid>
                     )}
                  </div>
                  <Button
                     sx={{
                        height: '61px',
                        borderRadius: '10px',
                        backgroundColor: '#2ED7FE0D',
                        color: '#40404080',
                        fontSize: '15px',
                     }}
                     fullWidth
                     className="customMd:!text-xl"
                  >
                     مشاهده و ثبت سفارش
                  </Button>
               </div>
            </div>
         </div>

         {/* <MapModal showMapModal={showMapModal} setShowMapModal={setShowMapModal} /> */}
      </div>
   );
}

export default VisitAtHome;
