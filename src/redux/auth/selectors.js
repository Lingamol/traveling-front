export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectUser = (state) => state.auth.user;

export const selectIsRefreshing = (state) => state.auth.isRefreshing;

export const selectAuthError = (state) => state.auth.authError;
export const selectAuthIsLoading = (state) => state.auth.authIsLoading;
