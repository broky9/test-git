<template>
    <Elige @change-name=changeName($event)></Elige>

    real name {{ proName }}

    <div>
        <template v-for=" (p,index) in teamPicture" :key="index">
            <img :src="getPicFile(p.src)" v-if="index==0" style="position: sticky;top:0">
            <img :src="getPicFile(p.src)" v-if="index!=0">
        </template>
    </div>
    <template v-for=" p in teamPicture" :key="p.src">
        <img :src="getPicFile(p.src)">
    </template>

    
</template>

<script setup>
import { ref } from 'vue'
import Elige from './team-player/Elige.vue';
import useUtils from '@/hooks/useUtils';

const proName = ref('')

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

</script>