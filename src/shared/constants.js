export const AUTH_EVENTS = {
  CLIENT: {
    LOGIN: 'auth:loginUser',
    RESET_PASSWORD: 'auth:resetPasswordUser',
    OTP_VALIDATE: 'auth:otpValidate',

    GET_USERS_ME: 'users:getUsersMe',
    CONNECT_TO_GAME: 'users:connectToGame',
    CREATE_PERSON: 'users:createPerson',
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

    CREATE_PERSON_DIMENSION: 'users:createPersonDimesion',
  }
};

export const CHARACTER_E_EVENTS = {
  CLIENT:{
    CHARACTER_SET_HEAD_BLEND: 'character:setHeadBlend',
    CHARACTER_SET_MICRO_MORPH: 'character:setMicroMorph',
    CHARACTER_SET_HEAD_OVERLAY: 'character:setHeadOverlay',
    CHARACTER_SET_EYE_COLOR: 'character:setEyeColor',
    CHARACTER_SET_HAIR: 'character:setHair',
    CHARACTER_ADD_TATTOO: 'character:addTattoo',
    CHARACTER_FOCUS_LIMB: 'character-editor:focusLimb',
    CHARACTER_SET_CAMERA_PRESET: 'character-editor:setPreset',

    CHARACTER_SET_MODEL: 'character-editor:setModel',
    CHARACTER_CAMERA_POSE: 'character-editor:setPoseCamera',
    CHARACTER_SET_PARENTS: 'character-editor:setPedParents'
  }
};
