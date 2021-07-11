export const REGISTRATION_CHANGE_EMAIL_TEXT = "REGISTRATION_CHANGE_EMAIL_TEXT";
export const REGISTRATION_CHANGE_PASSWORD_TEXT =
  "REGISTRATION_CHANGE_PASSWORD_TEXT";
export const REGISTRATION_CHANGE_REPEAT_PASSWORD_TEXT =
  "REGISTRATION_CHANGE_REPEAT_PASSWORD_TEXT";

export const setEmailText = (payload) => ({
  type: REGISTRATION_CHANGE_EMAIL_TEXT,
  payload,
});

export const setPasswordText = (payload) => ({
  type: REGISTRATION_CHANGE_PASSWORD_TEXT,
  payload,
});

export const setRepeatPasswordText = (payload) => ({
  type: REGISTRATION_CHANGE_REPEAT_PASSWORD_TEXT,
  payload,
});
