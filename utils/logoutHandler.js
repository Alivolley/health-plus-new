import { deleteCookie } from 'cookies-next';

const logoutHandler = () => {
   deleteCookie('healthPlus_accessToken');
   deleteCookie('healthPlus_refreshToken');
   deleteCookie('healthPlus_isLogin');
   window.location.reload();
};

export default logoutHandler;
