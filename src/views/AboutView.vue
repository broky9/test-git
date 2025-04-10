<template>
  <div>
    <div class="about" @click="showCookie()">
      <h1>This is an about page</h1>
    </div>
    <h1> this is cookie : {{ cookie }}</h1>
  </div>
</template>

<script setup>

import { ref } from 'vue';


const cookie = ref("");

function showCookie() {
  cookie.value = decodeURI(document.cookie);
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
