<template>
    <h1>name: elige</h1>
    <button @click="changeName()"> 修改名字 </button>
</template>

<script setup>

const emit = defineEmits(['change-name'])


const changeName = () => {
    emit('change-name','elige')
}
    
</script>