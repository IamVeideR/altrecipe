<template>
  <div id="app">
    <div style="display: none">{{list}}</div>
    <router-view/>
  </div>
</template>
<script>


export default {
  computed: {
    list () {
      localStorage.todoItems = JSON.stringify(this.$store.state.todoItems);
      return this.$store.state.todoItems
    }
  },
  created() {
    if (localStorage.todoItems) {
      this.$store.commit('createTodoItems', JSON.parse(localStorage.todoItems))
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  padding-top: 80px;
  max-width: 540px;
  margin: 0 auto;
}

#nav {
  padding: 30px;
}

a {
  color: #2c3e50;
  text-decoration: none;
}

a.router-link-exact-active {
  color: #42b983;
}
</style>
