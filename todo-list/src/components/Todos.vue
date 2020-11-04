<template>
  <div>
    <div class="component">
      <div :key="todo.id" v-for="todo in todosFiltered">
        <TodoItem :todo="todo" @del-todo="$emit('del-todo', todo.id)" />
      </div>
    </div>
    <div class="container">
      <input type="checkbox" @change="checkAll" :checked="anyRemaining" />
      Check all
      <span class="items-left">{{ remaining }} items left</span>
    </div>
    <div class="container">
      <div>
        <button :class="{ active: filter === 'all' }" @click="filter = 'all'">
          All
        </button>
        <button
          :class="{ active: filter === 'active' }"
          @click="filter = 'active'"
        >
          Active
        </button>
        <button :class="{ active: filter === 'done' }" @click="filter = 'done'">
          Done
        </button>
        <div class="items-left">
          <transition name="fade">
            <button
              class="btnClearDone"
              v-if="showClearDone"
              @click="clearDone"
            >
              Clear Completed
            </button>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  name: "Todos",
  components: {
    TodoItem,
  },
  props: ["todos"],
  data() {
    return {
      filter: "all",
    };
  },
  methods: {
    checkAll(event) {
      this.todos.forEach((todo) => {
        if (event.target.checked) {
          todo.completed = true;
        } else {
          todo.completed = false;
        }
      });
    },
    clearDone() {
      this.todos = this.todos.filter((todo) => !todo.completed);
    },
  },
  computed: {
    remaining() {
      return this.todos.filter((todo) => !todo.completed).length;
    },
    anyRemaining() {
      return this.remaining === 0;
    },
    todosFiltered() {
      switch (this.filter) {
        case "all":
          return this.todos;
        case "active":
          return this.todos.filter((todo) => !todo.completed);
        case "done":
          return this.todos.filter((todo) => todo.completed);
        default:
          return this.todos;
      }
    },
    showClearDone() {
      return this.todos.filter((todo) => todo.completed).length > 0;
    },
  },
};
</script>

<style scoped>
.component {
  margin: 10px 0;
}
.container {
  overflow: hidden;
  padding: 10px;
  color: #eee;
  border-top: 2px solid #797979;
}
.items-left {
  float: right;
}
.container button {
  padding: 6px 12px;
  border: none;
  margin-left: 3px;
}
.container button:hover:not(:last-child) {
  background-color: #91f0c4;
}
.all,
.active,
.done {
  background-color: #28d383;
}
.btnClearDone:hover {
  background-color: #f76a6a;
  color: #ffffff;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>