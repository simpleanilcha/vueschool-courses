<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav id="nav">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/brazil">Brazil</RouterLink>
    <RouterLink to="/hawaii">Hawaii</RouterLink>
    <RouterLink to="/jamaica">Jamaica</RouterLink>
    <RouterLink to="/pamana">Pamana</RouterLink>
  </nav>

  <div class="container">
    <RouterView />
  </div>
</template>
