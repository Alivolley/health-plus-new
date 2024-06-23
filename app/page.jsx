// Components
import HomeBanner1 from '@/components/pages/home/home-banner1/home-banner1';
import HomeBanner2 from '@/components/pages/home/home-banner2/home-banner2';
import HomeCounseling from '@/components/pages/home/home-counseling/home-counseling';
import NewestBlogs from '@/components/pages/home/newest-blogs/newest-blogs';
import SuggestedDoctors from '@/components/pages/home/suggested-doctors/suggested-doctors';
import SuggestedPsychologists from '@/components/pages/home/suggested-psychologists/suggested-psychologists';
import WhyUs from '@/components/pages/home/why-us/why-us';

export default async function Home() {
   const suggestedDoctorsRequest = await fetch(`${process?.env?.NEXT_PUBLIC_API_BASE_URL}doctor/suggested`, {
      next: { revalidate: 60 },
   });
   const suggestedDoctorsData = await suggestedDoctorsRequest?.json();

   const suggestedBlogsRequest = await fetch(`${process?.env?.NEXT_PUBLIC_API_BASE_URL}journal/suggested`, {
      next: { revalidate: 60 },
   });
   const suggestedBlogsData = await suggestedBlogsRequest?.json();

   console.log(suggestedBlogsData);

   return (
      <div className="pb-[25px] customMd:pb-[150px]">
         <HomeBanner1 />
         <SuggestedDoctors detail={suggestedDoctorsData} />
         <HomeCounseling />
         <SuggestedPsychologists detail={suggestedDoctorsData} />
         <HomeBanner2 />
         <NewestBlogs detail={suggestedBlogsData} />
         <WhyUs />
      </div>
   );
}
