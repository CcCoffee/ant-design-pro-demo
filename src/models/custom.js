export default {
  namespace: 'custom',
  state: {
    todoList: [],
  },
  reducers: {
    addTodoItem(state, payload) {
      const newState = JSON.parse(JSON.stringify(state));
      newState.todoList = [...state.todoList, payload.data];
      return newState;
    },
  },
};
