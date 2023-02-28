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
const newItemPriority = ref('low')
const iceCreamFlavors = ref([])
const newItemColor = ref('')
</script>

<template>
  <h1>{{ header }}</h1>
  <input type="text" v-model.trim="newItem" placeholder="Add an item">
  <!-- <input type="checkbox" v-model="newItemHighPriority" name="" id=""> High Priority -->

  <input type="radio" v-model="newItemHighPriority" value="low"> Low
  <input type="radio" v-model="newItemHighPriority" value="high"> High
  <!-- {{ newItemHighPriority }} -->

  <input type="color" v-model="newItemColor"> Choose color
  {{ newItemColor }}

  <select v-model="newItemPriority" name="" id="">
    <option value="low">Low</option>
    <option value="medium">Medium</option>
    <option value="high">High</option>
  </select>
  <!-- {{ newItemPriority }} -->

  <label for="chocolate">Chocolate</label>
  <input type="checkbox" v-model="iceCreamFlavors" id="chocolate" value="chocolate">
  <label for="vanilla">vanilla</label>
  <input type="checkbox" v-model="iceCreamFlavors" id="vanilla" value="vanilla">
  <label for="strawberry">strawberry</label>
  <input type="checkbox" v-model="iceCreamFlavors" id="strawberry" value="strawberry">


  <ul>
    <li v-for="({ id, label }, index) in items" :key="id">
      {{ label }}
    </li>
  </ul>
</template>
