import { ACTION_CHANGE_FIRST_NAME, ACTION_CHANGE_SECOND_NAME } from "../index";

export const changeFirstName = (payload) => {
  return {
    type: ACTION_CHANGE_FIRST_NAME,
    payload,
  };
};

export const changeSecondName = (payload) => {
  return {
    type: ACTION_CHANGE_SECOND_NAME,
    payload,
  };
};
