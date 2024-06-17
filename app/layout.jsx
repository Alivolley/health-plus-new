import AppLayout from '@/components/layout/app-layout/app-layout';
import '@/styles/globals.css';
import '@/styles/reset.css';

export default function RootLayout({ children }) {
   return (
      <html lang="fa" dir="rtl" className="font-kalamehMedium500">
         <body>
            <AppLayout>{children}</AppLayout>
         </body>
      </html>
   );
}
