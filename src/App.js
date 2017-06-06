import React, { Component } from 'react';
import Main from './components/main';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import AddEmp from './components/add-employee';
import {
  selectEmployee,
  removeEmployee,
  addEmployee,
  clearSelectedEmployees,
  setSurnameInput,
  setNameInput,
  setFocusedElement
} from './actions/index-actions.js';
import {
  addButton,
  removeButton
} from './res/strings.js'


function mapStateToProps( state ) {
  return {
    employees : state.employees,
    inputs : state.inputs,
    focusedElement : state.focusedElement
  };
}

function matchDispatchToProps( dispatch ) {
  return bindActionCreators({
    selectEmployee,
    removeEmployee,
    addEmployee,
    clearSelectedEmployees,
    setSurnameInput,
    setNameInput,
    setFocusedElement
  }, dispatch);
}


const App = (props) => (
  <Router>
    <div id="container">
      <div
        id="buttons">
        <Link to="/addemp" >
          <button
            id="addButton"
            onClick={()=>props.clearSelectedEmployees()}
            >
              <p>{ addButton.p }</p>
              <span>{ addButton.span }</span>
          </button>
        </Link>
        <Link to="/" >
        <button
          id="removeButton"
          onClick={()=>props.removeEmployee()}>
          <p>{ removeButton.p }</p>
          <span>{ removeButton.span }</span>
        </button>
        </Link>
      </div>
      <Route exact path="/" component={Main}/>
      <Route path="/addemp" component={AddEmp}/>

    </div>
  </Router>
)

export default connect( mapStateToProps, matchDispatchToProps)( App );
