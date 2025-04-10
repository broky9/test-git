import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDogImg = defineStore('dogImg', () => {
  const dogImg = ref()
  const updateDogImg = async () => {
    const dogRes = axios.get('https://dog.ceo/api/breed/pembroke/images/random')
    dogImg.value = (await dogRes).data.message
  }
  return { dogImg, updateDogImg }
})
