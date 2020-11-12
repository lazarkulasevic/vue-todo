import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    filter: "all",
    todos: [
      {
        id: 1,
        title: "Todo One",
        completed: false,
        editing: false,
      },
      {
        id: 2,
        title: "Todo Two",
        completed: false,
        editing: false,
      },
      {
        id: 3,
        title: "Todo Three",
        completed: false,
        editing: false,
      },
    ],
  },
  getters: {
    remaining(state) {
      return state.todos.filter((todo) => !todo.completed).length;
    },
    anyRemaining(state, getters) {
      return getters.remaining === 0;
    },
    todosFiltered(state) {
      switch (state.filter) {
        case "all":
          return state.todos;
        case "active":
          return state.todos.filter((todo) => !todo.completed);
        case "done":
          return state.todos.filter((todo) => todo.completed);
        default:
          return state.todos;
      }
    },
    showClearDone(state) {
      return (
        state.todos.filter((todo) => todo.completed).length > 0
      );
    },
  },
  mutations: {
    addTodo(state, todo) {
      state.todos = [...state.todos, todo];
    },
    deleteTodo(state, id) {
      state.todos = state.todos.filter(todo => todo.id !== id);
    },
    markComplete(state, id) {
      state.todos.forEach(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
      })
    },
    checkAll(state, event) {
      state.todos.forEach(todo => {
        event.target.checked 
          ? (todo.completed = true)
          : (todo.completed = false)
      })
    },
    clearDone(state) {
      state.todos = state.todos.filter(todo => !todo.completed);
    },
  }
});