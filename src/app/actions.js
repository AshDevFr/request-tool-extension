export const ENABLE_RULES = 'ENABLE_RULES';
export const ADD_RULE = 'ADD_RULE';
export const UPDATE_RULE = 'UPDATE_RULE';
export const REMOVE_RULE = 'REMOVE_RULE';

export function enableRules(enable, domain) {
  return { type: ENABLE_RULES, enable, domain };
}

export function addRule(domainId, rule) {
  return { type: ADD_RULE, domainId, rule };
}

export function updateRule(domainId, index, rule) {
  return { type: UPDATE_RULE, domainId, index, rule };
}

export function removeRule(domainId, index) {
  return { type: REMOVE_RULE, domainId, index };
}