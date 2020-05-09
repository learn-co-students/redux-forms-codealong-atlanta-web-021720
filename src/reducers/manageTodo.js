export default function manageTodo(state = {
  todos: [],
}, action) {

  let retVal = state;
  switch(action.type)
  {
    case 'ADD_TEXT':
    state.todos = [...state.todos, action.payload]
    retVal = state;
    break;

    default:
    retVal = state;
    break;
  }
  console.log("reducer received this action:", action);
  console.log("reducer received this action:", state);
  return retVal;
}
