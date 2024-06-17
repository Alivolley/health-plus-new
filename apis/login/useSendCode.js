import useSWRMutation from 'swr/mutation';
import { setCookie } from 'cookies-next';

// Redux
import { useDispatch } from 'react-redux';

import axiosInstance from '@/configs/axiosInstance';
import { changeToLoginTrue } from '@/redux/features/loginStatusSlice';

const useSendCode = () => {
   const dispatch = useDispatch();

   return useSWRMutation('account/verifyOtp', (url, data) =>
      axiosInstance.post(url, data.arg).then(res => {
         setCookie('healthPlus_accessToken', res?.data?.access, { maxAge: 60 * 60 * 24 * 365 });
         setCookie('healthPlus_refreshToken', res?.data?.refresh, { maxAge: 60 * 60 * 24 * 365 });
         setCookie('healthPlus_isLogin', true, { maxAge: 60 * 60 * 24 * 365 });
         dispatch(changeToLoginTrue());
         return res.data;
      })
   );
};

export default useSendCode;
