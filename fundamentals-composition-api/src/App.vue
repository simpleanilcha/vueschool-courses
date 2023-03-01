<script setup>
import { ref } from 'vue'

const header = ref('Shopping List App')

const items = ref([
  { id: 1, label: "10 party hats" },
  { id: 2, label: "2 board games" },
  { id: 3, label: "20 cups" }
])

const newItem = ref('')
const newItemHighPriority = ref('')

const saveItem = () => {
  items.value.push({ id: items.value.length + 1, label: newItem.value })
  newItem.value = ''
}

</script>

<template>
  <h1>{{ header }}</h1>

  <form class="add-item-form" @submit.prevent="saveItem">
    <input type="text" v-model.trim="newItem" placeholder="Add an item">
    <input type="checkbox" v-model="newItemHighPriority" name="" id=""> High Priority
    <button class="btn btn-primary">
      Save Item
    </button>
  </form>

  <ul>
    <li v-for="({ id, label }, index) in items" :key="id">
      {{ label }}
    </li>
  </ul>
</template>
