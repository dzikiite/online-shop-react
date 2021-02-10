import { CHANGE_CURRENCY } from '../actions/globalActions';
import { USD } from '../utils/consts';

const initialState = {
  currency: USD,
}

export const globalReducer = (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_CURRENCY:
      return {
        ...state,
        currency: action.payload,
      }
    default:
      return state;
  }
}