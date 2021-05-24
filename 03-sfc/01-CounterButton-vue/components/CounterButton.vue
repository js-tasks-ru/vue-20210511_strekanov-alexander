<template>
  <div>
    <button @click="increment(count)">{{ count }}</button>
  </div>
</template>

<script>
export default {
  name: 'CounterButton',
  
  props: {
    count: {
      type: Number,
      default: 0,    
    }
  },

  model: {
    prop: 'count',
    event: 'increment',
  },

  methods: {
    increment (counter) {
      this.$emit('increment', counter + 1)
    }
  }
}
</script>

<style></style>
