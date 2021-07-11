export const AUTH_CHANGE_EMAIL_TEXT = "AUTH_CHANGE_EMAIL_TEXT";
export const AUTH_CHANGE_PASSWORD_TEXT = "AUTH_CHANGE_PASSWORD_TEXT";

export const setEmailText = (payload) => ({
  type: AUTH_CHANGE_EMAIL_TEXT,
  payload,
});

export const setPasswordText = (payload) => ({
  type: AUTH_CHANGE_PASSWORD_TEXT,
  payload,
});
