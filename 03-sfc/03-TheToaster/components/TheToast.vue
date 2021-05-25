<template>
  <div class="toast" :class="toast.kind">
    <app-icon :icon="toastIcon" />
    <span>{{ toast.message }}</span>
  </div>
</template>

<script>
  import AppIcon from './AppIcon';

  export default {
    name: 'TheToast',

    components: {
      AppIcon,
    },

    data() {
      return {
        icons: {
          toast_error: 'alert-circle',
          toast_success: 'check-circle'
        },
        counter: 0,
      }
    },
    
    props: {
      toasts: {
        type: Array,
        required: true,
      },
      toast: {
        type: Object,
        required: true,
      },
      delay: {
        type: Number,
        required: true,
      }
    },

    methods: {
      removeToast() {
        this.$emit('remove', this.toasts.shift(0));
      }, 
      updateCounter() {
        this.counter += 1;
      }
    },

    computed: {
      toastIcon() {
        return this.icons[this.toast.kind]; 
      },
      delayToast() {
        return Math.trunc(this.delay / 1000);
      }
    },

    created() {
      setInterval(() => {
        this.updateCounter(); 
      }, 1000);
    },

    watch: {
      counter(newVal, oldVal) {
        if (newVal > this.delayToast) {
          this.$emit('remove', this.toasts.shift());  
        } 
      }
    }

  };

</script>

<style></style>