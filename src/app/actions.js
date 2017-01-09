export const ENABLE_DOMAIN = 'ENABLE_DOMAIN';
export const ADD_RULE = 'ADD_RULE';
export const UPDATE_RULE = 'UPDATE_RULE';
export const REMOVE_RULE = 'REMOVE_RULE';
export const ADD_REQUEST_LOG = 'ADD_REQUEST_LOG';

export function enableDomain(enable, domain) {
  return { type: ENABLE_DOMAIN, enable, domain };
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

export function AddRequestLog(domainId, index) {
  return { type: ADD_REQUEST_LOG, domainId, index };
}