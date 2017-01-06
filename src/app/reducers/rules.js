import { ADD_RULE, UPDATE_RULE, REMOVE_RULE } from '../actions';

function domainRules (state = [], action) {
  switch (action) {
    case ADD_RULE:
      return [
        ...state,
        action.rule
      ];
    case UPDATE_RULE:
      return [
        ...state.slice(0, action.index),
        action.rule,
        ...state.slice(action.index + 1)
      ];
    case REMOVE_RULE:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
}

export default function rules (state = {}, action){
  if (typeof action.domainId !== 'undefined') {
    return {
      ...state,
      [action.domainId]: domainRules(state[action.domainId], action)
    };
  }
  return state;

}