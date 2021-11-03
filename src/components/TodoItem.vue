<template>
  <router-link :to="`/todo/`+page" class="todo_item" :class="isCompleted ? 'completed' : ''">
    <div class="todo_text">{{title}}</div>
    <button
        class="complete"
        @click.prevent="$emit('complete')"
    >
      {{completeText}}
    </button>
    <button
        class="destroy"
        @click.prevent="$emit('remove')"
    >
      Remove
    </button>
  </router-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    page: {
      type: Number,
      default: 0,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    updateToggle (value) {
      this.$emit('input', value)
    }
  },
  computed: {
    completeText: function() {
      return this.isCompleted ? 'Completed!' : 'To Complete'
    }
  }
}
</script>

<style lang="scss" scoped>

.todo_item {
  margin: 2px 10px 0;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #2c3e50;
  border-bottom: 1px solid #2c3e50;
  transition-duration: 0.2s;
  &.completed {
    opacity: 0.4;
    &:hover {
      opacity: 0.8;
    }

    .complete {
      color: #28a745;
      border-color: #28a745;
    }
  }
  &:hover {
    background-color: #efefef;
    .destroy {
      opacity: 1;
    }
  }
}
.todo_text {
  width: calc(100%  - 176px);
  overflow: hidden;
  text-overflow: ellipsis;
}
.complete{
  margin-left: auto;
  text-transform: uppercase;
  font-size: 10px;
  width: 92px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  color: #2c3e50;
  font-weight: bold;
  border: 1px solid #2c3e50;
  background-color: transparent;
  transition-duration: 0.2s;
  cursor: pointer;
}
.destroy{
  opacity: 0.5;
  margin-left: 12px;
  text-transform: uppercase;
  font-size: 10px;
  width: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  color: #dc3545;
  font-weight: bold;
  border: 1px solid #dc3545;
  background-color: transparent;
  transition-duration: 0.2s;
  cursor: pointer ;

  &:hover {
    background-color: #dc3545;
    opacity: 1;
    color: white;
  }
}
</style>
