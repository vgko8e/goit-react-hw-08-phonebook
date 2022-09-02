export const getToken = state => state.auth.token;
export const getIsLogin = state => state.auth.isLoggedIn;
export const getUserName = state => state.auth.user.name;

export const getStatusFetch = state => state.auth.isFetching;
