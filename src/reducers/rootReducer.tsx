import {
  GET_CONTENT_REQUEST,
  GET_CONTENT_SUCCESS,
  GET_CONTENT_ERROR } from '../actions/actions'

const initialState = {
  axRequest: false,
  content: '',
  error: null,
};

export function reducer (state = initialState, action: any ) {
  switch (action.type) {
    case GET_CONTENT_REQUEST:
      return { ...state, axRequest: true, error: null };
      break;
    case GET_CONTENT_SUCCESS:
      return { ...state, axRequest: false, content: action.content };
      break;
    case GET_CONTENT_ERROR:
      return { ...state, axRequest: false, content: '', error: action.error };
      break;
    default:
      return state
  }
}