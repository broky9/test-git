<template>
  <div>
    <input
      :value="myTest"
      @input="emit('update:myTest', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<script lang="ts" setup>
defineProps(['myTest'])

const emit = defineEmits(['update:myTest'])
</script>

<style scoped></style>
