import AppLayout from '@/components/layout/app-layout/app-layout';
import './globals.css';
import './reset.css';

export default function RootLayout({ children }) {
   return (
      <html lang="fa">
         <body>
            <AppLayout>{children}</AppLayout>
         </body>
      </html>
   );
}
