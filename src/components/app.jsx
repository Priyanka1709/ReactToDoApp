import React from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';
import AddTask from './addTask/addTask';
import { connect } from 'react-redux';
import { loadList } from '../actions/todoActions';
import ListContainer from './todoList/listContainer'

class App extends React.Component {
    componentDidMount(){
        this.props.loadList();
    }
    render() {
        return ( 
            <div className = "container toDoList">
                <Header/>
                <AddTask/>
                <ListContainer/>
            </div>
        );
    }
}

App.propTypes= {
    loadList: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {  
    loadList: ()=>{
        dispatch(loadList())
    } 
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
