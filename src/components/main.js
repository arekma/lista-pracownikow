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
  setFocusedElement
} from '../actions/index-actions.js';
import {
  employeesTableHeader
} from '../res/strings';

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

class Main extends Component{
        constructor(props){
          super(props);
        }
        render(){
          return (
        <table id="employeesTable">
          <thead>
            <tr>
              <th>{ employeesTableHeader.index }</th>
              <th>{ employeesTableHeader.name }</th>
              <th>{ employeesTableHeader.surname }</th>
            </tr>
          </thead>
          <tbody>
              { this.props.employees.map(( emp , index )=>{
                let activity = emp.active ? "active" : "";
                return (
                <tr
                  key={ emp.id }
                  onClick={() => this.props.selectEmployee(emp) }
                  className={ activity }
                  >
                  <td>{ index }</td>
                  <td>{ emp.name }</td>
                  <td>{ emp.surname }</td>
                </tr>
              )}
            )}
          </tbody>
        </table>
      )
    }
  }

  export default connect(mapStateToProps,matchDispatchToProps)( Main );
