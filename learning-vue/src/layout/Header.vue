<template>
  <header class="header">
    <img src="../assets/logo.png">
    <h1>To-do List</h1>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
  .header {
    background: #333;
    color: white;
    text-align: center;
    padding: 10px;
  }

  .header a {
    color: white;
    padding-right: 5px;
  }

  .header img {
    width: 60px;
  }
</style>