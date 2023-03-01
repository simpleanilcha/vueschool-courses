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

const editing = ref(false)

const saveItem = () => {
  items.value.push({ id: items.value.length + 1, label: newItem.value })
  newItem.value = ''
}

const doEdit = (isEdited) => {
  editing.value = isEdited
  newItem.value = ''
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
    <button class="btn btn-primary">
      Save Item
    </button>
  </form>

  <ul>
    <li v-for="({ id, label }, index) in items" :key="id">
      {{ label }}
    </li>
  </ul>

  <p v-if="!items.length">Nothing to see here</p>
</template>
