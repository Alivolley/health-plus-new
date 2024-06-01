// Components
import HomeBanner1 from '@/components/pages/home/home-banner1/home-banner1';
import HomeBanner2 from '@/components/pages/home/home-banner2/home-banner2';
import HomeCounseling from '@/components/pages/home/home-counseling/home-counseling';
import NewestBlogs from '@/components/pages/home/newest-blogs/newest-blogs';
import SuggestedDoctors from '@/components/pages/home/suggested-doctors/suggested-doctors';
import SuggestedPsychologists from '@/components/pages/home/suggested-psychologists/suggested-psychologists';
import WhyUs from '@/components/pages/home/why-us/why-us';

export default function Home() {
   return (
      <div className="pb-[25px] customMd:pb-[150px]">
         <HomeBanner1 />
         <SuggestedDoctors />
         <HomeCounseling />
         <SuggestedPsychologists />
         <HomeBanner2 />
         <NewestBlogs />
         <WhyUs />
      </div>
   );
}
