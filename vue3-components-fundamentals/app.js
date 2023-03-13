const app = Vue.createApp({
})

.component('plan', {
  template: '#plan-template',
  // props: ['name'],
  props: {
    name: {
      type: String,
      default: 'Hello',
      required: true
    }
  }

})

.component('plan-picker', {
  data() {
    return {
      plans: ['The Single', 'The Curious', 'The Addict']
    }
  },
  template: '#plan-picker-template',
})

.mount('#app')