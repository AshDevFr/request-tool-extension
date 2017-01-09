import { ENABLE_DOMAIN } from '../actions';

export default function configs (state = {}, action){
  switch (action) {
    case ENABLE_DOMAIN:

    default:
      return state;
  }
}