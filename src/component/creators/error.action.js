import {GET_ERROR, CLEAR_ERROR} from '../../constants.types.js';

export const returnError = (msg, status, id = null) => {
  return (dispatch) => {
    dispatch({
      type: GET_ERROR,
      payload: {
        msg,
        status,
        id
      }
    })
  }
}

export const clearError = () => {
  return (dispatch) => {
    dispatch({type: CLEAR_ERROR})
  }
}