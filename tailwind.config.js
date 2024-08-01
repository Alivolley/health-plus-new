/** @type {import('tailwindcss').Config} */
module.exports = {
   corePlugins: {
      preflight: false,
   },

   content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         '@layer base': {
            button: [],
         },

         screens: {
            customXs: '350px',
            customSm: '600px',
            customMd: '900px',
            customLg: '1200px',
            customXl: '1400px',
         },

         colors: {
            primaryBlue: '#2ED7FE',
            secondaryBlue: '#2ED7FE80',
            textColor1: '#404040',
            textColor2: '#40404080',
            textColor3: '#404040BF',
            borderColor: '#40404040',
            searchColor: '#707070',
            pinkColor: '#FE639B',
            borderColor2: '#D9D9D9',
         },

         fontFamily: {
            kalamehThin100: 'kalamehThin100',
            kalamehExtraLight200: 'kalamehExtraLight200',
            kalamehLight300: 'kalamehLight300',
            kalamehRegular400: 'kalamehRegular400',
            kalamehMedium500: 'kalamehMedium500',
            kalamehSemiBold600: 'kalamehSemiBold600',
            kalamehBold700: 'kalamehBold700',
            kalamehExtraBold800: 'kalamehExtraBold800',
            kalamehBlack900: 'kalamehBlack900',
            DanaFaNum: 'DanaFaNum',
         },
         borderRadius: {
            8: '8px',
            10: '10px',
            15: '15px',
            20: '20px',
         },
         fontSize: {
            10: '10px',
            eighteen: '18px',
            15: '15px',
         },
         padding: {
            eighteen: '18px',
            15: '15px',
         },
         margin: {
            eighteen: '18px',
            15: '15px',
         },
         gap: {
            30: '30px',
         },
         spacing: {
            30: '30px',
            90: '90px',
         },
         backgroundImage: {
            gradient1: 'linear-gradient(180deg, rgba(46, 179, 254, 0.8) 0.01%, rgba(0, 35, 75, 0.8) 100%)',
            gradient2: 'linear-gradient(180deg, rgba(79, 158, 139, 0.8) 0%, rgba(55, 68, 87, 0.8) 100%)',
            gradient3: 'linear-gradient(180deg, rgba(171, 141, 75, 0.8) 0%, rgba(88, 29, 50, 0.8) 100%)',
            gradient4: 'linear-gradient(180deg, rgba(46, 215, 254, 0.4) 0%, rgba(55, 68, 87, 0.8) 100%)',
            gradient5: 'linear-gradient(180deg, rgba(46, 215, 254, 0.375) 0%, rgba(64, 64, 64, 0.75) 100%)',
            gradient6: 'linear-gradient(180deg, rgba(64, 64, 64, 0.225) -47.24%, rgba(0, 147, 181, 0.9) 100%)',
            gradient7: 'linear-gradient(rgba(0, 35, 75, 0.75),rgba(0, 35, 75, 0.75))',
            gradient8: 'linear-gradient(rgba(55, 73, 87, 0.6),rgba(55, 73, 87, 0.6))',
            gradient9: 'linear-gradient(rgba(64, 64, 64, 0.6),rgba(64, 64, 64, 0.6))',
         },
         boxShadow: {
            normal: '0 0 15px rgba(0,0,0,5%)',
         },
         transitionDuration: {
            400: '400ms',
         },
      },
   },
   plugins: [],
};
