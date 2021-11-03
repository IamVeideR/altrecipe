<template>
  <input
      type="text"
      class="input"
      :value="value"
      @input="updateInput($event.target.value)"
  >
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    }
  },
  methods: {
    updateInput (value) {
      this.$emit('input', value)
    }
  },
  computed: {
  }
}
</script>

<style scoped>

.input {
  width: 100%;
  box-sizing: border-box;
  font-size: 18px;
  padding: 10px 12px;
  border: 1px solid #2c3e50;
}
</style>
