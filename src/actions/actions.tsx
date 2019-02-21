// constants
export const GET_CONTENT_REQUEST = 'GET_CONTENT_REQUEST';

// action creators
export const getContentRequest = (content: string) => ({
  type: GET_CONTENT_REQUEST,
  payload: content
});
