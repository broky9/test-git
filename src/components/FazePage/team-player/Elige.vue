<template>
    <h1>name: elige</h1>
    {{ nickName }}
    <button @click="changeName()"> 修改名字 </button>
    <button @click="changeFaze($parent)">修改faze</button>
</template>

<script setup>

defineProps(['nickName'])

const emit = defineEmits(['change-name'])


const changeName = () => {
    emit('change-name','elige')
}

function changeFaze(parent) {
    console.log(parent.name);
    parent.name = parent.name.toUpperCase();
    parent.age++;
}
    
</script>