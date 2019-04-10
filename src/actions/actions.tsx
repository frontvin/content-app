import { createAsyncAction, createAction } from 'typesafe-actions';

// Action types
export const CANCEL_REQUEST = "CANCEL_REQUEST";
export const GET_CONTENT_REQUEST = "GET_CONTENT_REQUEST";
export const GET_CONTENT_SUCCESS = "GET_CONTENT_SUCCESS";
export const GET_CONTENT_ERROR = "GET_CONTENT_ERROR";

export const axiosGetContentAction = createAsyncAction(
    GET_CONTENT_REQUEST,
    GET_CONTENT_SUCCESS,
    GET_CONTENT_ERROR,
)<undefined, string, Error>()

export const cancelRequestAction = createAction(CANCEL_REQUEST);