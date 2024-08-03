'use client';

import styled from '@emotion/styled';

const BlogDetailStyle = styled.section(() => ({
   '#content': {
      'b, strong, i, em, u, s, sub, sup, code, kbd, mark, h1, h2, h3, h4, h5, h6, ul, ol, li, a, img, figure, figcaption, video, audio, table, thead, tbody, tfoot, tr, th, td, p, div, blockquote, pre, form, input, textarea, button, select, option, label, section, article, nav, aside, header, footer, main, title, meta, link, style, script, hr, br, span, details, summary, nbsp, lt, gt, amp, quot, apos':
         {
            all: 'revert',
            lineHeight: '24px',
         },

      img: {
         display: 'block',
         maxWidth: '100%',
         height: 'fit-content',
         borderRadius: '10px',
      },

      p: {
         color: '#40404080',
      },
   },
}));

export default BlogDetailStyle;
