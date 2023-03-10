const app = Vue.createApp({
  data() {
    return {
      plans: ['The Single', 'The Curious', 'The Addict']
    }
  },

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
  },

  // data() {
  //   return {
  //     title: 'The Single'
  //   }
  // }
})

.mount('#app')