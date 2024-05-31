const getDesignTokens = mode => ({
   direction: 'rtl',

   typography: {
      fontFamily: 'kalamehMedium500',
   },

   palette: {
      mode,

      primary: {
         main: '#2ED7FE',
      },
   },

   components: {
      MuiButton: {
         styleOverrides: {
            root: () => ({
               boxShadow: 'none',
               textTransform: 'none',
               padding: 0,
               minWidth: 0,
               borderRadius: 0,
               '&:hover': {
                  boxShadow: 'none',
               },
            }),
         },
      },

      MuiDialog: {
         styleOverrides: {
            root: props => ({
               fontFamily: 'kalamehMedium500',
               ...(props.top && { '& .MuiDialog-container': { alignItems: 'start' } }),
            }),
         },
      },

      MuiDrawer: {
         styleOverrides: {
            root: {
               fontFamily: 'kalamehMedium500',
            },
         },
      },

      MuiFab: {
         styleOverrides: {
            root: {
               boxShadow: 'none',
               zIndex: 1,
               padding: 0,
               minWidth: 0,
               borderRadius: 0,
               minHeight: 0,
               width: 'auto',
               height: 'auto',
            },
         },
      },

      MuiTab: {
         styleOverrides: {
            root: props => ({
               ...(props['aria-selected']
                  ? {
                       color: '#404040 !important',
                    }
                  : {
                       color: '#40404080 !important',
                    }),
            }),
         },
      },

      MuiPaginationItem: {
         styleOverrides: {
            root: {
               backgroundColor: '#2ED7FE0D',
               border: 'none',
               color: '#2ED7FE',
               fontFamily: 'DanaFaNum',

               '&.Mui-selected': {
                  backgroundColor: '#2ED7FE',
                  color: '#fff',
               },
            },
         },
      },
   },
});

export default getDesignTokens;
