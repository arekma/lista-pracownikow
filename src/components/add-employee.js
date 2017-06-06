import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  selectEmployee,
  removeEmployee,
  addEmployee,
  clearSelectedEmployees,
  setSurnameInput,
  setNameInput,
  setFocusedElement,
  invalidEntry
} from '../actions/index-actions.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {
  input_0,
  input_1,
  backButton,
  plusButton
} from '../res/strings'


function mapStateToProps( state ) {
  return {
    employees : state.employees,
    inputs : state.inputs,
    focusedElement : state.focusedElement,
    invalidFields : state.invalidFields
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
    setFocusedElement,
    invalidEntry
  }, dispatch);
}

class AddEmp extends Component {
        constructor(props){
          super(props);
        }
        componentDidMount(){
          document.querySelectorAll('.focusableElements')
          [this.props.focusedElement.index].focus();
        }
        render(){
          let props = this.props
              return (
            <div id="newEmployeeForm">
              <Link to="/">
                <button
                  id="backButton">
                  <p>{ backButton.p }</p>
                  <span>{ backButton.span }</span>
                </button>
              </Link>
              <form
                action="#0"
                onSubmit={ event => {
                  event.preventDefault();
                  let name = document.getElementById("newEmployeeName").value,
                  surname = document.getElementById("newEmployeeSurname").value,
                  newEmployee = { name, surname };
                  return props.addEmployee(newEmployee);
                }}
                >
                  <input
                    id="newEmployeeName"
                    autoComplete="off"
                    className={
                      "focusableElements"+(props.invalidFields.find(
                        el => el === 1)?" invalid":"")
                    }
                    type='text'
                    defaultValue={ props.inputs.name }
                    onFocus={function(e){
                      if(e.target.value === input_0 ) {
                        e.target.value = "";
                      return props.setFocusedElement(0);
                      }
                    }}
                    onBlur={ e => {
                      e.target.value = props.inputs.name;
                    }}
                    onChange={e=>{
                      let nameInput = e.target.value;
                      return props.setNameInput( nameInput );
                    }}
                  />
                  <input
                    id="newEmployeeSurname"
                    autoComplete="off"
                    className={
                      "focusableElements"+(props.invalidFields.find(
                        el => el === 1)?" invalid":"")
                    }
                    type='text'
                    defaultValue={ props.inputs.surname }
                    onFocus={function(e){
                      if(e.target.value === input_1 ) {
                        e.target.value = "";
                      return props.setFocusedElement(1);
                      }
                    }}

                    onChange={e=>{
                      let surnameInput = e.target.value;
                      return props.setSurnameInput( surnameInput );
                    }}
                    onBlur={ e => {
                      e.target.value = props.inputs.surname;
                    }}
                  />
              </form>
                <button
                  id="plusButton"
                  onClick={()=>{
                    let name = document.getElementById("newEmployeeName").value,
                    surname = document.getElementById("newEmployeeSurname").value,
                    newEmployee = { name, surname }

                    let regE = new RegExp(/[A-Za-z]/,'gi'),
                    entry = [];

                    if ( !name.match(regE)) {
                      entry = [...entry,0];
                    }
                    if ( !surname.match(regE) ) {
                      entry = [...entry,1];
                    }
                    if ( entry.length ) {
                      return props.invalidEntry( entry );
                    } else {
                    props.history.push("/");
                    return props.addEmployee(newEmployee);
                    }
                  }}
                  >
                  <p>{ plusButton.p}</p>
                  <span>{ plusButton.span }</span>
                </button>

            </div>
          )
    }
}
export default connect( mapStateToProps, matchDispatchToProps)( AddEmp );
