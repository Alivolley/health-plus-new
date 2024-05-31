const logoutHandler = () => {
   // Cookies.remove('yalfan_accessToken');
   // Cookies.remove('yalfan_refreshToken');
   // Cookies.remove('yalfan_isLogin');
   window.location.reload();
};

export default logoutHandler;
