import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoItems: []
  },
  mutations: {
    createTodoItems (state, value) {
      state.todoItems = value
    },
    addTodoItems (state, value) {
      state.todoItems.push(value)
    },
    removeTodoItems (state, value) {
      state.todoItems.splice(value, 1);
    },
    changeTodoItem (state, value) {
      state.todoItems[value.index][value.element] = value.value
    },
    toggleTodoItems (state, value) {
      state.todoItems[value.index].isCompleted = value.value
    },
  },
  actions: {
  },
  modules: {
  }
})
