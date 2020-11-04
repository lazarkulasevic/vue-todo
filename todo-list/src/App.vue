<template>
  <div id="app">
    <Header />
    <div class="todo-wrapper">
      <div class="todo-app">
        <AddTodo @add-todo="addTodo" />
        <Todos :todos="todos" @del-todo="deleteTodo" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./layout/Header";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

export default {
  name: "App",
  components: {
    Header,
    AddTodo,
    Todos,
  },
  data() {
    return {
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
    };
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    addTodo(newTodo) {
      this.todos = [...this.todos, newTodo];
    },
  },

  // mounted: function () {
  //   // will be finished when I learn basics of VueJS
  //   db.collection("todos")
  //     .get()
  //     .then(function (snapshot) {
  //       snapshot.docs.forEach(function (doc) {
  //         const data = {
  //           id: doc.id,
  //           title: doc.data().title,
  //           completed: doc.data().completed,
  //           editing: false,
  //         };
  //         this.todos.push(data);
  //       });
  //     });
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: none;
}

a:hover,
button:hover,
input[type="checkbox"]:hover,
input[type="submit"]:hover,
input[type="button"]:hover {
  cursor: pointer;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
  background-color: #444;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
}

.btn:hover {
  background: #666;
}
</style>

<style scoped>
.todo-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.todo-app {
  width: 60%;
}
</style>