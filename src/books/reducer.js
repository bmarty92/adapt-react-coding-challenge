import * as types from "./actionTypes";

const INITIAL_STATE = {
  books: {},
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.CREATE_BOOK:
      return {};

    case types.GET_BOOKS:
      return { ...state, books: payload };

    default:
      return state || [];
  }
};
