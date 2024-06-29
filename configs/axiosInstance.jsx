/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-globals */
import axios from 'axios';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import toast from 'react-hot-toast';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

const axiosInstance = axios.create({
   baseURL,
});

axiosInstance.interceptors.request.use(
   config => {
      const accessToken = getCookie('healthPlus_accessToken');

      if (accessToken) {
         config.headers.Authorization = `Bearer ${accessToken}`;
      }

      return config;
   },
   error => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
   res => {
      if (res?.data?.message || res?.data?.detail) {
         toast.success(res?.data?.message || res?.data?.detail);
      }

      return res;
   },
   async error => {
      console.log(error);
      const refreshToken = getCookie('healthPlus_refreshToken');
      const originalReq = error.config;

      if (error?.response?.data?.detail === 'Given token not valid for any token type') {
         // access expired
         if (refreshToken) {
            const res = await axiosInstance.post('/account/refreshToken', {
               refresh: refreshToken,
            });
            setCookie('healthPlus_accessToken', res.data.access, { maxAge: 60 * 60 * 24 * 365 });
            originalReq.headers.Authorization = `Bearer ${res.data.access}`;
            return axiosInstance(originalReq);
         }
         deleteCookie('healthPlus_accessToken');
         deleteCookie('healthPlus_refreshToken');
         deleteCookie('healthPlus_isLogin');
         toast.error('لطفا ابتدا وارد حساب کاربری خود شوید');
      } else if (error?.response?.data?.detail === 'Token is invalid or expired') {
         // refresh expired
         deleteCookie('healthPlus_accessToken');
         deleteCookie('healthPlus_refreshToken');
         deleteCookie('healthPlus_isLogin');
         toast.error('لطفا ابتدا وارد حساب کاربری خود شوید');
      } else if (error?.response?.data?.message || error?.response?.data?.detail) {
         toast.error(error?.response?.data?.message || error?.response?.data?.detail);
      }

      return Promise.reject(error);
   }
);

export default axiosInstance;
