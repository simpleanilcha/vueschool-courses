<script setup>
import { ref } from 'vue'

const msg = ref('Hello Vue 3!')
</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg">
</template>