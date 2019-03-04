import { GET_CONTENT_REQUEST } from '../actions/actions'

const initialState = {
  content: '',
}

const reducer = (state = initialState, action: { type: any, payload: any }) => {
  switch (action.type) {
    case GET_CONTENT_REQUEST:
      return { content: action.payload }

    default:
      return state
  }
}

export default reducer
