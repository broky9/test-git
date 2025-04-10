<template>
  <div class="model1ChildC">
    <div v-if="childInput">
      {{ title }} '='='=' {{ mynumber }} === {{ parentData.name }} ********** {{ inputValue }}
    </div>

    <input ref="childInput" v-model="inputValue" />

    <div @click="modelClick">click here</div>

    <div>一辆{{ car.name }}的价格是{{ car.price }}</div>

    <div>
      <button class="buttonShow" @click="showInfo">
        <h2>showInfo</h2>
      </button>
    </div>
    <div>
      <button class="buttonShow" @click="increasePrice">
        <h2>increase price</h2>
      </button>
    </div>

    <hr />
    <div>
      {{ price }}
      <br />
      {{ age }}
      <br />
      {{ watchPriace }}
    </div>
    <hr />
    <div>
      <img src="@/img/faze-clan/faze-clan.jpg" />
    </div>
    <slot :car="car"> </slot>
    <!-- <div v-for="(p, index) in FazeTeam" :key="index" class="flex-between">
      <div style="flex: 1">
        <h1>name: {{ p.name }}</h1>
        <h1>age: {{ p.age }}</h1>
        <h1>team: {{ p.team }}</h1>
      </div>
      <div style="flex: 1; text-align: right">
        <img :src="getAssetsFile(p.img)" style="width: 320px" />
      </div>
      <hr />
    </div> -->

    <h2>{{ $attrs }}</h2>
    <slot :fromMode1="mynumber" name="child1Slot"> </slot>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref, toRefs } from 'vue'
import { type ProList } from '@/type'
import { useRouter } from 'vue-router'
import useUtils from '@/hooks/useUtils'
import emitter from '@/utils/emitter'
import useCustomerRef from '@/hooks/useCustomerRef'

import { useFazeClan } from '@/stores/faze'

const fazeStore = useFazeClan()

// const pros = defineProps(['title', 'parentData', 'FazeTeam'])

const props = defineProps<{
  title: string
  parentData: { name: string }
  // FazeTeam: ProList
}>()

// const props = defineProps<{
//   title: string
//   parentData: Object
//   FazeTeam: ProList
// }>()

console.log(useRouter())

const router = useRouter()

const { myInputRef } = useCustomerRef('s')

// const getAssetsFile = (url: string) => {
//   console.log(`../img/faze-clan/${url}`)
//   return new URL(`../img/faze-clan/${url}`, import.meta.url).href
// }

const { getAssetsFile } = useUtils()

const emit = defineEmits(['get-message', 'show-info'])

const mynumber = ref('this is my number')

const car = ref({ name: '大众', price: 20 })

const childInput = ref(null)

const inputValue = useCustomerRef('s').myInputRef

console.log(inputValue, '111111111111')

const object1 = reactive({
  price: 109,
  age: 12
})

const watchPriace = computed(() => {
  return object1.price
})

const { price, age } = toRefs(object1)

const modelClick = () => {
  emit('get-message', 'sad')
  // window.alert(inputValue.value)
}

const showInfo = () => {
  fazeStore.fazenumber += 1
  emit('show-info', '')
  emitter.emit('pass-id', { title: '我把id给你了' })
}

const increasePrice = () => {
  car.value.price += 10
  object1.price++
  // router.push('/faze')
}

onMounted(() => {
  // setTimeout(() => {
  //   if (childInput.value) {
  //     window.alert(childInput)
  //     emit('get-message', 'sad')
  //   }
  // }, 3000)
})

defineExpose({ increasePrice })
</script>

<style scoped>
.model1ChildC {
  padding: 10px;
  border: 1px black solid;
  /* background-color: aqua; */
}

.buttonShow {
  padding: 10px;
  border-radius: 25px;
  box-shadow: 4px 4px 8px #888;
  border: 1px grey solid;
  background-color: green;
  cursor: pointer;
}

.flex-between {
  padding: 50px 200px;
  display: flex;
  justify-content: space-between;
  box-shadow: 10px 10px 5px #888;
}
</style>
