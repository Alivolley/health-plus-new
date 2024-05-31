'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

function LoadingComponent() {
   return <ProgressBar height="4px" color="#2ED7FE" options={{ showSpinner: false }} />;
}

export default LoadingComponent;
