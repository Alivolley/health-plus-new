import Image from 'next/image';

// Assets
import whyUsPic1 from '@/assets/images/whyUsPic1.png';
import whyUsPic2 from '@/assets/images/whyUsPic2.png';
import whyUsPic3 from '@/assets/images/whyUsPic3.png';

function WhyUs() {
   return (
      <div className="mt-[27px] px-eighteen customMd:mt-[90px] customMd:px-[90px]">
         <div className="mx-auto max-w-[1260px]">
            <div>
               <p className="text-center text-[19px] text-textColor1 max-customMd:hidden">چرا HealthPlus ؟</p>
               <p className="mt-[11px] text-center font-kalamehRegular400 text-[19px] text-textColor2 max-customMd:hidden">
                  ارائه خدمات مشاوره تلفنی و متنی
               </p>
               <p className="font-kalamehSemiBold600 text-sm text-textColor1 customMd:hidden">چرا HealthPlus ؟</p>
            </div>

            <div className="mt-[9px] flex flex-col gap-[9px] customMd:mt-[68px] customMd:flex-row customMd:gap-[23px]">
               <div
                  className="flex rounded-lg bg-[#2ED7FE1A] p-eighteen max-customMd:justify-between 
                customMd:flex-1 customMd:flex-col-reverse customMd:items-center customMd:rounded-[19px] customMd:p-[23px] customMd:pt-0"
               >
                  <div className="max-customMd:max-w-[150px]">
                     <p className="text-sm text-textColor1 customMd:text-center customMd:text-eighteen">امنیت بالا</p>
                     <p className="mt-[9px] text-10 leading-4 text-textColor2 customMd:text-center customMd:text-base">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                     </p>
                  </div>
                  <div className="size-[71px] customMd:mt-[-45px] customMd:size-[150px]">
                     <Image src={whyUsPic1} alt="icon" className="size-full" />
                  </div>
               </div>
               <div
                  className="flex rounded-lg bg-[#2ED7FE1A] p-eighteen max-customMd:justify-between 
                customMd:flex-1 customMd:flex-col-reverse customMd:items-center customMd:rounded-[19px] customMd:p-[23px] customMd:pt-0"
               >
                  <div className="max-customMd:max-w-[150px]">
                     <p className="text-sm text-textColor1 customMd:text-center customMd:text-eighteen">
                        مشاورین و پزشکان مجرب
                     </p>
                     <p className="mt-[9px] text-10 leading-4 text-textColor2 customMd:text-center customMd:text-base">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                     </p>
                  </div>
                  <div className="size-[71px] customMd:mt-[-45px] customMd:size-[150px]">
                     <Image src={whyUsPic2} alt="icon" className="size-full" />
                  </div>
               </div>
               <div
                  className="flex rounded-lg bg-[#2ED7FE1A] p-eighteen max-customMd:justify-between 
                customMd:flex-1 customMd:flex-col-reverse customMd:items-center customMd:rounded-[19px] customMd:p-[23px] customMd:pt-0"
               >
                  <div className="max-customMd:max-w-[150px]">
                     <p className="text-sm text-textColor1 customMd:text-center customMd:text-eighteen">
                        مشاورین و پزشکان مجرب
                     </p>
                     <p className="mt-[9px] text-10 leading-4 text-textColor2 customMd:text-center customMd:text-base">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                     </p>
                  </div>
                  <div className="size-[71px] customMd:mt-[-45px] customMd:size-[150px]">
                     <Image src={whyUsPic3} alt="icon" className="size-full" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default WhyUs;
