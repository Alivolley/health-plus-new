/* eslint-disable @next/next/no-img-element */

// Assets
import banner2Desktop from '@/assets/images/banner2Desktop.png';
import banner2Mobile from '@/assets/images/banner2Mobile.png';

function HomeBanner2() {
   return (
      <div className="px-eighteen pt-eighteen customMd:px-[90px] customMd:pt-[37px]">
         <div className="mx-auto max-w-[1260px]">
            <img src={banner2Desktop.src} alt="banner" className="w-full max-customMd:hidden" />
            <img src={banner2Mobile.src} alt="banner" className="w-full customMd:hidden" />
         </div>
      </div>
   );
}

export default HomeBanner2;
