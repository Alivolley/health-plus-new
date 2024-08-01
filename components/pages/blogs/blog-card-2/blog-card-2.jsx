// Assets
import noImage from '@/assets/images/noImageBlogs.jpg';

function BlogCard2({ detail }) {
   return (
      <div
         style={{ backgroundImage: `url(${detail?.banner || noImage?.src})` }}
         className="rounded-10 bg-cover bg-center bg-no-repeat"
      >
         <div className="mt-15 flex h-[104px] flex-col justify-end overflow-hidden rounded-10 bg-gradient5 px-2.5 py-5">
            <p className="line-clamp-2 font-kalamehSemiBold600 text-15 leading-6 text-white">{detail?.title}</p>
            <p className="mt-2.5 font-DanaFaNum text-10 text-white customMd:mt-5 customMd:text-15">
               {detail?.created_at}
            </p>
         </div>
      </div>
   );
}

export default BlogCard2;
