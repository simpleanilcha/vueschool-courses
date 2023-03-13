Vue.createApp({

})

.component('TodoItem', {
  template: '#todo-item-template',
  data() {
    return {
      isDone: false
    }
  }
})

.mount('#app')