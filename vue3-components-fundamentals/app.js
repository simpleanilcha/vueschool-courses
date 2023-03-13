const PlanComponent = {
  template: '#plan-template',
  props: {
    name: {
      type: String,
      default: 'Hello',
      required: true
    },
    selected: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  methods: {
    select() {
      this.$emit('select', this.name)
    }
  }
}

const PlanPickerComponent = {
  components: { Plan: PlanComponent },
  data() {
    return {
      plans: ['The Single', 'The Curious', 'The Addict'],
      selectedPlan: null,
    }
  },
  template: '#plan-picker-template',
  methods: {
    selectPlan(plan) {
      this.selectedPlan = plan
    }
  }
}

const app = Vue.createApp({
  components: { PlanPicker: PlanPickerComponent}
})

.mount('#app')