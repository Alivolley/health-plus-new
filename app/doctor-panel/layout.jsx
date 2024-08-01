function DoctorPanelLayout({ children }) {
   return (
      <div>
         <header
            className="sticky top-0 bg-white pt-15 max-customMd:!shadow-none customMd:py-7"
            style={{ boxShadow: '0px 3px 3.75px 0px #0000001A' }}
         >
            <div className="px-eighteen customMd:hidden">
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-4">
                     <div className="size-5 bg-primaryBlue" />
                     <h3 className="font-kalamehSemiBold600 text-15">پنل پزشکی</h3>
                  </div>
                  <div className="flex gap-x-4">
                     <div className="size-5 bg-primaryBlue" />
                     <div className="size-5 bg-primaryBlue" />
                  </div>
               </div>
               <div className="mt-6 flex h-11 w-full items-center gap-x-2 rounded-md bg-searchColor/15 text-searchColor/50">
                  <div className="mr-2 size-5 bg-primaryBlue" />
                  <p className="font-kalamehMedium500 text-10">جستجو پزشک یا خدمات پزشکی</p>
               </div>
            </div>
            <div className="mx-auto flex max-w-[1260px] items-center justify-between px-[90px] max-customMd:hidden">
               <div className="flex items-center gap-x-2.5">
                  <div className="size-5 bg-primaryBlue" />
                  <h3 className="font-kalamehSemiBold600 text-15 text-textColor1">داشبورد پزشکی</h3>
               </div>
               <div className="">logo</div>
               <div className="flex gap-x-7">
                  <div className="size-5 bg-primaryBlue" />
                  <div className="size-5 bg-primaryBlue" />
               </div>
            </div>
         </header>

         <section>{children}</section>
      </div>
   );
}

export default DoctorPanelLayout;
