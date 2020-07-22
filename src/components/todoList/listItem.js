import React from "react";
import PropTypes from 'prop-types';

const ListItem= (props) => {
    let status= props.todoItem.completed ? 'checked': '' ;
    return (
       <li className={'list-group-item '+ status} key={props.index}>
           <input type='checkbox' checked={status} onChange={() => props.itemStatusChange(props.index)}/>
           {props.todoItem.value}
           <a className='close' onClick={() => props.deleteItem(props.index)}>x</a>
       </li>
    );
}

ListItem.propTypes= {
    index: PropTypes.number.isRequired,
    todoItem: PropTypes.object.isRequired,
    itemStatusChange: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired
}

export default ListItem;