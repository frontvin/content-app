import { GET_CONTENT_REQUEST } from '../actions/actions';

const initialState = {
  content: ''
};

export function contentReducer(
  state = initialState,
  action: { type: string; payload: string }
) {
  switch (action.type) {
    case GET_CONTENT_REQUEST:
      return { content: action.payload };
  }
}
