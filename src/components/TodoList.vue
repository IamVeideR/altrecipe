<template>
  <div class="todo_list">
    <h1>Todo List</h1>
    <InputComponent
        v-model="newTodoTitle"
        placeholder="Create New Todo"
        @keyup.enter.native="createNewTodo()"
    />
    <div class="list">
    <ul v-if="todoList.length">
      <TodoItem
          v-for="(todo, index) in todoList"
          :key="index"
          :title="todo.title"
          :page="index"
          :is-completed="todo.isCompleted"
          @remove="removeItem(index)"
          @complete="changeTodo(index, 'isCompleted', !todo.isCompleted)"
      />
    </ul>
    <div v-else>
      You don`t have any tasks in your list.
    </div>
    </div>
  </div>
</template>

<script>
import InputComponent from './InputComponent.vue'
import TodoItem from './TodoItem.vue'

export default {
  name: 'TodoList',
  components: {
    InputComponent,
    TodoItem
  },
  data () {
    return {
      newTodoTitle: '',
    }
  },
  computed: {
    todoList: function() {
      return this.$store.state.todoItems
    }
  },
  methods: {
    createNewTodo() {
      const titleExists = this.newTodoTitle.trim()
      if (titleExists) {
        this.$store.commit('addTodoItems', {title: this.newTodoTitle, isCompleted: false})
        this.newTodoTitle = ''
      }
    },
    removeItem(index) {
      this.$store.commit('removeTodoItems', index)
    },
    changeTodo(index, element, value) {
      this.$store.commit('changeTodoItem', {index: index, element: element, value: value})
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
.list {
  margin-top: 20px;
  font-size: 20px;
  text-align: left;
}
</style>
