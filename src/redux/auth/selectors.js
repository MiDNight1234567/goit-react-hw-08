export const selectUserData = (state) => state.auth.userData;
export const selectUserToken = (state) => state.auth.token;
export const selectUserIsSignedIn = (state) => state.auth.isSignedIn;
export const selectUserIsRefreshing = (state) => state.auth.isRefreshing;
export const selectUserIsLoading = (state) => state.auth.isLoading;
export const selectUserIsError = (state) => state.auth.isError;
