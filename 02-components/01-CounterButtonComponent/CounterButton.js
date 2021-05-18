export default {
  name: 'CounterButton',
  // Компонент должен иметь входной параметр
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
  // Компонент должен иметь модель
  model: {
    prop: 'count',
    event: 'increment',
  },
  data() {
    return {
      counter: 0
    }
  },
  mounted() {
    this.counter = !this.count ? 0 : this.count;
  },
  methods: {
    inc() {
      return this.counter += 1;
    }
  },
  // Шаблон лучше держать максимально простым, а логику выносить в методы
  // Шаблон потребуется отредактировать
  template: `
    <button type="button" 
      :count="count" 
      @click="$emit('increment', inc())"
    >{{ count }}</button>`,
};