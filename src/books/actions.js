import * as types from "./actionTypes";

export const getBooks = payload => ({ type: types.GET_BOOKS, payload });

export const createBook = (payload, id) => ({ type: types.CREATE_BOOK, payload, id });
