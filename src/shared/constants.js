export const EVENTS = {
  CLIENT: {
    LOGIN: 'auth:loginUser',
    RESET_PASSWORD: 'auth:resetPasswordUser',
    OTP_VALIDATE: 'auth:otpValidate',

    GET_USERS_ME: 'users:getUsersMe',
  },
  SERVER: {
    LOGIN_SUCCESS: 'auth:successAuthUser',
    LOGIN_FAIL: 'auth:failAuthUser',
    RESET_SUCCESS: 'auth:successResetPasswordUser',
    RESET_FAIL: 'auth:failResetPasswordUser',
    OTP_SUCCESS: 'auth:successOtpUser',
    OTP_FAIL: 'auth:novalidOtpUser',

    GET_USERS_ME_SUCCESS: 'users:successGetUsersMe',
    GET_USERS_ME_FAIL: 'users:failGetUsersMe',
  }
};
