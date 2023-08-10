const initialState = {
  todos: [],
};

const toDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_LIST":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.length + 1,
            item: action.payLoad.item,
          },
        ],
      };

    case "REMOVE_FROM_LIST":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payLoad.id),
      };

    default:
      return state;
  }
};

export default toDoReducer;
