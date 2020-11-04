<template>
  <div>
    <div class="todo-item">
      <input type="checkbox" :checked="todo.completed" @change="markComplete" />
      <div class="todo-input" :class="[todo.completed ? 'is-complete' : '']">
        <div class="todo-text" v-if="!editing" @dblclick="editTodo">
          {{ title }}
        </div>
        <input
          v-else
          @blur="doneEdit"
          @keyup.enter="doneEdit"
          @keyup.esc="cancelEdit"
          v-focus
          type="text"
          v-model="title"
          name="todo-item"
        />
      </div>
      <button @click="$emit('del-todo', id)" class="del">&times;</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      requited: true,
    },
  },

  data() {
    return {
      id: this.todo.id,
      title: this.todo.title,
      editing: this.todo.editing,
      beforeEditCache: "",
      completed: false,
    };
  },
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed;
    },
    editTodo() {
      this.beforeEditCache = this.title;
      this.editing = true;
    },
    doneEdit() {
      if (this.title.trim().length == 0) {
        return this.cancelEdit();
      }
      this.editing = false;
    },
    cancelEdit() {
      this.editing = false;
      this.title = this.beforeEditCache;
    },
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
  },
};
</script>

<style scoped>
.todo-item {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dashed;
  overflow: hidden;
  position: relative;
}

input[type="checkbox"] {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translate(5px, -50%);
}

.todo-text {
  padding: 5px 0;
}

.todo-input {
  margin-left: 34px;
  font-size: 18px;
}

input[name="todo-item"] {
  padding: 5px;
  margin-left: -7px;
  font-size: 18px;
  width: 80%;
  outline: none;
}

.is-complete {
  text-decoration: line-through;
}

.del {
  color: #969696;
  border: none;
  padding: 2px 8px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(-5px, -50%);
  outline: none;
}

.del:hover {
  background-color: #f76a6a;
  color: #ffffff;
}

button {
  float: right;
  font-size: 20px;
}
</style>