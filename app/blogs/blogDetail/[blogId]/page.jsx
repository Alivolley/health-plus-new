function BlogDetail({ params }) {
   return (
      <div className="px-eighteen customMd:px-[90px]">
         <div className="mx-auto mt-[27px] max-w-[1260px] customMd:mt-[67px]">
            جزییات مقاله ی شماره ی {params?.blogId}
         </div>
      </div>
   );
}

export default BlogDetail;
