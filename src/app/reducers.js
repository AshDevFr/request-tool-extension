import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import configs from './reducers/configs';

const rootReducer = combineReducers({configs, routing: routerReducer});

export default rootReducer;