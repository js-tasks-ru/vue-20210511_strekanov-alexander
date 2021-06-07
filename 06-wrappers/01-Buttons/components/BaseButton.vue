<template>
  <component :is="tag" class="button" :class="addClasses" @click="click" v-bind="$attrs">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'BaseButton',
  
  props: {
    block: {
      type: Boolean,
      default: false,
    },
    tag: {
      type: String,
      default: 'button',
    },
  },

  methods: {
    click() {
      this.$emit('click');
    }, 
  },

  computed: {
    addClasses() {
      return {
        'button_block': this.block,
      }
    },
  },
};
</script>

<style scoped>
.button {
  display: inline-block;
  padding: 10px 24px;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: initial;
  text-align: center;
  border: 4px solid transparent;
  transition: 0.2s all;
  outline: none;
  box-shadow: none;
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;
}

.button.button_block {
  display: block;
  width: 100%;
}
</style>
