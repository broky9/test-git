<template>
  <div>{{ name }}</div>
  <div>{{ team }}</div>
  <div>{{ age }}</div>
  <div>
    <img :src="getAssetsFile(img)" />
  </div>
  {{ fazeStore.fazenumber }}
  <br />
  {{ counterStore.doubleCount }}
  <div>
    <img :src="dogImgStore.dogImg" />
    <a-button @click="dogImgStore.updateDogImg">获取图片</a-button>
  </div>
</template>

<script setup lang="ts">
import useUtils from '@/hooks/useUtils'

import { useFazeClan } from '@/stores/faze'
import { useCounterStore } from '@/stores/counter'
import useGetPhoto from '@/hooks/useGetPhoto'
import { useDogImg } from '@/stores/dogImg'

const emits = defineEmits(['get-photo'])

const { photoData, getPhoto } = useGetPhoto()

const dogImgStore = useDogImg()

const fazeStore = useFazeClan()

const counterStore = useCounterStore()

const { getAssetsFile } = useUtils()

defineProps<{
  name: string
  team: string
  age: string
  img: string
}>()
</script>

<style scoped></style>
