import {GET_ERROR, CLEAR_ERROR} from '../../constants.types';

const initialState = {
  msg: {},
  status: null,
  id: null
}

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ERROR:
      return {msg: action.payload, status: action.status, id: action.id}
    case CLEAR_ERROR:
      return {msg: {}, status: null, id: null}
    default:
      return state
  }
}

export default errorReducer;