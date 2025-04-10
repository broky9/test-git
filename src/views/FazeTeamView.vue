<template>
  <div>
    <template> asdsad </template>
    <h1 a="1+1">kkkkkkkkkkkkkkkkkkkkkkk</h1>
  </div>
  <a-input v-model:value="antValue" placeholder="Basic usage" />

  <!-- 本质 -->
  <!-- <TestInput
    :myTest="myValue"
    @update:my-test="
      ($event) => {
        myValue = $event
      }
    "
  ></TestInput> -->

  <!-- 简写 -->
  <TestInput v-model:my-test="myValue"></TestInput>

  <div>
    <img :src="dogImgStore.dogImg" />
  </div>
  <div>
    <button @click="dogImgStore.updateDogImg">获取图片</button>
  </div>

  <input :value="myValue" @input="myValue = ($event.target as HTMLInputElement).value" />
  {{ myValue }}
  <div class="fazeContent">
    <div>
      <ul>
        <li v-for="(n, index) in FazeTeam" :key="index" style="margin: 10px 0">
          <a-button @click="showProInfo(n)">展示资料</a-button>
          <router-link :to="{ path: `/faze/proInfo` }">{{ n.name }}</router-link>
        </li>
      </ul>
    </div>
    <div class="proInfoArea" v-if="Object.keys(useRoute().query).length">
      <!-- <router-view v-slot="{ Component, route }">
        <transition name="list" mode="out-in">
          <div :key="route.path">
            <keep-alive>
              <component :is="Component" :key="route.fullPath" />
            </keep-alive>
          </div>
        </transition>
      </router-view> -->
      <RouterView> </RouterView>
    </div>
    <div v-if="!Object.keys(useRoute().query).length">'请选择faze队员'</div>

    {{ fazeStore.fazenumber }}
    {{ fazeStore.timesFazeNumber }}
    {{ fazeStore.fazekkk }}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { type ProList } from '@/type'
import { RouterView, useRouter } from 'vue-router'
import { useFazeClan } from '@/stores/faze'
import TestInput from '@/components/TestInput.vue'
import useGetPhoto from '@/hooks/useGetPhoto'
import axios from 'axios'
import { useDogImg } from '@/stores/dogImg'
import { useRoute } from 'vue-router'

const { photoData, getPhoto } = useGetPhoto()

const dogImgStore = useDogImg()

const onChange = (current: number) => {
  console.log(current)
}

// const photoData = ref('')
// const getPhoto = async () => {
//   const imgSrc = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
//   photoData.value = imgSrc.data.message
// }

const antValue = ref('')

const myValue = ref('2')

const fazeStore = useFazeClan()

fazeStore.getFazeNumber()
fazeStore.timesFazeNumber
fazeStore.fazekkk

const router = useRouter()

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

const showProInfo = (n) => {
  console.log(n)
  router.push({
    path: '/faze/proInfo',
    query: n
  })
}
</script>

<style scoped>
.fazeContent {
  display: flex;
  justify-content: space-between;
}

.proInfoArea {
  padding: 10px;
  border: 1px solid gray;
  box-shadow: 0 0 5px;
}

.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>
