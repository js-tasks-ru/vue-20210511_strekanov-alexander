<template>
  <div class="toast" :class="toast.kind">
    <app-icon :icon="icon" />
    <span>{{ toast.title }}</span>
  </div>
</template>

<script>
  import AppIcon from './AppIcon';

  const ICONS = {
    toast_error: 'alert-circle',
    toast_success: 'check-circle'
  };

  export default {
    name: 'TheToast',

    props: {
      toast: {
        type: Object,
        required: true,
      }
    },

    components: { AppIcon },

    computed: {
      icon() {
        return ICONS[this.toast.kind];
      }
    },

  };

</script>

<style></style>