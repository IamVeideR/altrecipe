<template>
  <div class="todo_element" :class="todoItem.isCompleted ? 'completed' : ''">
    <router-link to="/">Back</router-link>
    <h1>Task: {{todoItem.title}}</h1>
    <InputComponent
        v-model="title"
        placeholder="Change Title"
        @keyup.enter.native="changeTodo('title', title)"
    />
    <InputComponent
        v-model="description"
        class="description"
        placeholder="Add Description"
        @keyup.enter.native="changeTodo('description', description)"
    />
    <div class="buttons">
      <button
          class="complete"
          @click.prevent="changeTodo('isCompleted', !todoItem.isCompleted)"
      >
        {{completeText}}
      </button>
      <button
          class="destroy"
          @click.prevent="removeItem"
      >
        Remove
      </button>
    </div>
  </div>
</template>

<script>
import InputComponent from './InputComponent.vue'

export default {
  name: 'TodoElement',
  components: {
    InputComponent,
  },
  data () {
    return {
      title: '',
      description: '',
    }
  },
  computed: {
    id: function() {
      return this.$route.params.id
    },
    todoItem: function() {
      if (this.$store.state.todoItems[this.id]) {
        return this.$store.state.todoItems[this.id]
      } else return {}
    },
    completeText: function() {
      return this.todoItem.isCompleted ? 'Completed!' : 'To Complete'
    }
  },
  mounted() {
    if (this.$store.state.todoItems[this.id]) {
      this.description = this.$store.state.todoItems[this.id].description
    }
  },
  methods: {
    changeTodo(element, value) {
      this.$store.commit('changeTodoItem', {index: this.id, element: element, value: value})
    },
    removeItem() {
      this.$store.commit('removeTodoItems', this.id)
      this.$router.push({name: 'Home'})
    }
  }
}
</script>

<style lang="scss" scoped>
.todo_element {
  text-align: left;
  &.completed {

    .complete {
      color: #28a745;
      border-color: #28a745;
    }
  }
  & a {
    text-decoration: underline;
    padding: 8px;
    transition-duration: 0.2s;
    &:hover {
      color: #42b983;
    }
  }
}
.description {
  margin-top: 24px;
}
.complete{
  text-transform: uppercase;
  font-size: 14px;
  width: 124px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  color: #2c3e50;
  font-weight: bold;
  border: 1px solid #2c3e50;
  background-color: transparent;
  transition-duration: 0.2s;
  cursor: pointer;
}
.destroy{
  margin-left: 12px;
  text-transform: uppercase;
  font-size: 14px;
  width: 84px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  color: #dc3545;
  font-weight: bold;
  border: 1px solid #dc3545;
  background-color: transparent;
  transition-duration: 0.2s;
  cursor: pointer ;

  &:hover {
    background-color: #dc3545;
    color: white;
  }
}
.buttons {
  display: flex;
  margin-top: 24px;
  justify-content: space-between;
  align-items: center;
}
</style>
