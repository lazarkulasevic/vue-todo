<template>
  <div>
    <div class="component">
      <transition-group
        name="fade"
        enter-active-class="animated fadeInUp"
        leave-active-class="animated fadeOutDown"
      >
        <div :key="todo.id" v-for="todo in todosFiltered" class="todo-item">
          <TodoItem :todo="todo" @del-todo="$emit('del-todo', todo.id)" />
        </div>
      </transition-group>
    </div>
    <div class="container">
      <input type="checkbox" @change="checkAll" :checked="anyRemaining" />
      Check all
      <span class="items-left">{{ remaining }} items left</span>
    </div>
    <div class="container">
      <div>
        <button
          :class="{ active: filter === 'all' }"
          @click="updateFilter('all')"
        >
          All
        </button>
        <button
          :class="{ active: filter === 'active' }"
          @click="updateFilter('active')"
        >
          Active
        </button>
        <button
          :class="{ active: filter === 'done' }"
          @click="updateFilter('done')"
        >
          Done
        </button>
        <div class="items-left">
          <transition name="fade">
            <button
              class="btnClearDone"
              v-if="showClearDone"
              @click="clearDone"
            >
              Clear Done
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
      this.$store.commit("checkAll", event);
    },
    clearDone() {
      this.$store.commit("clearDone", true);
    },
    updateFilter(filter) {
      this.$store.state.filter = filter;
    },
  },
  computed: {
    remaining() {
      return this.$store.getters.remaining;
    },
    anyRemaining() {
      return this.$store.getters.anyRemaining;
    },
    todosFiltered() {
      return this.$store.getters.todosFiltered;
    },
    showClearDone() {
      return this.$store.getters.showClearDone;
    },
  },
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css");

.todo-item {
  animation-duration: 0.3s;
}

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