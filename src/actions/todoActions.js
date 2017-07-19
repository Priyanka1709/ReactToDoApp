import * as actionTypes from './actionTypes';

export function loadList() {
    return {
        type: actionTypes.LOAD_LIST,
    };
}

export function addItem(item) {
    return {
        type: actionTypes.ADD_ITEM,
        item,
    };
}

export function removeItem(index) {
    return {
        type: actionTypes.REMOVE_ITEM,
        index,
    };
}

export function updateCheckStatus(index) {
    return {
        type: actionTypes.UPDATE_CHECK_STATUS,
        index,
    };
}

export function updateInputValue(inputVal) {
    return {
        type: actionTypes.INPUT_CHANGE,
        inputVal,
    };
}
