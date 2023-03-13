const PlanComponent = {
  template: '#plan-template',
  props: {
    name: {
      type: String,
      default: 'Hello',
      required: true
    }
  }
}

const PlanPickerComponent = {
  components: { Plan: PlanComponent },
  data() {
    return {
      plans: ['The Single', 'The Curious', 'The Addict']
    }
  },
  template: '#plan-picker-template',
}

const app = Vue.createApp({
  components: { PlanPicker: PlanPickerComponent}
})

.mount('#app')