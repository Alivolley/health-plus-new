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
            10: '10px',
            15: '15px',
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
      },
   },
   plugins: [],
};
