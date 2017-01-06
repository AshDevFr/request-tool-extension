import { ENABLE_RULES } from '../actions';

export default function configs (state = {}, action){
  switch (action) {
    case ENABLE_RULES:

    default:
      return state;
  }
}