const selectEmployee = employee => {
  return {
    type:"EMPLOYEE_SELECTED",
    payload:employee
  };
}
const removeEmployee = () => ({
  type:"EMPLOYEE_REMOVED",
  payload:{}
});
const addEmployee = employee => ({
  type:"EMPLOYEE_ADDED",
  payload:employee
});
const clearSelectedEmployees = () => ({
  type:"CLEAR_SELECTED_EMPLOYEES",
  payload:{}
});
const setSurnameInput = surname => ({
  type:"SET_SURNAME_INPUT",
  payload:{ surname }
});
const setNameInput = name => ({
  type:"SET_NAME_INPUT",
  payload:{ name }
});
const setFocusedElement = index => ({
  type:"SET_FOCUSED_ELEMENT",
  payload:{ index }
});
const invalidEntry = entry => ({
  type:"INVALID_ENTRY",
  payload:entry
});

export {
  selectEmployee,
  removeEmployee,
  addEmployee,
  clearSelectedEmployees,
  setSurnameInput,
  setNameInput,
  setFocusedElement,
  invalidEntry
};
