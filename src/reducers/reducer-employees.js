
export default function( state = {} , action ) {

  switch ( action.type ) {
    case "EMPLOYEE_SELECTED":
    let newEmployees = [...state.employees];
    newEmployees.find(e=>e.id===action.payload.id)
    .active = !action.payload.active;
    state = {
      ...state,
      employees:newEmployees
    }
    break;
    case "EMPLOYEE_REMOVED":
    state = {
      ...state,
      employees:state.employees.filter(emp=>!emp.active)
    }
    break;
    case "EMPLOYEE_ADDED":
    let newId = state.employees.length ?
    state.employees[state.employees.length-1].id+1:
    0;

    let newEmp = {
      ...action.payload,
      id:newId};

    state = {
      ...state,
      employees:[...state.employees, newEmp],
      inputs:{ name:"" , surname:""},
      invalidFields:[]
    }
    break;
    case "CLEAR_SELECTED_EMPLOYEES":
    state = {
      ...state,
      employees:state.employees.map(e=>({...e,active:false}))
    }
    break;
    case "SET_NAME_INPUT":
    state = {
      ...state,
      inputs:{ ...state.inputs, name : action.payload.name },
      invalidFields:[]
    };
    break;
    case "SET_SURNAME_INPUT":
    state = {
      ...state,
      inputs:{ ...state.inputs, surname : action.payload.surname },
      invalidFields:[]
    };
    break;
    case "SET_FOCUSED_ELEMENT":
    state = {
      ...state,
      focusedElement:{ index:action.payload.index },
      invalidFields:[]
    };
    break;
    case "INVALID_ENTRY":
    state = {
      ...state,
      invalidFields:[...action.payload]
    };
    break;
    default:
    break;


  }
  return state
}
