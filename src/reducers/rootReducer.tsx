import {
  GET_CONTENT_REQUEST,
  GET_CONTENT_SUCCESS,
  GET_CONTENT_ERROR,
  REQUEST_CANCELED } from '../actions/actions'

const initialState = {
  axRequest: false,
  content: '',
  loading: false,
  error: null,
  cancelRequest: false
};

export function reducer (state = initialState, action: any ) {
  switch (action.type) {
    case GET_CONTENT_REQUEST:
      return {
        ...state,
        axRequest: true,
        loading: true,
        cancelRequest: false
      };
      break;
    case GET_CONTENT_SUCCESS:
      return {
        ...state,
        axRequest: false,
        loading: false,
        content: action.content,
        cancelRequest: false
      };
      break;
    case GET_CONTENT_ERROR:
      return {
        ...state,
        loading: true,
        error: action.error,
      };
      break;
    case REQUEST_CANCELED:
      return {
        ...state,
        loading: false,
        cancelRequest: action.cancelRequest
      };
    default:
      return state;
  }
}