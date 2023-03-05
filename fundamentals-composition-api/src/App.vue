<script setup>
import { ref, computed } from 'vue'

const header = ref('Shopping List App')
const editing = ref(false)
const items = ref([
  { id: 1, label: "10 party hats", purchased: true, highPriority: false },
  { id: 2, label: "2 board games", purchased: true, highPriority: false },
  { id: 3, label: "20 cups", purchased: false, highPriority: true }
])
const reversedItems = computed(() => [...items.value].reverse())
// const characterCount = computed(() => {
//   return newItem.value.length
// })

const newItem = ref('')
const newItemHighPriority = ref('')
const saveItem = () => {
  items.value.push(
    {
      id: items.value.length + 1,
      label: newItem.value,
      highPriority: newItemHighPriority.value
    })
  newItem.value = ''
  newItemHighPriority.value = ''
}
const doEdit = (isEdited) => {
  editing.value = isEdited
  newItem.value = ''
}
const togglePurchased = (item) => {
  item.purchased = !item.purchased
}

</script>

<template>
  <div class="header">
    <h1>{{ header }}</h1>
    <button v-if="editing" class="btn" @click="doEdit(false)">Cancel</button>
    <button v-else class="btn btn-primary" @click="doEdit(true)">Add Item</button>
  </div>

  <form class="add-item-form" @submit.prevent="saveItem" v-if="editing">
    <input type="text" v-model.trim="newItem" placeholder="Add an item">
    <input type="checkbox" v-model="newItemHighPriority" name="" id=""> High Priority
    <button class="btn btn-primary" :disabled="!newItem.length">
      Save Item
    </button>
  </form>
  <!-- <p class="counter">{{ characterCount }} / 200</p> -->

  <ul>
    <li v-for="(item, index) in reversedItems" :key="id"
      :class="{ strikeout: item.purchased, priority: item.highPriority }" @click="togglePurchased(item)">
      {{ item.label }}
    </li>
  </ul>

  <p v-if="!items.length">Nothing to see here</p>
</template>
