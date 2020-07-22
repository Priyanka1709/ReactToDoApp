import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addItem, updateInputValue } from '../../actions/todoActions';

class AddTask extends React.Component {
    constructor(props){
        super(props);

        this.onTextInputEvent= this.onTextInputEvent.bind(this);
        this.onTextInputKeydown= this.onTextInputKeydown.bind(this);
        this.addTask= this.addTask.bind(this);
    }
    onTextInputEvent(e){
        let inputValue= e.target.value;
        this.props.updateInputValue(inputValue);
    }
    onTextInputKeydown(e){
        if (e.keyCode === 13) {
            e.preventDefault();
            if(this.props.inputVal){
                this.addTask();
            }
        }
    }
    addTask(){
        this.props.addItem({
            value: this.props.inputVal,
            checked: false
        });
        this.props.updateInputValue('');
    }
    render() {
        return ( 
            <div>
                <form>
                    <input className="input-md form-control" id="taskInput" type="text" placeholder={'Your Task'} onInput={this.onTextInputEvent} onKeyDown={this.onTextInputKeydown} value={this.props.inputVal}/>
                </form>
                <button type="button" className="btn btn-primary addButton" disabled={!this.props.inputVal} onClick={this.addTask}>Add</button>
            </div>
        );
    }
}

AddTask.propTypes= {
    inputVal: PropTypes.string,
    updateInputValue: PropTypes.func.isRequired,
    addItem: PropTypes.func.isRequired
}

AddTask.defaultProps= {
    inputVal: ''
}

function mapStateToProps(state, ownProps){
    return {
        items: state.items,
        inputVal: state.inputVal
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addItem: (item) => {
            dispatch(addItem(item))
        },
        updateInputValue: (inputVal) => {
            dispatch(updateInputValue(inputVal))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
