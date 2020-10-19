<template>
  <header class="header">
    <div class="left">
      <img src="../assets/logo.png" />
      <h1>To-do List</h1>
    </div>
    <div class="right">
      <p>Sign Up/Login</p>
      <form @submit="addUser">
        <label for="username">Username: </label>
        <input
          v-model="username"
          type="text"
          name="username"
          placeholder="Username"
        />
        <br />
        <label for="Password">Password: </label>
        <input
          v-model="password"
          type="text"
          name="password"
          placeholder="Password"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    addUser(event) {
      event.preventDefault();

      const newUser = {
        username: this.username,
        password: this.password,
      };
      this.$emit("add-user", newUser);

      this.username = "";
      this.password = "";
    },
  },
};
</script>

<style scoped>
.header {
  background: #333;
  color: white;
  text-align: center;
  padding: 10px;
  overflow: hidden;
  padding: 20px;
}

.header a {
  color: white;
  padding-right: 5px;
}

.header img {
  width: 60px;
}

.left {
  float: left;
}

.right {
  float: right;
  text-align: right;
  font-size: 14px;
}

.right input[type="text"] {
  padding: 5px;
  background: #494949;
  color: white;
}

.right input[type="submit"] {
  width: 70%;
  background: #28d383;
  font-weight: bold;
  border: none;
  border-radius: 3px;
  margin-top: 5px;
  padding: 5px;
  cursor: pointer;
}
.right input[type="submit"]:hover {
  background: #2bdf8b;
}
</style>