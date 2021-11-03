<template>
  <div class="todo">
    <TodoElement/>
  </div>
</template>
<script>
// @ is an alias to /src
import TodoElement from '@/components/TodoElement.vue'

export default {
  name: 'Home',
  components: {
    TodoElement
  }
}
</script>