import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';
import inputReducer from './inputReducer';

const rootReducer = combineReducers({
    items: itemsReducer,
    inputVal: inputReducer,
});

export default rootReducer;
