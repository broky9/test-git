<template>
    {{ name }} __________ {{ age }}
    <Elige @change-name=changeName($event) :nickName="eligeChineseNickName"></Elige>
    <div>
        <button @click="changeAge()">修改age</button>
    </div>

    real name {{ proName }}

    <div style="display: flex; align-items: center; flex-wrap: wrap; justify-content: space-between;">
        <template v-for=" (p,index) in teamPicture" :key="index">
            <!-- <img :src="getPicFile(p.src)" v-if="index==0" style="position: sticky;top:0">
            <img :src="getPicFile(p.src)" v-if="index!=0"> -->
            <img :src="getPicFile(p.src)" style="width: 600px">
        </template>
    </div>
    <template v-for=" p in teamPicture" :key="p.src">
        <img :src="getPicFile(p.src)">
    </template>

    
</template>

<script setup>
import { ref, watch, watchEffect } from 'vue'
import Elige from './team-player/Elige.vue';
import useUtils from '@/hooks/useUtils';

const eligeChineseNickName = '鸡哥';

const proName = ref('12')

const name = ref('faze')

const age = ref(0)

const { getPicFile } = useUtils();


const teamPicture = [
    {src: '../img/faze-clan/broky.jpg'},
    {src: '../img/faze-clan/faze-clan.jpg'},
    {src: '../img/faze-clan/frozen.jpg'},
    {src: '../img/faze-clan/karrigan.jpg'},
    {src: '../img/faze-clan/rain.jpg'},
    {src: '../img/faze-clan/ropz.jpg'}
]

function changeName ($event) {
    proName.value = $event
}

watch(name,(newValue,oldValue) => {
    console.log(newValue,oldValue)
})
watch(age,(newValue,oldValue) => {
    console.log(newValue,oldValue)
})

function changeAge() {
    age.value++;
}

defineExpose({name,age})

</script>