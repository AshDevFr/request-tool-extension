import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import configs from './configs';
import rules from './rules';

const rootReducer = combineReducers({configs, rules, routing: routerReducer});

export default rootReducer;