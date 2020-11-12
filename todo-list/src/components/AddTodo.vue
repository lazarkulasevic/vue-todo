<template>
  <div>
    <form @submit="addTodo">
      <input
        type="text"
        v-model="title"
        name="title"
        placeholder="Add Todo..."
        autocomplete="off"
      />
      <input type="submit" value="ADD" class="btn" />
    </form>
  </div>
</template>

<script>
import uuid from "uuid";

export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    addTodo(event) {
      event.preventDefault();

      if (this.title.trim().length == 0) return;

      this.$store.commit("addTodo", {
        id: uuid.v4(),
        title: this.title,
        completed: false,
        editing: false,
      });

      this.title = "";
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
}

input[type="text"] {
  flex: 10;
  padding: 0 10px;
  border: none;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

input[type="submit"] {
  border: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #28d383;
  color: #000000;
  font-weight: bold;
}
</style>