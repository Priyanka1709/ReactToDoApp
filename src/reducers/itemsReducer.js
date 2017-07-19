import * as actionTypes from '../actions/actionTypes';
import _ from 'lodash';

const initialItems = [{
    value: 'Test Item',
    completed: false,
}];

export default function itemsReducer(state = initialItems, action) {
    switch (action.type) {
        case actionTypes.ADD_ITEM:
            return [
                ...state,
                action.item,
            ];

        case actionTypes.REMOVE_ITEM:
            return _.filter(state, (item, index) =>
                index !== action.index
            );

        case actionTypes.UPDATE_CHECK_STATUS:
            return _.map(state, (item, index) => {
                if (index === action.index) {
                    return _.defaults({
                        completed: !item.completed,
                    }, item);
                }
                return item;
            });

        default:
            return state;
    }
}
