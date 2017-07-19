import * as actionTypes from '../actions/actionTypes';

const initialInputVal = '';

export default function inputReducer(state = initialInputVal, action) {
    switch (action.type) {
        case actionTypes.INPUT_CHANGE:
            return action.inputVal;

        default:
            return state;
    }
}
