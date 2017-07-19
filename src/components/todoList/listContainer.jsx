import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeItem, updateCheckStatus } from '../../actions/todoActions';
import ListItem from './listItem';

class ListContainer extends React.Component {
    constructor(props) {
        super(props);

        this.deleteItem = this.deleteItem.bind(this);
        this.itemStatusChange = this.itemStatusChange.bind(this);
    }
    deleteItem(index) {
        this.props.removeItem(index);
    }
    itemStatusChange(index) {
        this.props.updateCheckStatus(index);
    }
    render() {
        return (
            <ul>
                {_.map(this.props.items, (item, index) =>
                    <ListItem todoItem={item} key={index} index={index} deleteItem={this.deleteItem} itemStatusChange={this.itemStatusChange} />
                )}
            </ul>
        );
    }
}

ListContainer.propTypes = {
    items: PropTypes.array,
    removeItem: PropTypes.func.isRequired,
    updateCheckStatus: PropTypes.func.isRequired
}

ListContainer.defaultProps = {
    items: []
}

function mapStateToProps(state, ownProps) {
    return {
        items: state.items
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeItem: (index) => {
            dispatch(removeItem(index))
        },
        updateCheckStatus: (index) => {
            dispatch(updateCheckStatus(index))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);