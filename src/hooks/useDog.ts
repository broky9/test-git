import axios from 'axios'
import { onMounted, ref } from 'vue'

export default function () {
  const dogImg = ref('')

  const updateDogImg = async () => {
    const dogRes = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
    dogImg.value = dogRes.data.message
  }

  onMounted(() => {
    updateDogImg()
  })

  return { dogImg, updateDogImg }
}
