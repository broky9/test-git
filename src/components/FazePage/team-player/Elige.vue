<template>
    <h1>name: elige</h1>
    {{ nickName }}
    <button @click="changeName()"> 修改名字 </button>
    <button @click="changeFaze($parent)">修改faze</button>
    <button @click="useCodeD().getCode()">获取验证码</button>
</template>

<script setup>

import useCode from '../../../hooks/useCode'

defineProps(['nickName'])

const emit = defineEmits(['change-name'])

const useCodeD = useCode;


const changeName = () => {
    emit('change-name','elige')
}

function changeFaze(parent) {
    console.log(parent.name);
    parent.name = parent.name.toUpperCase();
    parent.age++;
}
    
</script>