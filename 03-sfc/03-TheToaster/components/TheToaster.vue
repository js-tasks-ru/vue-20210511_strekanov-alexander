<template>
  <div class="toasts">
    <the-toasts :toasts="toasts"></the-toasts>
  </div>
</template>

<script>

import TheToasts from './TheToasts'

const DELAY = 5000;

export default {

  name: 'TheToaster',
  
  components: { TheToasts },
  
  data() {
    return {
      toasts: [],
    }
  },

  methods: {
    error(message) {
      this.toasts.push({ title: message, kind: 'toast_error' });
      setTimeout(this.remove, DELAY);
    },
    
    success(message) {
      this.toasts.push({ title: message, kind: 'toast_success' });
      setTimeout(this.remove, DELAY);
    },

    remove() {
      this.toasts = this.toasts.filter((_, index) => index > 0);
    }

  },

};
</script>

<style>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}
.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}
.toast + .toast {
  margin-top: 20px;
}
.toast > .icon {
  margin-right: 12px;
}
.toast.toast_success {
  color: var(--green);
}
.toast.toast_error {
  color: var(--red);
}
@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}
</style>