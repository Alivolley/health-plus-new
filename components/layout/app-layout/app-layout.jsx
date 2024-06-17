'use client';

import { usePathname } from 'next/navigation';

// MUI
import { ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

// Redux
import Providers from '@/redux/providers';

// Configs
import themeConfig from '@/configs/themeConfig';

// Components
import LoadingComponent from '@/components/template/loading-component/loading-component';
import ToastComponent from '@/components/template/toast-component/toast-component';
import RtlProvider from '../rtlProvider/rtlProvider';
import Header from '../header/header';
import Footer from '../footer/footer';

function AppLayout({ children }) {
   const pathname = usePathname();

   return (
      <Providers>
         <AppRouterCacheProvider>
            <ThemeProvider theme={themeConfig}>
               <ToastComponent />
               <LoadingComponent />
               <div>
                  <RtlProvider>
                     {pathname !== '/login' && <Header />}
                     <main className="mt-[135px] customMd:mt-[150px]">{children}</main>
                     {pathname !== '/login' && <Footer />}
                  </RtlProvider>
               </div>
            </ThemeProvider>
         </AppRouterCacheProvider>
      </Providers>
   );
}

export default AppLayout;
