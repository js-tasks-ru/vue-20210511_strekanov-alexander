<template>
  <div>
    <div v-for="(toast, index) in toasts" :key="index">
      <the-toast :toast="toast"></the-toast>
    </div>
  </div>
</template>

<script>
  import TheToast from './TheToast.vue';

  export default {
    name: 'TheToasts',
  
    components: { TheToast },

    props: {
      toasts: {
        type: Array,
        requierd: true,
      }
    },
  
  };
</script>

<style></style>
