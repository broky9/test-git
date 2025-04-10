import axios from 'axios'
import { ref, onMounted } from 'vue'

export default function () {
  const photoData = ref('')
  const getPhoto = async () => {
    const imgSrc = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
    photoData.value = imgSrc.data.message
  }
  //   onMounted(() => {
  //     getPhoto()
  //   })
  return { photoData, getPhoto }
}
