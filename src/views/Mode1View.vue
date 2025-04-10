<template>
  <div class="modelC">
    <h2>{{ count }}____ {{ klkl }}</h2>
    <hr />

    {{ asmon.version }} --- {{ asmon.lastDate }} ===== {{ asmonV.version }}

    <button @click="changeVersion">changeVersion</button>
    <button @click="changeLasteDate">changeLasteDate</button>
    <button @click="changeAsmon">changeAsmon</button>

    <img :src="dogImg" />
    <button @click="updateDogImg">刷新小狗</button>

    <hr />

    <Model1Child
      ref="modeChild"
      :title="model1Title"
      :parentData="parentData"
      :FazeTeam="FazeTeam"
      @get-message="xxc($event)"
      @show-info="showInfo()"
    >
      <template v-slot:child1Slot="param">
        <div>
          <h1 style="font-size: 30px">how i meet your mother</h1>
          {{ param }}
        </div>
      </template>
      <template #default="param">
        <div>刷卡啊纱似的 {{ param }}</div>
      </template>
    </Model1Child>

    <Model2Child
      :title="model1Title"
      :parentData="parentData"
      :FazeTeam="FazeTeam"
      @get-message="xxc($event)"
      @show-info="showInfo()"
    >
    </Model2Child>
  </div>
  <div v-if="showState">hidden info</div>

  <input />
</template>

<script setup lang="ts">
import { reactive, ref, toRef, watch } from 'vue'
import { type ProList } from '@/type'
import Model1Child from '@/components/Model1Child.vue'
import Model2Child from '@/components/Model2Child .vue'
import useDog from '@/hooks/useDog'

const { dogImg, updateDogImg } = useDog()

const FazeTeam = ref<ProList>([
  {
    name: 'broky',
    team: 'Faze Clan',
    age: 20,
    img: 'broky.jpg'
  },
  {
    name: 'rain',
    team: 'Faze Clan',
    age: 29,
    img: 'rain.jpg'
  },
  {
    name: 'karrigan',
    team: 'Faze Clan',
    age: 31,
    img: 'karrigan.jpg'
  },
  {
    name: 'ropz',
    team: 'Faze Clan',
    age: 20,
    img: 'ropz.jpg'
  },
  {
    name: 'frozen',
    team: 'Faze Clan',
    age: 19,
    img: 'frozen.jpg'
  }
])

const count = ref(0)

const klkl = count

const showState = ref(false)

const modeChild = ref()

const parentData = reactive({
  name: '123'
})

const asmon = ref({
  version: 1,
  lastDate: '2022.11.08'
})

const asmonV = toRef(asmon, 'value')

const watchP = watch(count, (newValue) => {
  if (newValue > 10) {
    watchP()
  }
  console.log('还在监视')
})

const watchAsmon = watch(
  asmon,
  (newValue, oldValue) => {
    console.log(newValue, '---', oldValue)
  },
  {
    deep: true
  }
)

const model1Title = ref('this is model1')

function xxc($event) {
  count.value++
  window.alert($event)
}

const showInfo = () => {
  showState.value = !showState.value
}

const changeVersion = () => {
  asmon.value.version = +(asmon.value.version + 0.1).toFixed(2)
  console.log(asmon.value.version)
}
const changeLasteDate = () => {
  asmon.value.lastDate = '2024.02.08'
}
const changeAsmon = () => {
  asmon.value = {
    version: 9,
    lastDate: '2030.02.08'
  }
  modeChild.value.increasePrice()
}
</script>

<style>
.modelC {
  border: 1px black solid;
  padding: 10px;
  /* background-color: grey; */
}
</style>
